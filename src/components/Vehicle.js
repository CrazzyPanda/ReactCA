import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'react-bootstrap/'

class Vehicle extends React.Component{
  constructor() {
    super();
    this.state = {
      vehicle: []
    };
  }


  componentDidMount() {

    fetch(`https://ghibliapi.herokuapp.com/vehicles`)
    .then(res => res.json())
    .then(data => {this.setState({
      vehicle: data
    })
  })
    .catch(e => console.log('error', e));
  }

  render() {

    return(
      <Row>
        {this.state.vehicle.map((item) => (
           <div key={item.id}>
             <Card style={{ width: '25rem', height: '18rem'}}>
               <Col md="12">
                 <Card.Body>
                 <h5>{item.name}</h5>
                 <p>{item.description}</p>
                 <p>Class: {item.vehicle_class}</p>
                 <p>Size: {item.length}</p>
                 </Card.Body>
               </Col>
             </Card>
           </div>
         ))}
      </Row>
    );
  }
}




export default Vehicle;
