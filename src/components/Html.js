/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    app: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang={app.lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>
            {title}
          </title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://code.jquery.com/jquery-3.2.1.js" />
          <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js" />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"/>

          <link rel="shortcut icon" href="favicon.png" />
          {scripts.map(script =>
            <link key={script} rel="preload" href={script} as="script" />,
          )}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {styles.map(style =>
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />,
          )}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId &&
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${config.analytics
                    .googleTrackingId}','auto');ga('send','pageview')`,
              }}
            />}
          {config.analytics.googleTrackingId &&
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />}
        </body>
      </html>
    );
  }
}

export default Html;
