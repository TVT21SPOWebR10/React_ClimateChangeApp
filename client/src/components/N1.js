import React from 'react'
import Navbar from './NavBar'
import V1 from './charts/V1';
import V7 from './charts/V7';
import V5 from './charts/V5';
import V6 from './charts/V6';
import V3 from './charts/V3';

  export default function N1() {

    //näyttää graafit lämpötilan ja c02 pitoisuuksista ja niille data source linkit.

    return (
        <>
        <Navbar /> 
        <V1 /> <br/>
        <div className="chartInfo">
          <p>Data source for V1: <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html">https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html</a></p>
          <p>Full study for V2: <a href="https://www.nature.com/articles/nature03265">https://www.nature.com/articles/nature03265</a></p>
          <p>Northern Hemisphere temperature reconstruction for the past 2,000 years by combining low-resolution proxies with tree-ring data, using a wavelet transform technique to achieve timescale-dependent processing of the data.</p>
        </div>
        <V3 /> <br/>
        <div className="chartInfo">
          <p>Data source for V3: <a href="https://gml.noaa.gov/ccgg/trends/">https://gml.noaa.gov/ccgg/trends/</a></p>
          <p>Data measurement for V3: <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">https://gml.noaa.gov/ccgg/about/co2_measurements.html</a></p>
          <p>Most people assume that we measure the “concentration” of CO2 in air, and in communicating with the general public we frequently use that word because it is familiar. The quantity we actually determine is accurately described by the chemical term “mole fraction”, defined as the number of carbon dioxide molecules in a given number of molecules of air, after removal of water vapor. For example, 413 parts per million of CO2 (abbreviated as ppm) means that in every million molecules of (dry) air there are on average 413 CO2 molecules. The table below gives approximate values of gases in the atmosphere for 413 ppm of CO2 in dry air (this is roughly the average amount of CO2 in the atmosphere in the middle of the year 2020). All species have been expressed as ppm, turning 78.09% nitrogen into 780,900 ppm. The rightmost column shows the composition of the same air after enough water vapor has been added to make the mole fraction of water vapor in wet air 3%:</p>
          <p>Descriptions for V4: <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html</a></p>
          <p>Data source for V4: <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">https://gml.noaa.gov/ccgg/trends/</a></p>
        </div>
        <V5 /> <br/>
        <div className="chartInfo">
        <p>Data source for V5: <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2</a></p>
        <p>Descriptions V5: <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html</a></p>
        <p>In January 1998, the collaborative ice-drilling project between Russia, the United States, and France at the Russian Vostok station in East Antarctica yielded the deepest ice core ever recovered, reaching a depth of 3,623 m (Petit et al. 1997, 1999). Ice cores are unique with their entrapped air inclusions enabling direct records of past changes in atmospheric trace-gas composition. Preliminary data indicate the Vostok ice-core record extends through four climate cycles, with ice slightly older than 400 kyr (Petit et al. 1997, 1999).</p>
        </div>
        <V6 /> <br/>
        <div className="chartInfo">
        <p>Data source for V6: <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt</a></p>
        <p>Descriptions V6: <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975">https://www.ncei.noaa.gov/access/paleo-search/study/17975</a></p>
        <p>The European Project for Ice Coring in Antarctica Dome ice core from Dome C (EDC) has allowed for the reconstruction of atmospheric CO2 concentrations for the last 800,000 years. Here we revisit the oldest part of the EDC CO2 record using different air extraction methods and sections of the core.</p>
        </div>
        <V7 /> <br/>
        <div className="chartInfo">
        <p>Data source for V7: <a href="http://carolynsnyder.com/publications.php">http://carolynsnyder.com/publications.php</a></p>
        <p>Descriptions V7: <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf</a></p>
        <p>This study evaluates paleoclimate sensitivity over the past 800,000 years from proxy-based reconstructions of changes in global temperature, ice sheets and sea level, vegetation, dust, and greenhouse gases. This analysis uses statistical methods that are not biased by the variable (heteroscedastic) uncertainty in the reconstructions, and applies a Monte Carlo-style probabilistic framework to quantify several sources of measurement and structural uncertainty. Not addressing the heteroscedastic uncertainty would result in regression results that underestimate paleoclimate sensitivity by over 30%, and not using a probabilistic framework could underestimate the credible interval by fivefold.</p>
        </div>
        </>
        
    );
  }