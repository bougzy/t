





import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import My from "./My"
import InvestmentCard from './InvestmentCard';
import WithdrawalForm from './WithdrawalForm';
import Membership from './Membership';
import Ticket from './Ticket';
import Logout from './Logout';

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState('Analytics');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <Container fluid className="">
      <Row>
        <Col sm={3} className="sidebar" style={{background:"purple", color:"white"}}>
          <Nav className="flex-column">
              
              <Nav.Link onClick={() => handleContentChange('Dashboard')} className="text-white fw-bold">Deposit</Nav.Link>
            <Nav.Item>
              
              <Nav.Link onClick={() => handleContentChange('Analytics')} className="text-white fw-bold">Investment Plans</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleContentChange('Settings')} className="text-white fw-bold">Withdrawal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleContentChange('member')} className="text-white fw-bold">Membership Card</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={() => handleContentChange('ticket')} className="text-white fw-bold">Get Your Ticket</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={() => handleContentChange('logout')} className="text-white fw-bold">Logout</Nav.Link>
            </Nav.Item>


          </Nav>
        </Col>
        <Col sm={9} className="content">
          {selectedContent === 'Analytics' && <InvestmentCard />}
          {selectedContent === 'Dashboard' && <My/>}
          {selectedContent === 'Settings' && <WithdrawalForm />}
          {selectedContent === 'member' && <Membership />}
          {selectedContent === 'ticket' && <Ticket />}
          {selectedContent === 'logout' && <Logout />}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


