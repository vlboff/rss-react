import { Component } from 'react';

class Forms extends Component<{ setPath: () => void }> {
  constructor(props: { setPath: () => void }) {
    super(props);
  }

  componentDidMount() {
    this.props.setPath();
  }

  render() {
    return (
      <main>
        <form action="">
          <div className="inputs">
            <div className="input-form">
              <label htmlFor="input-title">
                Title:
                <input type="text" id="input-title" placeholder="movie title" />
              </label>
            </div>
            <div className="input-form">
              <label htmlFor="input-poster" className="input-poster">
                Add poster:
                <input type="file" id="input-poster" accept=".png, .jpg, .jpeg" />
                <div>download image</div>
              </label>
            </div>
            <div className="input-form">
              <label htmlFor="input-select" className="input-select">
                {' '}
                Select ganre:
                <select name="Select ganre" id="input-select">
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Fantasy">Romance</option>
                  <option value="Horror">Thriller</option>
                  <option value="Mystery">Western</option>
                </select>
              </label>
            </div>
            <div className="input-form">
              <label htmlFor="input-date">
                Select release date
                <input type="date" id="input-date" />
              </label>
            </div>
            <div className="input-form">
              <p>Status:</p>
              <div className="input-form-radio">
                <label htmlFor="status-rumored">
                  <input type="radio" id="status-rumored" name="status" value="rumored" />
                  Rumored
                </label>
                <label htmlFor="status-planned">
                  <input type="radio" id="status-planned" name="status" value="planned" />
                  Planned
                </label>
                <label htmlFor="status-in-roduction">
                  <input type="radio" id="status-in-roduction" name="status" value="in-roduction" />
                  In Production
                </label>
                <label htmlFor="status-post-production">
                  <input
                    type="radio"
                    id="status-post-production"
                    name="status"
                    value="post-production"
                  />
                  Post Production
                </label>
                <label htmlFor="status-released">
                  <input type="radio" id="status-released" name="status" value="released" />
                  Released
                </label>
                <label htmlFor="status-canceled">
                  <input type="radio" id="status-canceled" name="status" value="canceled" />
                  Canceled
                </label>
              </div>
            </div>
            <div className="input-form">
              <label htmlFor="input-adult" className="input-adult">
                <input type="checkbox" name="adult" id="input-adult" />
                18+
              </label>
            </div>
          </div>
          <div className="submit">
            <label htmlFor="input-submit">
              <input type="submit" value="submit" />
            </label>
          </div>
        </form>
      </main>
    );
  }
}

export default Forms;
