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
  const [chartData, setChartData] = useState<any[]>([]);
  const [time,setTime] = useState < number > (0);

  const handleValuesChange = (values: any) => {
    setNewPrincipal(values.newPrincipal);
    setTotalDeposit(values.totalDeposit);
    setAmountOfYield(values.amountOfYield);
    setZeroYield(values.zeroYield);
    setTime(values.time);

    setChartData([

      {
        id: 'Endkapital',
        data: [
          { x: 1, y: 1 },
          { x: 5, y: 10 },
          { x: 15, y: 20 },
          { x: values.time, y: values.newPrincipal },

        ],
      },
      {
        id: 'ZeroYield',
        data: [
          { x: 1, y: 1 },
          {  y: values.totalDeposit },
        ],
      },

    ]);
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
        <CompoundInterestChart chartData={chartData} />
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
