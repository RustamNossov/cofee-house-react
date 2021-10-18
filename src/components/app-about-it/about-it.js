import BeansLogoBlack from '../../images/beans-logo-black.svg';
import Beans from '../../images/goods/71qBQnpQFYL.png';

function AboutIt(props) {
    let {imageName, imageAlt, description, price, country} = props;
    imageName = Beans
    imageAlt = 'sdfsdf'
    country = "Brasil"
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae officia dolorum ullam? Illo voluptatem consequuntur minima quos blanditiis dolor autem ratione harum perferendis! Labore, deleniti similique. Maxime commodi eius autem!'
    price = 15.99
    return(
        <section className="about-it">
            <div className="container">
            <img src={imageName} alt={imageAlt} /> 
                <div className="right-side-block">
                    <h2>About it</h2>
                    <img src={BeansLogoBlack} alt="" />
                    <div><span>Country:</span>{country}</div>
                    <p><span>Description:</span>{description}</p>
                    <div>Price:<span>{price}$</span></div>
                </div>
                <div className="line"></div> 
                
            </div>
        </section>
    )
}

export default AboutIt;