// compoundInterestChart.tsx
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Theme } from '@nivo/core';
import dynamic from 'next/dynamic';

import { useTranslation } from 'src/shared/translations';

import { formatCurrency } from 'lib/utils';

// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310
// is fixed
const ResponsiveLine = dynamic(() => import('@nivo/line').then((m) => m.ResponsiveLine), { ssr: false });

const FONT = {
    fill: '#907D69',
    color: '#907D69',
    fontSize: 14,
    fontFamily: '"DINNextW01", "Helvetica Neue", helvetica, arial, sans-serif'
};

const THEME: Theme = {

    crosshair: {
        line: {
            stroke: '#E8E1D8',
            strokeWidth: 2
        }
    },
    grid: {
        line: {
            stroke: '#E8E1D8',
            strokeWidth: 1,
            strokeOpacity: 1
        }
    },
    markers: {},
    legends: {
        text: {
            ...FONT
        }
    },
    axis: {
        legend: {
            text: {
                ...FONT
            }
        },
        ticks: {
            line: {
                stroke: '#E8E1D8,',
                strokeWidth: 2,
                strokeOpacity: 1
            },
            text: {
                ...FONT
            }
        }
    }
};

interface CompoundInterestChartProps {
    chartData: {
        id: string;
        color?: any;
        data: {
            x: any;
            y: any
        }[]
    }[];
    chartData2: {
        id: any;
        color: any;
        data: { x: any; y: any }[];
    }[];
}


const CompoundInterestChart: FC<CompoundInterestChartProps> = ({ chartData, chartData2 }) => {
    useTranslation();

    if (!chartData || chartData.length === 0) {
        return <div>No data available for chart</div>;
    }

    // console.log("chart" , chartData);

    // you can using the bellow function if you need the x values dyanamic. that have a problem, is it create the filling value so the point will be increased

    const [modified, setModified] = useState<any[]>([])

    useEffect(() => {
        // Preprocess data to ensure all x-values are present
        const allXValues = Array.from(
            new Set(chartData.flatMap(dataset => dataset.data.map(point => point.x)))
        ).sort((a, b) => a - b);

        const preprocessedData = chartData.map(dataset => {
            const indexedData = Object.fromEntries(
                dataset.data.map(point => [point.x, point.y])
            );

            const filledData = allXValues.map(x => ({
                x,
                y: indexedData[x] !== undefined ? indexedData[x] : 0
            }));

            return { ...dataset, data: filledData };
        });
        setModified(preprocessedData)

    }, [chartData])

    return (
        // h-3/6
        <div className=" h-3/6 p-16">

{/*
            <ResponsiveLine
                data={chartData2}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            /> */}

            <div className='h-full  p-16'>
                <ResponsiveLine
                    data={chartData}
                    theme={THEME}

                    margin={{
                        right: 10,
                        bottom: 100,
                        left: 80
                    }}

                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        // min: 'auto',
                        // max: 'auto',
                        stacked: false,
                        reverse: false,
                    }}


                    enablePoints={false}
                    enableGridX={false}

                    enableSlices="x"
                    axisTop={null}
                    axisRight={null}
                    axisLeft={{
                        tickSize: 0,
                        tickPadding: 10,
                        format: (value) => (value > 0
                            ? formatCurrency(+ value / 10000) + 'k'
                            : 'CHF 0')
                    }}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 40,

                        format: (value) => `${value} Jahre`
                    }}

                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 80,
                            itemsSpacing: 10, 
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </div>
        </div>


    );
};

export default CompoundInterestChart;
