import hiff from 'hiff';

function normalizeStyle(style) {
	style = (style || '').split(';').map(s => s.trim());
	style.sort();
	return style.join(';');
}

function normalizeAttrs(...$ns) {
	for (let $n of $ns) {
		if ($n.attr('style'))
			$n.attr('style', normalizeStyle($n.attr('style')));
	}
}

function comparatorFn($n1, $n2, childChanges) {
	normalizeAttrs($n1, $n2);
	return hiff.defaultTagComparisonFn($n1, $n2, childChanges);
}

export default function compareSvg(svg1, svg2, options = {}) {
	return hiff.compare(svg1, svg2, Object.assign({}, options, {tagComparison: comparatorFn}));
}
