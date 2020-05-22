import React from 'react';

import './style/app.scss';
import Nav from './components/nav'
import Header from './components/header'
import Culture from './components/culture'
import Progress from './components/progress'
import InfoItem from './components/fragments/infoItem'
import Footer from './components/footer'

const App = (props) => {

  return (
    <main className='appBody'>
      <Nav/>
      <Header/>
      <Culture/>
      <Progress/>
      <div className='infoItemBody'>
        <div className='officeBox'>
          <h1 className='textTitle'>Our Offices</h1>
          <div className='officeSpacer'>
            <InfoItem type='office' location='Singapore' address='155B Telok Ayer Street Singapore, 068611'/>
            <InfoItem type='office' location='Our Investors' address='1701 Rhode Island Ave NWWashington, DC 20036'/>
          </div>
        </div>
        <div className='investorBox'>
          <h1 className='textTitle'>Our Investors</h1>
          <div className='investorSpacer'>
            <InfoItem type='investor' investorName='combinatorLogo'/>
            <InfoItem type='investor' investorName='monksHillLogo'/>
            <InfoItem type='investor' investorName='striveLogo'/>
            <InfoItem type='investor' investorName='wavemakerLogo'/>
          </div>
        </div>
      </div>
      <section className='futureBody'>
        <div className='futureBox'>
          <h1>See the future</h1>
          <div className='futureButtonSpacer'>
            <button className='buttonBlue invertBlue'>Get a Demo</button>
            <button className='buttonOutline invertOutline'>Read use cases</button>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
