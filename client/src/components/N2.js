import React from 'react'
import Navbar from './NavBar'
import V8 from './charts/V8'

export default function N2() {

  //näyttää graafit ja tiedot

  return (
    <>
    <Navbar />
    <V8 /> <br/>
    <div className="chartInfo">
      <p>Data source for V8: <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D</a></p>
      <p>Description for V8: <a href="https://essd.copernicus.org/articles/14/1917/2022/">https://essd.copernicus.org/articles/14/1917/2022/</a></p>
      <p>Fossil CO2 emissions significantly decreased in 23 countries during the decade 2010–2019. Altogether, these 23 countries contribute to about 2.5 GtC yr−1 fossil fuel CO2 emissions over the last decade, only about one-quarter of world CO2 fossil emissions.</p>
    </div>
    </>
  )
}
