export const lineStyle = {
    stroke: 'slategray',
    strokeWidth: '1',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    fill: 'none'
};

export const fillStyle = {
    stroke: 'none',
    strokeWidth: '0',
    fillOpacity: '.1',
    fill: 'slategray'
};

export const getLineStyle = ({color, style}) => {
	const defaultStyle = lineStyle;
	style = style || {};

	return {
       stroke: color || style.stroke || defaultStyle.stroke,
       strokeWidth: style.strokeWidth || defaultStyle.strokeWidth,
       strokeLinejoin: style.strokeLinejoin || defaultStyle.strokeLinejoin,
       strokeLinecap: style.strokeLinecap || defaultStyle.strokeLinecap,
       fill: defaultStyle.fill
   };
}

export const getFillStyle = ({color, style}) => {
	const defaultStyle = fillStyle;
	style = style || {};

	return {
       stroke: style.stroke || defaultStyle.stroke,
       strokeWidth: defaultStyle.strokeWidth,
       fillOpacity: style.fillOpacity || defaultStyle.fillOpacity,
       fill: style.fill || color || defaultStyle.fill
   };
}

