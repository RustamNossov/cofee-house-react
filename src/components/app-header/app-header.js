import HeaderMenu from '../app-header-menu/app-header-menu'

//import './app-header.css';

// import Burger from '../../images/menu.svg';
import BeansLogo from '../../images/beans-logo.png'

import './app-header.css';

function Header(props) {
    

    let element, clazz = "header-main-page";
    switch (props.page) {
        case 'mainPage':
            element =[
                <h1>Everything You Love About Coffee</h1>,
                <img src={BeansLogo} alt="Beans logo" />,
                <h2>We makes every day full of energy and taste</h2>,
                <h2>Want to try our beans?</h2>,
                <div className="link-button"><a href="index.html">More</a></div>,
            ];

            break;
        case 'ourCofee':
            element = [
                <h1>Our Coffee</h1>
            ]
            clazz += " header-about-our-cofee"
            break;
        case 'forYourPleasure':
            element = [
                <h1>For your pleasure</h1>
            ]
            clazz += " header-about-our-cofee"
        default: break;
    }
    
    


    return (
        <header className={clazz}>
            <HeaderMenu
                onChangePage = {(page) => props.onChangePage(page)}/>
            {/* <img id="mobile-cta" className="mobile-menu" src={Burger} alt="Open Navigation"/> */}
            <div className="header-container">
                {element}
                
            </div>

        </header>
    )
    



}

export default Header;

