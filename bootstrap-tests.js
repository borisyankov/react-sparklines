import path from 'path';
import {render} from 'enzyme';
import LineByLineReader from 'line-by-line';
import reactElementToJsx from 'react-element-to-jsx-string';
import {writeFileSync} from 'fs';

const fixturesFile = path.resolve(__dirname, './__tests__/fixtures.js');
const dynamicPartStartSignal = '// AUTO-GENERATED PART STARTS HERE';
const dynamicPartEndSignal = '// AUTO-GENERATED PART ENDS HERE';

const fixtures = require(fixturesFile).default;

// Output control
let outData = '';
const write = content => { outData += content + '\n'; }
const save = () => writeFileSync(fixturesFile, outData);
function writeFixtures() {
	for (let key of Object.keys(fixtures)) {
		const jsx = fixtures[key].jsx;
		const wrapper = render(jsx);
		const jsxCode = `(${toOneLine(reactElementToJsx(jsx))})`;
		const htmlCode = JSON.stringify(wrapper.html());

        write(`\t${JSON.stringify(key)}: {jsx: ${jsxCode}, html: ${htmlCode}},`);
	}
}
function toOneLine(code) {
	return code.replace(/\s*[\r\n]\s*/g, ' ').replace(/\s+/g, ' ');
}

// Input control
const lr = new LineByLineReader(fixturesFile, {skipEmptyLines: false});
let inDynamicPart = false, dynamicPartCount = 0, lineCount = 0;

lr.on('line', line => {
	++lineCount;
	if (line === dynamicPartStartSignal) {
		if (inDynamicPart)
			throw new LineError('Dynamic part opened again');
		++dynamicPartCount;
		if (dynamicPartCount > 1)
			throw new LineError('Multiple dynamic parts found');
		inDynamicPart = true;
		write(line);
		try {
			writeFixtures();
		} catch(e) {
			throw new LineError(e);
		}
	}
	else if (line === dynamicPartEndSignal) {
		if (!inDynamicPart)
			throw new LineError('Dynamic part closed again');
		inDynamicPart = false;
		write(line);
	}
	else if (!inDynamicPart)
		write(line);
});

lr.on('end', () => {
	if (inDynamicPart) {
		throw new LineError('Dynamic part not closed');
	}
	if (!dynamicPartCount) {
		throw new LineError('No dynamic part found in file!');
	}
	save();
});

lr.on('error', function (err) {
	throw new LineError(err);
});

class LineError extends Error {
	constructor(message) {
		super(`${fixturesFile}:${lineCount}: ${message}`);
	}
}