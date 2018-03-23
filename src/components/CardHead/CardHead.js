import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CardHead.css';

class CardHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className={s.root}>
      <div className={s.container}>
          <div>
            <span>Sergio</span>
            <div className={`progress ${s.progressBar}`}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '35%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div>
            <span>Juan</span>
            <div className='progress' style= {{height:'3px'}} >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '25%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div>
            <span>Pedro</span>
            <div className={`progress ${s.progressBar}`}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '10%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CardHead);

