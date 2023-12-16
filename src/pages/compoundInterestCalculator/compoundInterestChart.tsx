// compoundInterestChart.tsx
import React from 'react';
import {FC} from 'react';
import {Theme} from '@nivo/core';
import dynamic from 'next/dynamic';

import {useTranslation} from 'src/shared/translations';

import {formatCurrency} from 'lib/utils';

// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310
// is fixed
const ResponsiveLine = dynamic(() => import ('@nivo/line').then((m) => m.ResponsiveLine), {ssr: false});

const FONT = {
    fill: '#907D69',
    color: '#907D69',
    fontSize: 14,
    fontFamily: '"DINNextW01", "Helvetica Neue", helvetica, arial, sans-serif'
};

const THEME : Theme = {
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
    chartData : {
        id: string;
        data: {
            x: number;
            y: number
        }[]
    }[];
}

const CompoundInterestChart : FC < CompoundInterestChartProps > = ({chartData}) => {
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
                curve="monotoneX"
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
            }}/>
        </div>
        
        
    );
};

export default CompoundInterestChart;
