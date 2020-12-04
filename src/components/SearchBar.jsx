import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getSearchTerm(this.state.term);

    // TODO: Add callback to pass input to parent component.
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              name="term"
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
