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
  const [chartData2, setChartData2] = useState<any[]>(
    [
      {
        "id": "japan",
        "color": "hsl(52, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 168
          },
          {
            "x": "helicopter",
            "y": 204
          },
          {
            "x": "boat",
            "y": 273
          },
          {
            "x": "train",
            "y": 9
          },
          {
            "x": "subway",
            "y": 27
          },
          {
            "x": "bus",
            "y": 266
          },
          {
            "x": "car",
            "y": 109
          },
          {
            "x": "moto",
            "y": 190
          },
          {
            "x": "bicycle",
            "y": 121
          },
          {
            "x": "horse",
            "y": 73
          },
          {
            "x": "skateboard",
            "y": 147
          },
          {
            "x": "others",
            "y": 228
          }
        ]
      },
      {
        "id": "france",
        "color": "hsl(87, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 73
          },
          {
            "x": "helicopter",
            "y": 208
          },
          {
            "x": "boat",
            "y": 48
          },
          {
            "x": "train",
            "y": 209
          },
          {
            "x": "subway",
            "y": 253
          },
          {
            "x": "bus",
            "y": 239
          },
          {
            "x": "car",
            "y": 174
          },
          {
            "x": "moto",
            "y": 195
          },
          {
            "x": "bicycle",
            "y": 284
          },
          {
            "x": "horse",
            "y": 113
          },
          {
            "x": "skateboard",
            "y": 188
          },
          {
            "x": "others",
            "y": 108
          }
        ]
      },
      {
        "id": "us",
        "color": "hsl(179, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 129
          },
          {
            "x": "helicopter",
            "y": 168
          },
          {
            "x": "boat",
            "y": 25
          },
          {
            "x": "train",
            "y": 19
          },
          {
            "x": "subway",
            "y": 141
          },
          {
            "x": "bus",
            "y": 212
          },
          {
            "x": "car",
            "y": 14
          },
          {
            "x": "moto",
            "y": 63
          },
          {
            "x": "bicycle",
            "y": 24
          },
          {
            "x": "horse",
            "y": 80
          },
          {
            "x": "skateboard",
            "y": 138
          },
          {
            "x": "others",
            "y": 34
          }
        ]
      },
      {
        "id": "germany",
        "color": "hsl(264, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 220
          },
          {
            "x": "helicopter",
            "y": 51
          },
          {
            "x": "boat",
            "y": 168
          },
          {
            "x": "train",
            "y": 292
          },
          {
            "x": "subway",
            "y": 23
          },
          {
            "x": "bus",
            "y": 77
          },
          {
            "x": "car",
            "y": 155
          },
          {
            "x": "moto",
            "y": 276
          },
          {
            "x": "bicycle",
            "y": 35
          },
          {
            "x": "horse",
            "y": 252
          },
          {
            "x": "skateboard",
            "y": 238
          },
          {
            "x": "others",
            "y": 35
          }
        ]
      },
      {
        "id": "norway",
        "color": "hsl(125, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 221
          },
          {
            "x": "helicopter",
            "y": 280
          },
          {
            "x": "boat",
            "y": 172
          },
          {
            "x": "train",
            "y": 22
          },
          {
            "x": "subway",
            "y": 48
          },
          {
            "x": "bus",
            "y": 30
          },
          {
            "x": "car",
            "y": 48
          },
          {
            "x": "moto",
            "y": 131
          },
          {
            "x": "bicycle",
            "y": 15
          },
          {
            "x": "horse",
            "y": 288
          },
          {
            "x": "skateboard",
            "y": 162
          },
          {
            "x": "others",
            "y": 24
          }
        ]
      }
    ]);

  const [chartData, setChartData] = useState<any[]>(
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
            "x": 13,
            "y": 30
          },
          {
            "x": 35,
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

    console.log("changing chart value");
    // please uncomment this to make changeable when you update on ui
    // setChartData(
    //   [

    //     {
    //       "id": "ZeroYield",
    //       "color": "hsl(52, 70%, 50%)",
    //       "data": [
    //         {
    //           "x": 0,
    //           "y": 2
    //         },
    //         {
    //           "x": 13,
    //           "y": 15
    //         },
    //         {
    //           "x": 35,
    //           "y": 60
    //         },
    //         {"x":40,  y: values.totalDeposit }
    //       ]
    //     },
    //     {
    //       "id": "Endkapital",
    //       "color": "hsl(120, 100%, 50%)",
    //       "data": [
    //         {
    //           "x": 0,
    //           "y": 7
    //         },
    //         {
    //           "x": 13,
    //           "y": 30
    //         },
    //         {
    //           "x": 35,
    //           "y": 80
    //         },
    //         { "x": values.time, y: values.newPrincipal }

    //       ]
    //     },

    //   ]
    // )


  };




  // this is the way to solution if the data's x-value is not static . this funciton will fill the missing x values------------------

  // const data = [
  //   {
  //     "id": "ZeroYield",
  //     "color": "hsl(52, 70%, 50%)",
  //     "data": [
  //       { "x": 2, "y": 2 },
  //       { "x": 15, "y": 15 },
  //       { "x": 30, "y": 80 }
  //     ]
  //   },
  //   {
  //     "id": "Endkapital",
  //     "color": "hsl(120, 100%, 50%)",
  //     "data": [
  //       { "x": 0, "y": 7 },
  //       { "x": 15, "y": 30 },
  //       { "x": 25, "y": 80 }
  //     ]
  //   }
  // ];

  //   const allXValues = Array.from(
  //     new Set(data.flatMap(dataset => dataset.data.map(point => point.x)))
  //   ).sort((a, b) => a - b);

  //   // Preprocess data without introducing extra data points in each object
  //   const preprocessedData = data.map(dataset => {
  //     const existingXValues = new Set(dataset.data.map(point => point.x));
  //     const filledData = allXValues.map(x => {
  //       return existingXValues.has(x) ? { x, y: dataset?.data?.find(point => point.x === x).y } : { x, y: 0 };
  //     });

  //     return { ...dataset, data: filledData };
  //   });

  //   console.log(preprocessedData);

  // console.log("test 2",  preprocessedData);



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
          <CompoundInterestChart chartData={chartData} chartData2={chartData2} />
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
