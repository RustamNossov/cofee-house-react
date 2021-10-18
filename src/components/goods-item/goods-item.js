import './goods-item.css';

function GoodsItem(props) {
const {imageName, imageAlt, description, price, country} = props;

// -----------exporting pictures from folder--------------//
const importAll = (r) => {
        let images = {};
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
const images = importAll(require.context('../../images/goods', false, /\.png/));
//-----------------------------------------------------------//

    let element, 
        clazz = 'goods-item-best'; 

    if (country) {
         element = <div className="country">{country}</div>;
         clazz += ' goods';
    }
    return (
        <div className={clazz}>
            <div className="wrapper">
                <img src={images[imageName].default} alt={imageAlt} />   

                <div className="description">{description}</div>
                {element}
                <div className="price">{price}$</div>
            </div>
        </div>
    )
}

export default GoodsItem;