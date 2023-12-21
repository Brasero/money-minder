// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {XYPlot, LineSeries, HorizontalGridLines, YAxis} from 'react-vis';
import '../../../../../node_modules/react-vis/dist/style.css';

const Chart = () => {

    const data = [
        {x: 0, y: 950},
        {x: 10, y: 3150},
        {x: 15, y: 2605},
        {x: 17, y: 2100},
        {x: 20, y: 2900},
        {x: 25, y: 2100},
    ]

    return (
        <XYPlot height={125} width={200}>
            <HorizontalGridLines style={{
                stroke: '#cecece',
                strokeWidth: 1,
            }} />
            <LineSeries data={data} />
            <YAxis tickTotal={3}/>
        </XYPlot>
    );
};

export default Chart;