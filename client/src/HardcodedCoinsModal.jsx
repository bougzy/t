import React, { useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const HardcodedCoinsModal = ({ show, handleClose, hardcodedCoins }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hardcoded Coins</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {hardcodedCoins.map((coin, index) => (
            <ListGroup.Item key={index}>
              <strong>{coin.name}</strong>: {coin.address}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HardcodedCoinsModal;
