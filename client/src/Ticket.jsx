import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Ticket = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <>
    <div className="p-5">
      <Card className="p-5 mt-4 border mt-5" style={{background:"purple"}}>
        <Card.Body>
          <Card.Title className="text-white fw-bold">GET OUR TICKETS</Card.Title>
          <Card.Text className="text-white">
            <h6 className="text-white fw-bold">
            Experience the Magic: Why 
            You Should Secure Your Movie Tickets Today
            </h6>
            <p>
            Lights dim, curtains draw, and the screen comes to life — there's nothing quite like the allure of a movie theater. In a world bustling with digital distractions, the cinema remains a timeless sanctuary, offering an escape into realms both familiar and fantastical.
            If you've been hesitating to secure your movie tickets, let us persuade you why now is the perfect time to dive into the enchanting world of cinema.
            </p>
          </Card.Text>
          <Button variant="transparent" className="border border-white text-white p-2" onClick={handleOpenModal}>Purchase Tickets</Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Purchase Tickets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To purchase tickets, please contact the admin through the live chat below. Thank you.
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:"purple"}} className="text-white" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default Ticket;
