// path : src/components/HomeComponents/Metrics/Budget/AgDonutChart/index.tsx
import "./style.scss";
import React, {useEffect, useState} from 'react'
import { AgChartsReact } from "ag-charts-react";
import {AgChartOptions, AgChartLegendLabelFormatterParams} from "ag-charts-community";
import {capitalize} from "../../utils/utils.ts";


interface IChartItem {
    name: string;
    budget: number;
}

interface IAgDonutChart {
    items: IChartItem[];
    name: string;
}

const AgDonutChart: React.FC<IAgDonutChart> = ({items, name}) => {

    const formatter = ({value}: AgChartLegendLabelFormatterParams) => {
        const item = items.find(c => c.name === value)
        const formatString = (string: string) => string.length > 11 ? string.substring(0, 11)+"..." : string
        return item ? `${capitalize(formatString(value))} ${item.budget}€` : capitalize(value)
    }

    useEffect(() => {
        setChartOptions((prev) => ({
            ...prev,
            data: items,
        }))
    }, [items]);

    //Définition des options du graphique donuts
    const [chartOptions, setChartOptions] = useState<AgChartOptions>({
        background: {
            visible: false
        },
        padding: {
            top: 0,
            bottom: 0,
        },
        data: items,
        legend: {
            preventHidingAll: true,
            position: "bottom",
            maxHeight: 100,
            maxWidth: 200,
            spacing: 0,
            item: {label: { formatter }, maxWidth: 250}
        },
        overlays: {
            noData: {
                text: 'Aucune donnée à afficher'
            },
            noVisibleSeries: {
                text: 'Aucune donnée à afficher'
            }
        },
        series: [
            {
                // @ts-ignore
                type: "donut",
                calloutLabelKey: "name",
                calloutLabel: {
                    avoidCollisions: true,
                    offset: 0
                },
                angleKey: 'budget',
                innerRadiusRatio: 0.7,
                innerLabels: [
                    {
                        text: name.toUpperCase(),
                        fontWeight: "bold",
                        fontFamily: "var(--primary-font)",
                        fontSize: 70
                    }
                ]
            }
        ]
    })

    return <AgChartsReact options={chartOptions} />
}

export default AgDonutChart