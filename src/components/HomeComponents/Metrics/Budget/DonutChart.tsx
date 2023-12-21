import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {RadialChart} from 'react-vis';
import {ICategory} from "../../../../store/Slice/categorySlice.ts";

interface DonutChartProps {
    total: number;
    category: Array<ICategory>;
}
interface IDonutChartData {
    angle: number;
    label: string;
    subLabel: string;
}

const DonutChart: React.FC<DonutChartProps> = ({total, category}: DonutChartProps) => {

    const datan = [
        {angle: 45, label: 'Alimentation', subLabel: `${(45/100)*total}€`},
        {angle: 25, label: 'Transport', subLabel: `${(25/100)*total}€`},
        {angle: 30, label: 'Loisir', subLabel: `${(30/100)*total}€`},
    ]

    const data: IDonutChartData[] = category.reduce((acc: IDonutChartData[], current: ICategory) => {
        if (!current.budget) {
            return acc
        }
        const angle = (current.budget / total) * 100
        acc.push({
            angle,
            label: current.name,
            subLabel: `${current.budget}€`
        })
        return acc
    }, [])

    return (
        <RadialChart
            data={data}
            width={200}
            height={200}
            showLabels={true}
            labelsStyle={{
                fontSize: 12,
                fill: '#fff',
                padding: "5px !important",
            }}
            labelsRadiusMultiplier={.9}
            stroke={'#fff'}
            margin={{left: 0, right: 0, top: 0, bottom: 0}}
            innerRadius={57}
            radius={80}
            animation={'gentle'}
        />
    );
};

export default DonutChart;