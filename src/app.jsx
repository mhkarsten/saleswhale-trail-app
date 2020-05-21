import React from 'react';

import './style/app.scss';
import Header from './components/header'
import Culture from './components/culture'
import Progress from './components/progress'
import InfoItem from './components/fragments/infoItem'
import Footer from './components/footer'

const App = (props) => {

  return (
    <main className='appBody'>
      <Header/>
      <Culture/>
      <Progress/>
      <div>
        <div>
          <h1>Our Offices</h1>
          <div>
            <InfoItem type='office' location='Singapore' address='155B Telok Ayer Street Singapore, 068611'/>
            <InfoItem type='office' location='Our Investors' address='1701 Rhode Island Ave NWWashington, DC 20036'/>
          </div>
        </div>
        <div>
          <h1>Our Investors</h1>
          <div>
            <InfoItem type='investor' investorName='combinatorLogo'/>
            <InfoItem type='investor' investorName='monksHillLogo'/>
            <InfoItem type='investor' investorName='striveLogo'/>
            <InfoItem type='investor' investorName='wavemakerLogo'/>
          </div>
        </div>
      </div>
      <section>
        <div>
          <h1>See the future</h1>
          <div>
            <button>Get a Demo</button>
            <button>Read use cases</button>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
