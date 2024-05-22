



import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import hallmarkcard from "./assets/hallmarkcard.png"

const InvestmentCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [walletAddresses, setWalletAddresses] = useState({
    plan1: [
      { coin: 'Bitcoin', address: "1KM4uR9zvNky5uicH2HwYAJ7tr6cUD2PzE" },
    //   { coin: 'Ethereum', address: "0x1234567890123456789012345678901234567890" }
    // ],
    // plan2: [
    //   { coin: 'Litecoin', address: "ltc123456789012345678901234567890123" },
    //   { coin: 'Bitcoin Cash', address: "bitcoincash:qrcw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4" }
    // ],
    // plan3: [
    //   { coin: 'Ripple', address: "rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn" },
    //   { coin: 'Stellar', address: "GDGMR4XQPDQL7ZM5LWS6KQZUWLC7P3Q3JPMMVH3HV5TECBKRG3WU65ZA" }
    ]
  });
  

  const handleShowModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => alert('Wallet address copied to clipboard'))
      .catch((error) => console.error('Could not copy text: ', error));
  };

  const handleButtonClick = () => {
    setShowImage(!showImage); // Toggle the state of showImage
  };


  return (
    <div className="mx-auto">
      {/* <Testimony  className="mt-5"/> */}
    <Card className='p-5 mt-4 border-0'>
      <Row className="p-3 p-5 mt-4">
        <Col md={4} className="">
          <Card className="shadow p-3 mb-5 rounded " style={{background:"purple", color:"white"}}>
            <Card.Body>
              <div className="investment-plan fw-bold text-center">
                <h4 className="text-center">Invest Now</h4>
                <p>Type: Crypto</p>
                <p>Percentage: 30%</p>
                <p>$500-$5000</p>
                <p className="fs-5">Withdrawal in 14 Days</p>
                <Button className='border border-white' onClick={() => handleShowModal('plan1')} style={{background:"purple", color:"white"}}>View Wallet Addresses</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="shadow p-3 mb-5 rounded " style={{background:"purple", color:"white"}}>
            <Card.Body>
              <div className="investment-plan fw-bold text-center">
                <h4 className="text-center">Passion and Enjoyment</h4>
                <p>Whether you're a film enthusiast or a casual moviegoer, investing in movies offers the opportunity to engage with an art form you enjoy while potentially profiting from its success.
                </p>
                </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={4} className="text-center" style={{height:'px'}}>
        <Card style={{background:"purple", color:"white", height:'310px'}}>
      {showImage && (
        <img  src={{hallmarkcard}} alt="membership" />
      )}
      <Card.Body>
        <Card.Title style={{marginTop:"20px"}}>Click to Reveal</Card.Title>
        <Card.Text>
          Click the button below to reveal the image.
        </Card.Text>
        <Button  className='border border-white text-white' variant="" onClick={handleButtonClick} style={{marginTop:"120px"}}>
          {showImage ? 'Hide Image' : 'Reveal Image'}
        </Button>
      </Card.Body>
       </Card>
        </Col> */}
        {/* Add more columns with different investment plans */}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton style={{background:"purple", color:"white"}}>
          <Modal.Title >Wallet Addresses</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background:"purple", color:"white"}}>
          <p className="fw-italic bg-warning p-2 rounded" style={{background:"purple", color:"white"}}>Please copy the wallet address below and make your payment</p>
          {walletAddresses[selectedPlan]?.map(({ coin, address }, index) => (
            <div key={index}>
              <p>{coin}: {address}</p>
              <Button variant="warning" className="text-white" onClick={() => copyToClipboard(address)} style={{background:"purple"}}>Copy to Clipboard</Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer style={{background:"purple", color:"white"}}>
          <Button variant="" className="text-white" onClick={handleCloseModal} style={{background:"purple", color:"white"}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    </div>
  );
}

export default InvestmentCard;

