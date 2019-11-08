import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component{
  render() {
    return(
      <div style={{backgroundColor: '#343a40'}}>

          <br/>
          <p className="text-center small" style={{color:'white'}}>
            This website does not have any affiliation with Studio Ghibli.<br/>
            The information provided is taken from the unofficial Studio Ghibli API: https://ghibliapi.herokuapp.com<br/>
            Image Sources: https://en.wikipedia.org/wiki/Studio_Ghibli & http://coloringhome.com/coloring-page/1722773 & https://github.com/kelseyhightower/nocode/issues/2354<br/>
            Emojis courtesy of Ryan and https://getemoji.com/

          </p>
          <br/>

      </div>
    );
  }
}

export default Footer;
