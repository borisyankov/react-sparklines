import React from 'react';
import DataProcessor from './DataProcessor';

export default class SparklinesSegmentContainer extends React.Component {
    render() {
        const { points, children, ...props } = this.props;
        const groups = DataProcessor.pointsToSegments(points)
                .filter(segment => !segment.isGap)
                .map((segment, i) => React.cloneElement(React.Children.only(children), {
                            key: i,
                            points: segment.points,
                            ...props
                        }));
        if (groups.length === 1)
            return groups[0];
        return <g>{groups}</g>;
    }
}
