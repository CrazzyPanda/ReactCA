import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap/'
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      films: [],
      noResults: false,
      noTermError: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

//if an empty search bar is searched, show no term error
    if(this.state.term === '') {
      this.setState({
        noTermError: true,
        films: [],
        noResults: false
      })
    }
//otherwise fetch the data from the api
    else {
      fetch(`https://ghibliapi.herokuapp.com/films?&q=${this.state.term}`)
      .then(res => res.json())
      .then(data => {

//if the array returned is empty, show no results error
        if(data.length === 0) {
          this.setState({
            noResults: true,
            noTermError: false,
            films: []
          })
        }
//otherwise show results with no error messages
        else {
          this.setState({
            films: data,
            noResults: false,
            noTermError: false
          })
        }
      })
    }
  }

  render() {

    const films = this.state.films.map((item) => (
      <div key={item.id}>
        <Card style={{ width: '40rem', height: '28rem'}}>
          <Col md="12">
            <Card.Body>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <br/>
              <p>Director: {item.director}
              <br/>
              Producer: {item.producer}
              <br/>
              Release Date: {item.release_date}
              <br/>
              Rotten Tomatoes Score: {item.rt_score}%</p>
            </Card.Body>
          </Col>
        </Card>
      </div>
    ));

    return (
      <div>
        <Row>
          <Col><p className="text-center"><img src="/SGLogo.png" height="432" width="900" /></p></Col>
        </Row>
        <br/>
        <Row>
          <Col></Col>
          <Col>
            <form onSubmit={this.handleSubmit}>
              <input className="form-control" placeholder="Search" value={this.state.term} onChange={this.handleInput} />
              <br/>
              <Row>
                <Col>
                  <button className="btn btn-outline-secondary">Search</button>
                </Col>
                <Col md="10"><p>Search for a movie from the Studio Ghibli library!</p></Col>
              </Row>
              <br/>
              <Row>
                <Col>
                {
                  this.state.noResults &&
                  <Alert variant="dark">
                    <p>Whoops! 😅 That movie is not available. 😢</p>
                  </Alert>
                }
                {
                  this.state.noTermError &&
                  <Alert variant="dark">
                    <p>Whoops! 😅 You need to search something. 🤔</p>
                  </Alert>
                }
                </Col>
              </Row>
            </form>
            <br/>
            {films}
          </Col>
          <Col>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col><p className="text-center"><img src="/groupSG.gif" height="400" width="500" /></p></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
