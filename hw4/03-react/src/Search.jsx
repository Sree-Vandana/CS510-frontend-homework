import React, { Component } from "react";
import Result from "./Result";
import NoResult from "./NoResult";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namesList: [],
      imgUrlList: [],
      value: "",
      showResult: false,
      showNoResult: false,
      valueIndex: -1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const completeState = { ...this.state };
    completeState.value = event.target.value;
    // console.log(completeState);
    this.setState(completeState);
  }

  handleSubmit(event) {
    // console.log(this.state.value);
    const completeState = { ...this.state };
    completeState.valueIndex = completeState.namesList.indexOf(
      completeState.value
    );
    if (completeState.valueIndex < 0) {
      completeState.showResult = false;
      completeState.showNoResult = true;
    } else {
      completeState.showResult = true;
      completeState.showNoResult = false;
    }

    this.setState(completeState);
    event.preventDefault(); // return false;
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => {
        let arr1 = [];
        let arr2 = [];
        data.forEach((element) => {
          arr1.push(element.fullName);
          arr2.push(element.imageUrl);
        });
        // console.log(arr1, arr2);
        this.setState({ namesList: arr1, imgUrlList: arr2 });
      });
  }

  render() {
    return (
      <div>
        <h4>Game of Thrones Charecter Info</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Charecter Full Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.showResult ? (
          <Result
            name={this.state.namesList[this.state.valueIndex]}
            img={this.state.imgUrlList[this.state.valueIndex]}
          />
        ) : this.state.showNoResult ? (
          <NoResult />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Search;
