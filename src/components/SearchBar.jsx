import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.updateTerm = this.updateTerm.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
  }

  onEnterPress(e) {
    const { onFormSubmit } = this.props;
    const { term } = this.state;
    if (e.key === 'Enter' && e.target.value.length >= 1) {
      onFormSubmit(term);
      this.setState({ term: '' });
    }
  }

  updateTerm(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    const { term } = this.state;

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
          value={term}
          onChange={this.updateTerm}
          onKeyPress={this.onEnterPress}
        />
      </div>
    );
  }
}

export default SearchBar;
