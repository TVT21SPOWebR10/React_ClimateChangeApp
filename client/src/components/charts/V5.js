import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const V5 = () => {

    //samat määrittelyt jokaisessa visualisoinnissa. Tilan määrittely ja datan haku axios kutsulla.
    const [tableData, setTableData] = useState(null)

    const getData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_ADDRESS + "/v5");


            setTableData({
                datasets: [
                    {
                        label: "Depth (m)",
                        data: response.data.map(d => ({ xAxis: d.meanAge, value: d.depth })),
                        borderColor: "black",
                        backgroundColor: "black",

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 1.5,

                    },

                    {
                        label: "Age of the ice (yr BP)",
                        data: response.data.map(d => ({ xAxis: d.meanAge, value: d.iceAge })),
                        borderColor: "red",
                        backgroundColor: "red",

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 1.5,

                    },

                    {
                        label: "CO2 Concentration (ppmv)",
                        data: response.data.map(d => ({ xAxis: d.meanAge, value: d.co2 })),
                        borderColor: "blue",
                        backgroundColor: "blue",

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 1.5,

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
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Vostok Ice Core CO2 measurements, 417160 - 2342 years",
            },
        },
        scales: {
            x: {
                type: "linear",

            },
            yAxis: {
                type: "logarithmic",

            },
        },
    };

    return (
        <div className='chart'>{tableData && <Line options={options} data={tableData} />}

        </div>

    )
}

export default V5