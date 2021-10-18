import {Component} from 'react';

import Header from '../app-header/app-header';
import AboutUs from '../app-about-us/app-about-us';
import OurBest from '../app-our-best/app-our-best';
import HeaderMenu from '../app-header-menu/app-header-menu';
import BeansLogoBlack from '../../images/beans-logo-black.svg';
import AboutOur from '../app-about-our/app-about-our';
import Filter from '../app-filter/filter';
import GoodsSection from '../app-goods-section/goods-section';
import AboutIt from '../app-about-it/about-it';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 'mainPage',//'forYourPleasure' //'ourCofee'//'mainPage' 'forYourPleasure'
          searchValue: '',
          filterTerm: ''
        }
      }

  
  onChangePage = (page) => {
    this.setState(({page})) 
    this.onSearch('')
    this.onFilter('')
  }

  onSearch = (searchValue) => {
    this.setState(({searchValue})) 
  }

  onFilter = (filterTerm) => {
    console.log(filterTerm)
    this.setState(({filterTerm})) 
  }


  render() {

    const page = this.state.page;
    let element;
    switch(page) {
      case 'mainPage':
        element = [<AboutUs/>, <OurBest/>];
        break;
      case 'ourCofee': 
        element = [<AboutOur page={page}/>, 
                    <Filter 
                        onSearch={(value)=>this.onSearch(value)}
                        onFilter={(value)=>this.onFilter(value)}/>, 
                    <GoodsSection 
                        searchValue={this.state.searchValue}
                        filterTerm={this.state.filterTerm}/>];
        break;
      case 'forYourPleasure': 
        element = [
                    <AboutOur page={page}/>, 
                    <GoodsSection
                        searchValue={this.state.searchValue}
                        filterTerm={this.state.filterTerm}/>];
        break;
      default: break;
}
    return (
      <div className="App">
          <Header
            page={page}
            onChangePage = {(page) => this.onChangePage(page)}/>
          {/* <AboutOur/> */}
          {element}
         
         
          <HeaderMenu
            page={page}
            onChangePage = {(page) => this.onChangePage(page)}
            isBottom/>
            <div>
              <img className="bottom-pct" src={BeansLogoBlack} alt="Beans Logo Black" />
            </div>
          
      </div>
    );
  }
  
}

export default App;
