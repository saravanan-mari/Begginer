import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        return (
            <div>
                <button className="btn btn-danger btn-sm m-2"
                 onClick={this.props.onReset}>RESET
                 </button>
                {this.props.counters.map(counter =>(
                     <Counter key={counter.id} 
                     counter={counter} 
                     onDelete={this.props.onDelete}
                     onIncrease={this.props.onIncrement} >
                     </Counter>))}
            </div>
        );
    }
}
 
export default Counters;