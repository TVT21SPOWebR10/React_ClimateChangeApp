import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import axios from 'axios'

const V1 = () => {

    //määritetään tila taulun datalle
    const [tableData, setTableData] = useState(null)

    //haetaan data axios kutsulla tietokannasta
    const getData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_ADDRESS + "v1" );
            const response2 = await axios.get("http://localhost:3001/v2");


            //asetetaan tilaan taulun data ja määritetään datan sisältö
            setTableData({
                datasets: [
                    {
                        label: "Global Annual",
                        data: response.data.map(d => ({ time: new Date(d.Time_ga), value: d.anomaly_gm })),
                        borderColor: "black",
                        backgroundColor: "grey",

                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 0.9,

                    },
                    {
                        label: "Global Monthly",
                        data: response.data.map(d => ({ time: new Date(d.Time_gm), value: d.anomaly_gm })),
                        borderColor: "black",
                        backgroundColor: "grey",

                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,
                        borderWidth: 0.9,

                    },
                    
                    {
                        label: "Southern Hemisphere Monthly",
                        data: response.data.map(d => ({ time: new Date(d.Time_sm), value: d.anomaly_sm })),
                        borderColor: "red",
                        borderWidth: 1,
                        backgroundColor: "#FF6B6B",
                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,

                    },
                    {
                        label: "Southern Hemisphere Annual",
                        data: response.data.filter(d => ({ time: new Date(d.Time_sa), value: d.anomaly_sa })),
                        borderColor: "red",
                        borderWidth: 1,
                        backgroundColor: "#FF6B6B",
                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 0,

                    },
                    
                    {
                        label: "Northern Hemisphere Monthly",
                        data: response.data.map(d => ({ time: new Date(d.Time_nm), value: d.anomaly_sm })),
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
                        label: "Northern Hemisphere Annual",
                        data: response.data.filter(d => d.anomaly_na !== 0).map(d => ({ time: new Date(d.Time_na + "-01-01"), value: d.anomaly_na })),
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
                        label: "Optional Northern 2000-year temperature reconstruction",
                        data: response2.data.map(d => ({ time: new Date(d.Time + "-01-01"), value: d.T })),
                        borderColor: "yellow",
                        borderWidth: 1,
                        backgroundColor: "yellow",
                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "value",
                        },
                        pointRadius: 1,
                        hidden: true
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
        responsiveOptions: [
            ['screen and (min-width: 600px)', {
              maintainAspectRatio: false,
              maxWidth: 600
            }],
            ['screen and (max-width: 600px)', {
              maintainAspectRatio: true
            }]
          ],
        
        
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Temperature Anomalies from 1850",
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
        <div className='chart'>{tableData && <Line options={options} data={tableData} />}</div>
    )
}

export default V1 