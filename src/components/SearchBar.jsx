import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  updateTerm = (e) => {
    this.setState({ term: e.target.value });
  }

  onEnterPress = (e) => {
    if (e.key === 'Enter' && e.target.value.length >=1) {
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <div className="search-bar ui segment">
          <TextField
            id="outlined-search"
            label="Video Search"
            type="search"
            margin="normal"
            variant="outlined"
            className="video-search"
            fullWidth
            value = {this.state.term}
            onChange= {this.updateTerm}
            onKeyPress = {this.onEnterPress}
          />
      </div>
    );
  }
}

export default SearchBar;
