import React, { Component } from 'react';
import 'App.css';
import list from 'data/testarray.json'

import ListExample from 'components/ListExample';
import FormExample from 'components/FormExample';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list,
      searchTerm: "",
      error: null,
      starships: null,
    };
  }
  // function to remove elements from the list so that it won't be displayed
  // by the ListExample component
  onDismiss = (id) => {
    const updatedList = this.state.list.filter( item => item.id !== id);
    this.setState({list: updatedList});
  }
  // the event object has the input field in it
  // it is called the synthetic React event?
  onChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  // example of API call to get JSON data
  componentDidMount(){
    fetch('https://swapi.co/api/starships/')
      .then( data => data.json())
      .then(
        (result) => this.setState({ starships: result }),
        (error) => this.setState({ error })
      )
  }
  render() {
    // es6 destructuring, equivalent to searchTerm = this.state.searchTerm and
    // list = this.state.list
    const {searchTerm, list} = this.state;
    return (
      <div>
        <FormExample onChange = {this.onChange}></FormExample>
        {/* passing an array and function to child component */}
        <ListExample
          onDismiss = {this.onDismiss}
          value = {searchTerm}
          list = {list.filter(isSearched(searchTerm))} >
        </ListExample>
      </div>
    );
  }
}
export default App;

// this function returns a function that can be used to filter an array
function isSearched(searchTerm){
  return function (item) {
    return item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.last_name.toLowerCase().includes(searchTerm.toLowerCase());
  }
}
