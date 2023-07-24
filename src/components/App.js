import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
      constructor(props) {
      super(props);
      this.state = {
        showModal: false,
      };
    }
  
    handleButtonClick = () => {
      this.setState({ showModal: true });
    };
  
    render() {
      return (
        <div>
          <h1>Parent Component</h1>
          <Child showModal={this.state.showModal} onButtonClick={this.handleButtonClick} />
          {this.state.showModal && (
            <div className="modal">
              <div className="modal-content">
                <h3>Model Content</h3>
                <p>This is a modal content.</p>
                <button onClick={() => this.setState({ showModal: false })}>Close Modal</button>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
 
  

export default App
