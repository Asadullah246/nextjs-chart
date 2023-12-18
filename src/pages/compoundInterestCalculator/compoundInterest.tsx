import React, { useState } from 'react';
import CompoundInterestKPITile from './compoundInterestKPITile';
import CompoundInterestForm from './compoundInterestForm';
import CompoundInterestSummaryTile from './compoundInterestSummaryTile';
import CompoundInterestChart from './compoundInterestChart';



const CompoundInterest = () => {
  const [newPrincipal, setNewPrincipal] = useState<number>(0);
  const [totalDeposit, setTotalDeposit] = useState<number>(0);
  const [amountOfYield, setAmountOfYield] = useState<number>(0);
  const [zeroYield, setZeroYield] = useState<number>(0);

  const [chartData, setChartData] = useState<any[]>(
    [

      {
        "id": "ZeroYield",
        "color": "hsl(52, 70%, 50%)",
        "data": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 13,
            "y": 15
          },
          {
            "x": 25,
            "y": 60
          }
        ]
      },
      {
        "id": "Endkapital",
        "color": "hsl(120, 100%, 50%)",
        "data": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 20,
            "y": 30
          },
          {
            "x": 32,
            "y": 80
          },

        ]
      },

    ]
  )

  const [time, setTime] = useState<number>(0);

  const handleValuesChange = (values: any) => {
    setNewPrincipal(values.newPrincipal);
    setTotalDeposit(values.totalDeposit);
    setAmountOfYield(values.amountOfYield);
    setZeroYield(values.zeroYield);
    setTime(values.time);


    setChartData(
      [

        {
          "id": "ZeroYield",
          "color": "hsl(52, 70%, 50%)",
          "data": [
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 13,
              "y": 15
            },
            {
              "x": 35,
              "y": 60
            },
            {"x":40,  y: values.totalDeposit }
          ]
        },
        {
          "id": "Endkapital",
          "color": "hsl(120, 100%, 50%)",
          "data": [
            {
              "x": 0,
              "y": 7
            },
            {
              "x": 13,
              "y": 30
            },
            {
              "x": 35,
              "y": 80
            },
            { "x": values.time, y: values.newPrincipal }

          ]
        },

      ]
    )


  };







  return (
    <>
      <div className="pt-5">
        <CompoundInterestKPITile
          newPrincipal={newPrincipal}
          totalDeposit={totalDeposit}
          amountOfYield={amountOfYield}
        />
      </div>

      <div className="md:flex gap-8 py-8">
        <div className="w-full md:w-4/12">
          <CompoundInterestForm onValuesChange={handleValuesChange} />
        </div>
        <div className="w-full md:w-8/12  bg-white shadow-sm">
          <CompoundInterestChart chartData={chartData}  />
        </div>


      </div>

      <CompoundInterestSummaryTile
        newPrincipal={newPrincipal}
        totalDeposit={totalDeposit}
        amountOfYield={amountOfYield}
      />
    </>
  );
};

export default CompoundInterest;
