import {Component} from 'react';

import './goods-section.css';

import GoodsItem from '../goods-item/goods-item';

class GoodsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {
                        imageName: "71qBQnpQFYL.png", 
                        imageAlt: "AROMISTICO Coffee 1 kg", 
                        country: "Brazil",
                        description: "AROMISTICO Coffee 1 kg", 
                        price: 10.73,
                        filtered: true
                    },
                    {
                        imageName: "71qBQnpQFYL.png", 
                        imageAlt: "AROMISTICO Coffee 1 kg", 
                        country: "Kenya",
                        description: "AROMISTICO Coffee 1 kg", 
                        price: 15.99,
                        filtered: true
                    },
                    {
                        imageName: "71qBQnpQFYL.png", 
                        imageAlt: "AROMISTICO Coffee 1 kg",
                        country: "Columbia", 
                        description: "AROMISTICO Coffee 1 kg", 
                        price: 6.99,
                        filtered: true
                    },
                    {
                        imageName: "71qBQnpQFYL.png", 
                        imageAlt: "AROMISTICO Coffee 1 kg", 
                        country: "Brazil",
                        description: "AROMISTICO Coffee 1 kg", 
                        price: 10.73,
                        filtered: true
                    },
                    {
                        imageName: "71qBQnpQFYL.png", 
                        imageAlt: "AROMISTICO Coffee 1 kg", 
                        country: "Kenya",
                        description: "Nesafe Coffee 1 kg", 
                        price: 15.99,
                        filtered: true
                    },
                    {
                        imageName: "71qBQnpQFYL.png", 
                        imageAlt: "AROMISTICO Coffee 1 kg",
                        country: "Columbia", 
                        description: "AROMISTICO Coffee 1 kg", 
                        price: 6.99,
                        filtered: true
                    }
            ]
        }
    }

    render() {
        const {filterTerm, searchValue} = this.props;
        console.log('sdf', filterTerm)
        let filteredData = this.state.data.filter(item => {
                return item.country.indexOf(filterTerm) > -1   
        })
        filteredData = filteredData.filter(item => {
                return item.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1   
        })



        const elements = filteredData.map((item, i) => {
            return (
                <GoodsItem
                    key={i}
                    {...item}
                    />

            )
            
        })
        return(
            <section className="goods-section">
                 <div className="container">
                    <div className="best-items">
                        {elements}
                    </div>
                </div>
            </section>
           
        )

    } 
}

export default GoodsSection;