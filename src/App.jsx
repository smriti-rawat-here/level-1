import React from 'react';
import '/src/index.scss';
import Navbar from './Components/Navbar.jsx';
import Header from './Components/Header';
import Backedby from '/Components/Backedby.jsx';
import Bg_pattern from './Components/Bg_pattern';
import Product_suite from './Components/Product_suite';
import Cta from '.Components/Cta';
import Section2_growth_and_stats from './Components/Section2_growth_and_stats';
import Blog_section from './Components/Blog_section';
import Join_dicord from './Components/Join_dicord';
import LYNC from './Components/LYNC';
import Compny_group from './Components/Compny_group';
import Section1 from './Components/Section1';
import Section4 from './Components/Section4.jsx';
import Reviews from './Components/Reviews.jsx';
import Believers from './Components/Believers.jsx';
import Grid1 from './Components/Grid1.jsx';
import Grid2 from './Components/Grid2.jsx';
import Background1 from './Components/Background1.jsx';
import Background2 from './Components/Background2.jsx';
import Background3 from './Components/Background3.jsx';
import Group3 from './Components/Group3.jsx';
const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <div className="appheader">
    <Header/>

    <div className="container">
    <Backedby/>
    <Bg_pattern/>
    <Product_suite/>
    <Cta/>
    <Section2_growth_and_stats/>
    <Blog_section/>
    <Join_dicord/>
    <LYNC/>
    <Compny_group/>
    <Section1/>
    <Section4/>
    <Reviews/>
    <Believers/>
    </div>
    </div>
  </div>
  )
}

export default App