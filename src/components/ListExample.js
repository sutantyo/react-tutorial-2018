import React, { Component } from 'react';
import 'App.css';

class ListExample extends Component {
  constructor(props){
    super(props);
    //this.onDismiss = this.onDismiss.bind(this);
  }

  render() {
    return (
      <div className="Example1">
        <ul>
        {this.props.list.map(item =>
          <div key={item.id}>
          <li>
            {item.first_name} {item.last_name}
            <ul>
              <li>{item.email}</li>
              <li>{item.gender}</li>
              <li>{item.ip_address}</li>
            </ul>
          </li>
          <button type='button' onClick={ () =>
              this.props.onDismiss(item.id)
          }>
              Dismiss
          </button>
        </div>
        )}
        </ul>
      </div>
    );
  }
}
export default ListExample;
