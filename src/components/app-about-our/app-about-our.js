import BeansLogoBlack from '../../images/beans-logo-black.svg';
import Girl from '../../images/girl.png';
import Cup from '../../images/cup-of-coffee.png';

import './app-about-our.css';

function AboutOur(props) {

    const content = [
        {
            title: 'About our beans', 
            content1: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`,
            content2: `Afraid at highly months do things on at. Situation recommend objection do intention
            so questions.`,
            content3: `As greatly removed calling pleased improve an. Last ask him cold feel`,
            content4: `met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
            image: Girl
        },

        {
            title: 'About our goods', 
            content1: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`,
            content2: `Afraid at highly months do things on at. Situation recommend objection do intention
            so questions.`,
            content3: `As greatly removed calling pleased improve an. Last ask him cold feel`,
            content4: `met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
            image: Cup
        }
    ]

    let contentId;

    switch (props.page) {
        case 'ourCofee': 
            contentId = 0;
            break;
        case 'forYourPleasure': 
            contentId = 1;
            break;
        default:
            contentId = 0;
            break;
    }

    return (
        <section className="about-our">
            <div className="container">
                <img src={content[contentId].image} alt="" />
                <div className="right-side-block">
                    <h2>{content[contentId].title}</h2>
                    <img src={BeansLogoBlack} alt="" />
                    <p>{content[contentId].content1}</p>
                    <div>{content[contentId].content2}</div>
                    <div>{content[contentId].content3}</div>
                    <div>{content[contentId].content4}</div>
                </div>
                <div className="line"></div>
                

            </div>
        </section>
    )
}

export default AboutOur;