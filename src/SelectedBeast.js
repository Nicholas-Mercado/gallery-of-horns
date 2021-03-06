import React from 'react';
import Modal from 'react-bootstrap/Modal'
class SelectedBeast extends React.Component{
  
render() {
  return (
    <>
      <Modal  show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img style={{width: '100%'}} src={this.props.beast.image_url} alt={this.props.beast.image_url} title={this.props.beast.description}/> 
        <p>{this.props.beast.description}</p>
        </Modal.Body>
      </Modal>
    </>
    )
  }
}

export default SelectedBeast;