import { Theme } from "@nivo/core";
import { SliceTooltipProps } from "@nivo/line";
import dynamic from "next/dynamic";
import React, { FC } from "react";

import { InfoTooltip } from "src/core/infoTooltip";
import { useTranslation } from "src/shared/translations";

import { formatCurrency } from "lib/utils";

// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310 is fixed
const ResponsiveLine = dynamic(() => import("@nivo/line").then((m) => m.ResponsiveLine), {
  ssr: false
});

const FONT = {
  fill: "#907D69",
  color: "#907D69",
  fontSize: 14,
  fontFamily: '"DINNextW01", "Helvetica Neue", helvetica, arial, sans-serif'
};

const THEME: Theme = {
  crosshair: {
    line: {
      stroke: "#E8E1D8",
      strokeWidth: 2
    }
  },
  grid: {
    line: {
      stroke: "#E8E1D8",
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
        stroke: "#E8E1D8",
        strokeWidth: 2,
        strokeOpacity: 1
      },
      text: {
        ...FONT
      }
    }
  }
};

const data = [
  {
    id: "savingsAccount",
    color: "hsl(34, 23%, 74%)",
    data: [
      {
        x: 0,
        y: 0
      },
      {
        x: 5,
        y: 6233
      },
      {
        x: 10,
        y: 12947
      },
      {
        x: 15,
        y: 20181
      },
      {
        x: 20,
        y: 27973
      },
      {
        x: 25,
        y: 36368
      }
    ]
  },
  {
    id: "invested",
    color: "hsl(32, 81%, 48%)",
    data: [
      {
        x: 0,
        y: 0
      },
      {
        x: 5,
        y: 6809
      },
      {
        x: 10,
        y: 15499
      },
      {
        x: 15,
        y: 26590
      },
      {
        x: 20,
        y: 40746
      },
      {
        x: 25,
        y: 58812
      }
    ]
  }
];

export const PerformanceChart: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-96">
        <ResponsiveLine
          data={data}
          theme={THEME}
          colors={{ datum: "color" }}
          margin={{ top: 10, right: 10, bottom: 70, left: 70 }}
          yScale={{
            type: "linear",
            min: 0,
            max: 60000
          }}
          curve="monotoneX"
          enablePoints={false}
          enableGridX={false}
          enableSlices="x"
          sliceTooltip={Tooltip}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 0,
            tickPadding: 20,
            tickValues: [0, 10000, 20000, 30000, 40000, 50000, 60000],
            format: (value) => (value > 0 ? formatCurrency(+value / 1000) + "k" : "CHF 0")
          }}
          axisBottom={{
            tickSize: 0,
            tickPadding: 20
          }}
        />
      </div>
      <div className="flex flex-col text-xs text-dark-100 mb-6">
        <div className="display flex items-center gap-2">
          <span className="w-4 h-0.5 -mt-0.5 bg-primary-100" />
          <div>
            {t("childPortfolio.performance.invested")}
            <InfoTooltip tooltip={t("childPortfolio.performance.expectedReturnTooltip")} />
          </div>
        </div>
        <div className="display flex items-center gap-2">
          <span className="w-4 h-0.5 -mt-0.5 bg-light-400" />
          {t("childPortfolio.performance.savingsAccount")}
        </div>
      </div>
    </>
  );
};

const Tooltip: React.FC<SliceTooltipProps> = ({ slice }) => {
  const { t } = useTranslation();
  const stocks = slice.points[0];
  const savingsAccount = slice.points[1];
  return (
    <div className="shadow bg-white p-4 rounded text-xs grid grid-cols-2 w-80 whitespace-nowrap">
      <div>
        <span className="inline-block w-3 h-3 rounded-full bg-primary-100 mr-1" />
        {t("childPortfolio.performance.invested")}
      </div>
      <div className="text-right">
        {stocks?.data.y !== undefined && formatCurrency(+stocks.data.y)}
      </div>
      <div>
        <span className="inline-block w-3 h-3 rounded-full bg-light-400 mr-1" />
        {t("childPortfolio.performance.savingsAccount")}
      </div>
      <div className="text-right">
        {savingsAccount?.data.y !== undefined && formatCurrency(+savingsAccount.data.y)}
      </div>
    </div>
  );
};
