import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap/'

class People extends React.Component{
  constructor() {
    super();
    this.state = {
      people: []
    };
  }


  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then(res => res.json())
    .then(data => {this.setState({
      people: data
    })
  })
    .catch(e => console.log('error', e));
  }

  render() {

    return(
      <Row>
        {this.state.people.map((item) => (
           <div key={item.id}>
             <Card style={{ width: '20rem', height: '18rem'}}>
               <Col md="12">
                 <Card.Body>
                 <h5>{item.name}</h5>
                 <p>Gender: {item.gender}</p>
                 <p>Age: {item.age}</p>
                 <p>Eye Colour: {item.eye_color}</p>
                 <p>Hair Colour: {item.hair_color}</p>
                 </Card.Body>
               </Col>
             </Card>
           </div>
         ))}
      </Row>
    );
  }
}

export default People;
