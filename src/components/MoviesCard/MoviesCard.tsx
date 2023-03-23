import React, { Component } from 'react';
import { ICardState } from '../../interfaces';

class MoviesCard extends Component<{ cardState: ICardState }> {
  constructor(props: { cardState: ICardState }) {
    super(props);
  }

  render() {
    return (
      <div className="movies-card">
        <img src={this.props.cardState.image as string} alt="poster.jpg" />
        <h3>{this.props.cardState.title}</h3>
        <p>{this.props.cardState.ganre}</p>
        <span>{this.props.cardState.date}</span>
        <span>{` - ${this.props.cardState.status}`}</span>
        <p>{this.props.cardState.adult ? '18+' : ''}</p>
      </div>
    );
  }
}

export default MoviesCard;
