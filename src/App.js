import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
             {id:1 , value: 4},
             {id:2 , value: 0},
             {id:3 , value: 0},
             {id:4 , value: 0}
        ]
      } 

      handleReset=()=>{
          const counters = this.state.counters.map(e=>{
              e.value=0;
              return e;
          });
          this.setState({counters});
      }

      handleIncrease=(arg) => {
         const counters = [...this.state.counters];
         const index = counters.indexOf(arg);
         counters[index] = { ...arg };
         counters[index].value++;
         this.setState({counters});
      }

      handleDelete=(arg) => {
          const counters = this.state.counters.filter(c => c.id !== arg);
         this.setState({counters:counters})
      }

    render() { 
        return (
            <div>
                <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
                <main className='container'>
                    <Counters
                    counters={this.state.counters}
                    onReset = {this.handleReset}
                    onIncrement={this.handleIncrease}
                    onDelete = {this.handleDelete} />
                </main>
            </div>

        );
    }
}
 
export default App;