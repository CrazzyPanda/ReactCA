import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap/'

class Species extends React.Component{
  constructor() {
    super();
    this.state = {
      species: []
    };
  }


  componentDidMount() {

    fetch(`https://ghibliapi.herokuapp.com/species`)
    .then(res => res.json())
    .then(data => {this.setState({
      species: data
    })
  })
    .catch(e => console.log('error', e));
  }

  render() {
    
    return(
      <Row>
        {this.state.species.map((item) => (
           <div key={item.id}>
             <Card style={{ width: '20rem', height: '18rem'}}>
               <Col md="12">
                 <Card.Body>
                 <h5>{item.name}</h5>
                 <p>Classification: {item.classification}</p>
                 <p>Eye Colour: {item.eye_colors}</p>
                 <p>Hair Colour: {item.hair_colors}</p>
                 </Card.Body>
               </Col>
             </Card>
           </div>
         ))}
      </Row>
    );
  }
}

export default Species;
