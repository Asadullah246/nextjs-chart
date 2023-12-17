// compoundInterestChart.tsx
import React from 'react';
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
            stroke: 'blue',
            strokeWidth: 2
        }
    },
    grid: {
        line: {
            stroke: 'green',
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
        data: {
            x: number;
            y: number
        }[]
    }[];
}

const CompoundInterestChart: FC<CompoundInterestChartProps> = ({ chartData }) => {
    useTranslation();

    if (!chartData || chartData.length === 0) {
        return <div>No data available for chart</div>;
    }

    return (
        <div className="h-3/6 p-16">
            <ResponsiveLine
                data={chartData}
                theme={THEME}

                margin={{
                    right: 10,
                    bottom: 70,
                    left: 80
                }}
                yScale={{
                    type: 'linear',

                }}
                // curve="monotoneX"

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
                // new

                // axisLeft={{
                //     tickSize: 0,
                //     tickPadding: 10,
                //     format: (value) => (value > 0 ? formatCurrency(+value / 10000) + 'k' : 'CHF 0'),
                //   }}
                //   axisBottom={{
                //     tickSize: 0,
                //     tickPadding: 40,
                //     format: (value) => `${value} Jahre`,
                //   }}

                //   xScale={{ type: 'point' }}
                //   yScale={{
                //       type: 'linear',
                //       min: 'auto',
                //       max: 'auto',
                //       stacked: true,
                //       reverse: false
                //   }}
                //   yFormat=" >-.2f"
                //   axisTop={null}
                //   axisRight={null}
                //   axisBottom={{
                //       tickSize: 5,
                //       tickPadding: 5,
                //       tickRotation: 0,
                //       legend: 'transportation',
                //       legendOffset: 36,
                //       legendPosition: 'middle'
                //   }}
                //   axisLeft={{
                //       tickSize: 5,
                //       tickPadding: 5,
                //       tickRotation: 0,
                //       legend: 'count',
                //       legendOffset: -40,
                //       legendPosition: 'middle'
                //   }}

                curve="natural"
                legends={[
                    {
                      anchor: 'bottom-right', // Adjust anchor as needed
                      direction: 'row',       // Adjust direction as needed
                      justify: false,
                      translateX: 0,
                      translateY: 70,
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
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}



            />
        </div>


    );
};

export default CompoundInterestChart;
