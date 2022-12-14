import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const V6 = () => {

    //samat määrittelyt jokaisessa visualisoinnissa. Tilan määrittely ja datan haku axios kutsulla.
    const [tableData, setTableData] = useState(null)

    const getData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_ADDRESS + "/v6");

            setTableData({
                datasets: [
                    {
                        label: "CO2 Concentration Data",
                        data: response.data.map(d => ({ xAxis: d.age, value: d.co2 })),
                        borderColor: "#2CCCE4",
                        backgroundColor: "#A4DD00",
                        borderWidth: 2,

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,

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
                text: "Ice core 800k year composite study CO2 measurements",
            },
        },
        scales: {
            x: {
                type: "linear",
                min: 1949,
                max: 806000
            },
            yAxis: {
                type: "logarithmic",
            },
        },
    };

    return (
        <div className='chart'>
            {tableData && <Line options={options} data={tableData} />}
        </div>
    )
}

export default V6