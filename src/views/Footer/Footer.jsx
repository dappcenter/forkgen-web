'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar">
                <div className="text-center">
                  Copyright &copy; 2016 <a title="Core Developer" href="//github.com/hegdeashwin" target="_blank">Ashwin Hegde</a> | <a title="Contributors" href="//github.com/hegdeashwin/forkgen/graphs/contributors" target="_blank">Contributions</a>, <a title="The MIT License (MIT)" href="//raw.githubusercontent.com/hegdeashwin/elastic-hub/master/LICENSE" target="_blank">The MIT License (MIT)</a>
                </div>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
