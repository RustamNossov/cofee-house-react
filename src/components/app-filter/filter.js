import {Component} from 'react';

import './filter.css';

class Filter extends Component {
    constructor(props){
        super(props);
        this.state={
            term: '',
            filterTerm: '',
        }
    }

    onChangeSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term); 
    }

    

    onFilter = (e) => {

        const allBtns = document.querySelectorAll('.filter-button');
        
        const filterTerm = e.target.getAttribute('id');
        if (filterTerm !== this.state.filterTerm) {
            allBtns.forEach(btn => btn.classList.remove('btn-selected'));
            document.querySelector(`#${e.target.getAttribute('id')}`).classList.add('btn-selected');
            this.setState({filterTerm})
            this.props.onFilter(filterTerm);
        } else {
            allBtns.forEach(btn => btn.classList.remove('btn-selected'));
            this.setState({filterTerm: ''})
            this.props.onFilter('');
            
        }

       
        
    }

    render() {
        return (
                <section className="filter">
                    <div className="container">
                        <div className="left-side">
                            <label for="looking-for">Lookiing for</label>
                            <input 
                                type="text" 
                                id="looking-for" 
                                value={this.state.filter} 
                                placeholder="start typing here..."
                                onChange={this.onChangeSearch}/>
                        </div>
                        <div className="right-side">
                            <div>Our Filter</div>
                            <button className="filter-button" id="Brazil" onClick={this.onFilter}>Brazil</button>
                            <button className="filter-button" id="Kenya" onClick={this.onFilter}>Kenya</button>
                            <button className="filter-button" id="Columbia" onClick={this.onFilter}>Columbia</button>
                        </div>
                        
                    </div>
                </section>
        )
        
    }
}

export default Filter;