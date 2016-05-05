// bootstrap-tests.js - A tool for updating the test cases in __tests__/fixtures.js
//
// 1) Reads __tests__/fixtures.js and looks for a "dynamic part", which should be a list of fields
//    belonging to that file's default export, enclosed in a pair of markers (see "signal" constants
//	  below).
// 2) Imports the same fixtures file and (re-)renders each ReactElement to a static SVG string.
// 3) On success, overwrites __tests__/fixtures.js with an updated copy.
//
// Run with babel-node or using "npm run test:bootstrap".

import path from 'path';
import { render } from 'enzyme';
import LineByLineReader from 'line-by-line';
import reactElementToJsx from 'react-element-to-jsx-string';
import { writeFileSync } from 'fs';
import replaceAll from 'replaceall';
import React from 'react';

const fixturesFile = path.resolve(__dirname, './__tests__/fixtures.js');
const dynamicPartStartSignal = '// AUTO-GENERATED PART STARTS HERE';
const dynamicPartEndSignal = '// AUTO-GENERATED PART ENDS HERE';

const fixtures = require(fixturesFile).default;

// Handle recurring data constants
import { sampleData, sampleData100 } from './__tests__/data';
const recognizedDataConstants = {
	sampleData, sampleData100
};
const recognizedDataStrings = {};
for (let dataKey of Object.keys(recognizedDataConstants)) {
	recognizedDataStrings[dataKey] = markupToOneLine(reactElementToJsx(<div data-value={recognizedDataConstants[dataKey]} />)
		.replace(/[^{]*\{|\}[^}]*/g, ''));
}

// Output control
let outData = '';
const write = content => { outData += content + '\n'; }
const save = () => writeFileSync(fixturesFile, outData);
function writeFixtures() {
	for (let key of Object.keys(fixtures)) {
		const jsx = fixtures[key].jsx;
		const wrapper = render(jsx);
		let jsxCode = `(${markupToOneLine(reactElementToJsx(jsx))})`;
		const htmlCode = JSON.stringify(wrapper.html());
		for (let dataKey of Object.keys(recognizedDataStrings)) {
			jsxCode = replaceAll(recognizedDataStrings[dataKey], dataKey, jsxCode);
		}
        write(`\t${JSON.stringify(key)}: {jsx: ${jsxCode}, svg: ${htmlCode}},`);
	}
}
function markupToOneLine(code) {
	return code.replace(/\s*[\r\n]\s*/g, ' ').replace(/\s+/g, ' ').replace(/\s*([<>])\s*/g, '$1');
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
