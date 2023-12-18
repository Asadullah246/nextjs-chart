
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
            />


 // chartData2: {
    //     id: any;
    //     color: any;
    //     data: { x: any; y: any }[];
    // }[];
