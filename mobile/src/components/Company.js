import React from "react";
import PropTypes from "prop-types";
import "./Company.css";

class Company extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    name: this.props.name,
  };

  setName1 = () => {
    this.setState({
      name: "Videotron",
    });
  };

  setName2 = () => {
    this.setState({
      name: "Rogers",
    });
  };

  render() {
    console.log("renderCompany");
    return (
      <div className="Company">
        <div className="SelectCompany">
          <input type="button" value="Videotron" onClick={this.setName1} />
          <input type="button" value="Rogers" onClick={this.setName2} />
          <p>Company Name: {this.state.name} </p>
        </div>
        <hr />
      </div>
    );
  }
}

export default Company;