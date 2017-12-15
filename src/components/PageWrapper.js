import React from "react";
import "../static/style.css";

import ZurbComponent from "./ZurbComponent";
import FilterComponent from "./FilterComponent";
import SortComponent from "./SortComponent";

class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      cards: [
        {
          title: "Lorem ipsum dolor sit",
          description: "Lorem ipsum dolor sit",
          type: "success"
        },
        {
          title: "Lorem ipsum dolor sit",
          description: "Lorem ipsum dolor sit",
          type: "primary"
        },
        {
          title: "Lorem ipsum dolor sit",
          description: "Lorem ipsum dolor sit",
          type: "secondary"
        },
        {
          title: "Lorem ipsum dolor sit",
          description: "Lorem ipsum dolor sit",
          type: "info"
        },
        {
          title: "Lorem ipsum dolor sit",
          description: "Lorem ipsum dolor sit",
          type: "alert"
        },
        {
          title: "Lorem ipsum dolor sit",
          description: "Lorem ipsum dolor sit",
          type: "warning"
        }
      ]
    };

    this.state = this.initialState;

    this.filterFunc = this.filterFunc.bind(this);
    this.sortFunc = this.sortFunc.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  filterFunc(val) {
    this.props.actions.sampleAction(val);
  }

  sortFunc(val) {
    let cards = this.state.cards;

    if (val == "1") {
      cards = this.initialState;
    } else {
      // don't touch this stupid comparison. It just works! Ref: https://en.wikipedia.org/wiki/Copy_and_paste_programming
      cards.sort(function(a, b) {
        if (a.type < b.type) return val == "2" ? -1 : 1;
        if (a.type > b.type) return val == "2" ? 1 : -1;
        if (a.type < b.type) return val == "3" ? 1 : -1;
        if (a.type > b.type) return val == "3" ? -1 : 1;
        return 0;
      });
    }

    this.setState({ cards: cards });
  }

  deleteItem(index) {
    this.state.cards.splice(index, 1);

    this.setState({ cards: this.state.cards });
  }

  render() {
    const { cards } = this.props;

    return (
      <div>
        <FilterComponent cards={cards.allItems} filterFunc={this.filterFunc} />
        <SortComponent sortFunc={this.sortFunc} />
        {cards.items.map(({ title, description, type }, index) => {
          return (
            <ZurbComponent
              title={title}
              description={description}
              type={type}
              index={index}
              deleteItem={this.deleteItem}
            />
          );
        })}
      </div>
    );
  }
}

export default PageWrapper;
