import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const V3 = () => {

    const [tableData, setTableData] = useState(null)

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/v3");
            const response2 = await axios.get("http://localhost:3001/v4");
            const response3 = await axios.get("http://localhost:3001/v10");


            setTableData({
                datasets: [
                    {
                        label: "Annual Mean Data",
                        data: response.data.filter(d => d.mean != 0).map(d => ({ time: new Date(d.year_annual + "-01-01"), value: d.mean })),
                        borderColor: "black",
                        backgroundColor: "grey",
                        borderWidth: 2,
                        

                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,

                    },
                    {
                        label: "Monthly mean Data",
                        data: response.data.map(d => ({ time: new Date(d.year + "-" + d.month), value: d.average })),
                        borderColor: "#000AFF",
                        borderWidth: 1,
                        backgroundColor: "#6A70FF",
                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                    },
                    {
                        label: "Optional DSS",
                        data: response2.data.filter(d => d.DSS_Year_AD != 0).map(d => ({ time: new Date(d.DSS_date + "-01-01"), value: d.DSS_mixingratio })),
                        borderColor: "green",
                        backgroundColor: "grey",
                        borderWidth: 2,


                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        hidden: true

                    },
                        
                    
                   {
                        label: "Optional DE",
                        data: response2.data.filter(d => d.De08_date != 0).map(d => ({ time: new Date(d.De08_date + "-01-01"), value: d.De08_Mixingratio })),
                        borderColor: "purple",
                        backgroundColor: "grey",
                        borderWidth: 2,

                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        hidden: true

                    },
                    {
                        label: "Optional DE08",
                        data: response2.data.filter(d => d.De08_2_date != 0).map(d => ({ time: new Date(d.De08_2_date + "-01-01"), value: d.De08_2_mixingratio })),
                        borderColor: "red",
                        backgroundColor: "grey",
                        borderWidth: 2,

                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        hidden: true

                    },
                    {
                        label: "events",
                        data: response3.data.filter(d => d.year ).map(d => ({ time: new Date(d.year + "-01-01"), value: 400 , event: d.event2 })),
                        borderColor: "orange",
                        backgroundColor: "orange",
                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        borderWidth: 2,
                        pointRadius: 5,
                        showLine: false,
                        hidden: true

                    },
                ],
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


     const options = {
        responsive: true,
        interaction: {
            
            intersect: false,
          },
          stacked: false,
        plugins: {
            tooltip: {
                boxWidth: 10,
                width: 100,
                callbacks: {
                    label: function (item) {
                        if (item.datasetIndex == 5) {
                            var substr1 = item.dataset.data[item.dataIndex].event.substr(0, 100)
                            var substr2 = item.dataset.data[item.dataIndex].event.substr(100 + 1)
                            if (item.dataset.data[item.dataIndex].event.charAt(99 != " ")) {
                                substr1 += "-"
                            }
                            return [substr1, substr2]
                        } else {
                            return item.dataset.label + " :" + item.formattedValue + " CO2"
                        }
                    }
                },
            },
             legend: {
                position: "top",
            },
            title: {
                display: true,
                text: " CO2 Mauna Loa ",
            },
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "month",
                },
            },
            yAxis: {
                type: "linear",
            },
        },
    };

    return (
        <div className='chartv3'>{tableData && <Line options={options} data={tableData} />}
        </div>
    )
}

export default V3