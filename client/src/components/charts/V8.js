import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const V8 = () => {

    //samat määrittelyt jokaisessa visualisoinnissa. Tilan määrittely ja datan haku axios kutsulla.
    const [tableData, setTableData] = useState(null)

    var colors = []
    for (var i = 0; i < 300; i++) {
        colors.push("#" + Math.floor(Math.random() * 16777215).toString(16))
    }

    const getData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_ADDRESS + "/v8");


            const mappingLabels = Object.keys(response.data[0]);
            const mappingArray = []


            mappingLabels.map(c => {

                if (c != "year" && c != "description" && c != "data_link" && c != "desc_link") {
                    mappingArray.push(response.data.map(d => ({ xAxis: d.year, value: d[c], country: c })))

                }
            })

            setTableData({
                datasets: mappingArray.map(c => {

                    return {
                        label: c[0].country,
                        data: c.map(d => ({ xAxis: d.xAxis, value: d.value * 3.664 })),
                        borderColor: colors,
                        backgroundColor: colors,
                        yAxisID: 'y',

                        parsing: {
                            xAxisKey: "xAxis",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 1,
                        fill: true
                    }
                })
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
        maintainAspectRatio: true,

        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                }
            },
            title: {
                display: "true",
                text: "CO2 emissions by country",
            },
        },
        layout: {
            autoPadding: "true",
        },
        scales: {
            x: {
                type: "linear",
                display: "true",
                align: "center",
                min: 1959,
                title: {
                    display: "true",
                    text: "year",
                }

            },
            y: {
                type: "linear",
                display: "true",
                stacked: "true",
                position: "left",
                title: {
                    display: "true",
                    text: "Million tonnes of CO2",
                }

            },
        },
    };


    if (tableData) {
        return (

            <div className='chart'><Line options={options} data={tableData} /></div>

        )
    }


}

export default V8