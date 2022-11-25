import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const V7 = () => {

    const [tableData, setTableData] = useState(null)

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/v7");

            setTableData({
                datasets: [
                    {
                        label: "CO2 (ppm)",
                        data: response.data.map(d => ({ xAxis: d.time, value: d.co2})),
                        borderColor: "blue",
                        backgroundColor: "blue",
                        yAxisID: 'y',

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 1,

                    },

                    {
                        label: "Change in Global Average Surface Temperature",
                        data: response.data.map(d => ({ xAxis: d.time, value: d.temp_change })),
                        borderColor: "red",
                        backgroundColor: "red",
                        yAxisID: 'y1',

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 1,

                    },


                ],
            })

        } catch (error) {
            console.log("err")
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Evolution of global temperature over the past two million years",
            },
        },
        scales: {
            x: {
                type: "linear",
                display: "true",
                align: "center",
                title: {
                    display: "true",
                    text: "Kiloyears before present",
                }

            },
            y: {
                type: "linear",
                display: "true",
                position: "left",
                title: {
                    display: "true",
                    text: "CO2 / ppm",
                    color: "blue",
                }

            },
            y1: {
                type: "linear",
                display: "true",
                position: "right",
                title: {
                    display: "true",
                    text: "Temp change / thousand years",
                    color: "red",
                },
                grid: {
                    drawOnChartArea: false,
                }

            },
        },
    };

    return (
        <div className='max-w-[1000px]'>{tableData && <Line options={options} data={tableData} />}

        </div>

    )
}

export default V7