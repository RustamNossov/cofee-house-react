import {Component} from 'react';

import GoodsItem from '../goods-item/goods-item';

import './app-our-best.css';

class OurBest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    imageName: "best-item-2.png", 
                    imageAlt: "Best item 1", 
                    description: "Solimo Coffee Beans 2 kg", 
                    price: 10.73
                },
                {
                    imageName: "best-item-1.png", 
                    imageAlt: "Best item 2", 
                    description: "Presto Coffee Beans 1 kg", 
                    price: 15.99
                },
                {
                    imageName: "best-item-3.png", 
                    imageAlt: "Best item 3", 
                    description: "AROMISTICO Coffee 1 kg", 
                    price: 6.99
                }

            ]

        }
    }

    


    render() {

            const elements = this.state.data.map((item, i) => {
                return (
                    <GoodsItem
                        key={i}
                        {...item}
                        />

                )
                
            })
            return(
                <section className="our-best">
                    <div className="container">
                        <h2>Our best</h2>
                        <div className="best-items">
                            {elements}
                        </div>
                    </div>
                </section>
                
            )

    } 
}

export default OurBest;