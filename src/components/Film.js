import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap/'

class Film extends React.Component{
  constructor() {
    super();
    this.state = {
      films: []
    };
  }


  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => res.json())
    .then(data => {this.setState({
      films: data
    })
  })
    .catch(e => console.log('error', e));
  }

  render() {

    return(
      <Row>
        {this.state.films.map((item) => (
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
         ))}
      </Row>
    );
  }
}

export default Film;
