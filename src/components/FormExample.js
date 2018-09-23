import React, { Component } from 'react';

class FormExample extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="FormExample">
        <form>
          <input type="text" onChange = {this.props.onChange}/>
        </form>
      </div>

    )
  }
}

export default FormExample;
