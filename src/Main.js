import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Filter from './Filter'

class Main extends React.Component{
  render(){
   return(
    <main >
      <Filter
        data={this.props.data}
        handleSelect={this.props.handleSelect}
      />
      <Row className="text-center"  xs={1} sm={2}  md={2}  lg={3}  xl={4}>
        {this.props.data.map((hornsB,index) => (
          <Col key={index}>
        <HornedBeast
          beast={hornsB}
          handleShowModal={this.props.handleShowModal}
          />
          </Col>
        )
        )}
      </Row>
    </main>
    )
  }
}

export default Main;