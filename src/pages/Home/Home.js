import React, { Component } from "react";
import { Row, Col, Input, Button } from "antd";
import axios from "axios";

import settings from "../../config";
export class Home extends Component {
  state = {
    searchTerm: ""
  };

  handleSearchChange = event => {
    const { value } = event.target;
    this.setState({
      searchTerm: value
    });
  };

  handleSearchClick = () => {
    console.log(this.state.searchTerm);

    const url = `
    https://api.themoviedb.org/3/search/movie?api_key=${settings.APIKEY}&query=${this.state.searchTerm}`;

    axios.get(url).then(res => {
      console.log(res.data);
    });
  };
  render = () => {
    return (
      <Row>
        <Col span={8} offset={6}>
          <Input
            placeholder="Search for a movie"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
        </Col>
        <Col span={2}>
          <Button type="primary" icon="search" onClick={this.handleSearchClick}>
            Search
          </Button>
        </Col>
      </Row>
    );
  };
}