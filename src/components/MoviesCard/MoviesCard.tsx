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
        <div className="info">
          <h3>{this.props.cardState.title}</h3>
          <p>{this.props.cardState.ganre}</p>
          <p>{`Date of release: ${
            this.props.cardState.date ? this.props.cardState.date : 'unknown'
          }`}</p>
          <p>{`Status - ${
            this.props.cardState.status ? this.props.cardState.status : 'unknown'
          }`}</p>
          <h3 className="adult">{this.props.cardState.adult ? '18+' : ''}</h3>
        </div>
      </div>
    );
  }
}

export default MoviesCard;
