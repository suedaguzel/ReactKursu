import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryID: 1, categoryName: "Vegatables" },
        { categoryID: 2, categoryName: "Fruties" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map (category =>
            <ListGroupItem key={category.categoryID}>{category.categoryName}</ListGroupItem>
          )}
          
        </ListGroup>
      </div>
    );
  }
}
