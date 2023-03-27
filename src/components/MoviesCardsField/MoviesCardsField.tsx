import React, { Component } from 'react';
import { ICardState } from '../../interfaces';
import MoviesCard from '../MoviesCard/MoviesCard';

class MoviesCardsField extends Component<
  { cardState: Readonly<ICardState> },
  { cardArr: ICardState[] }
> {
  constructor(props: { cardState: Readonly<ICardState> }) {
    super(props);
    this.state = {
      cardArr: [],
    };
  }

  componentDidUpdate(prevProps: { cardState: Readonly<ICardState> }) {
    if (this.props.cardState !== prevProps.cardState) {
      if (Object.values(this.props.cardState.errors).every((item) => item === '')) {
        this.setState({ cardArr: [...this.state.cardArr, this.props.cardState] });
        alert('the form was successfully submitted');
      }
    }
  }

  render() {
    return (
      <div className="movies-cards">
        {this.state.cardArr.map((item) => (
          <MoviesCard key={`${item.title}${Math.random()}`} cardState={item}></MoviesCard>
        ))}
      </div>
    );
  }
}

export default MoviesCardsField;
