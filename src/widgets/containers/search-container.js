import React, {Component} from 'react';
import Search from '../components/Search';

class SearchContainer extends Component{
  state = {value:'Luis fonsi'}
  onSubmit = (e)=>{
    e.preventDefault();
    console.log(this.input.value);
  }

  setInputRef = (element)=>{
      this.input = element;
  }

  handleInputChange = event=>{
    this.setState({
        value:event.target.value.replace(/\s/,'-')
    })
  }

  render()
  {
    return(
      <Search
        handleSubmit={this.onSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}/>
    )
  }
}

export default SearchContainer;
