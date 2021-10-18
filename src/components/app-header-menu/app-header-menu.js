import {Component} from 'react';

import Logo from'../../images/Logo-white.svg' ;
import LogoBlack from '../../images/logo-black.svg';
// import Cross from '../../images/exit.svg';

import './app-header-menu.css';

class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: ['Our coffee', 'For your pleasure']
        }
    }
    

    changePage = (e) => {        
            switch(e.target.getAttribute('name')) {
                case 'Main page': 
                    this.props.onChangePage('mainPage')
                    break;

                case 'Our coffee':
                    this.props.onChangePage('ourCofee')
                    break;
                case 'For your pleasure':
                    this.props.onChangePage('forYourPleasure')
                    break;    
                default: break;

            }
        
    }



    render() {
        const element = this.state.menuItems.map((item, i) => {
            return (
                
                    <li key={i} >
                        <a href="#" name={item}> 
                            {item}
                        </a>
                    </li>
                
            )
        })

        const {isBottom, onChangePage} = this.props;
        const clazz = isBottom ? 'header-menu header-menu-bottom' : 'header-menu';

        

        return (
            

            <div className={clazz}>
                <div className="container">
                    <div className="logo" >
                        <a href="#" > 
                            <img src={isBottom ? LogoBlack : Logo} alt="" onClick={this.changePage} name="Main page"/>
                        </a>
                    </div>
                    <nav className="navbar">
                    {/* <img id="mobile-exit" className="mobile-menu-exit" src={Cross} alt="Close Navigation"/> */}
                        <ul onClick={this.changePage}>
                            {element}
                        </ul>
                    </nav>
                </div>
                
            </div>
            
        )
    }
        
    
}

export default HeaderMenu;