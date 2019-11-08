import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap/'

class Location extends React.Component{
  constructor() {
    super();
    this.state = {
      location: []
    };
  }


  componentDidMount() {

    fetch(`https://ghibliapi.herokuapp.com/locations`)
    .then(res => res.json())
    .then(data => {this.setState({
      location: data
    })
  })
    .catch(e => console.log('error', e));
  }

  render() {

    return(
      <Row>
        {this.state.location.map((item) => (
           <div key={item.id}>
             <Card style={{ width: '20rem', height: '18rem'}}>
               <Col md="12">
                 <Card.Body>
                 <h5>{item.name}</h5>
                 <p>Climate: {item.climate}</p>
                 <p>Terrain: {item.terrain}</p>
                 <p>Surface Water: {item.surface_water}%</p>
                 </Card.Body>
               </Col>
             </Card>
           </div>
         ))}
      </Row>
    );
  }
}

export default Location;
