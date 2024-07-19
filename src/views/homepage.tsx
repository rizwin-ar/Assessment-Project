import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Nav, Offcanvas, Button } from 'react-bootstrap';
import '../styles/hompage.css';
interface Country {
  name: string;
  region: string;
  flag: string;
}

const Homepage: React.FC = () => {

  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState<string>('All');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllCountries = () => {
    axios
      .get('https://restcountries.com/v2/all?fields=name,region,flag')
      .then((response) => {
        setAllCountries(response.data);
      });
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const filteredCountries = region === 'All'
    ? allCountries
    : allCountries.filter((country) => country.region === region);

  return (

    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4 countries-text">Countries</h1>
        <Button variant="light" onClick={handleShow} className="d-lg-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="11" x2="20" y2="11" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="4" y1="5" x2="20" y2="5" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="4" y1="17" x2="20" y2="17" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Button>
        <Nav variant="tabs" defaultActiveKey="All" className="custom-nav d-none d-lg-flex">
          <Nav.Item>
            <Nav.Link eventKey="All" onClick={() => setRegion('All')}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Asia" onClick={() => setRegion('Asia')}>Asia</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Europe" onClick={() => setRegion('Europe')}>Europe</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav variant="tabs" defaultActiveKey="All" className="flex-column custom-nav">
            <Nav.Item>
              <Nav.Link eventKey="All" onClick={() => { setRegion('All'); handleClose(); }}>All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Asia" onClick={() => { setRegion('Asia'); handleClose(); }}>Asia</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Europe" onClick={() => { setRegion('Europe'); handleClose(); }}>Europe</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Row className="mt-4">
        {filteredCountries.map((country) => (
          <Col key={country.name} xs={12} sm={12} md={6} lg={6} className="mb-4">
            <div className="country-card p-3">
              <img src={country.flag} alt={`${country.name} flag`} className="flag-img" />
              <div className='country-name-region-wrapper'>
                <h5 className='country-name'>{country.name}</h5>
                <p className='country-region'>{country.region}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <footer className="text-center mt-4">
        <div className="d-flex justify-content-center gap-3 mb-5 mt-3">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24Z" fill="white" stroke="#3E3E3E" stroke-width="2" />
            <path d="M29 15.667H26.5C24.199 15.667 22.333 17.532 22.333 19.833V22.333H19.833V25.667H22.333V32.333H25.667V25.667H28.167L29 22.333H25.667V19.833C25.667 19.373 26.04 19 26.5 19H29V15.667Z" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24Z" fill="white" stroke="#3E3E3E" stroke-width="2" />
            <path d="M33.167 16.5C32.369 17.063 31.485 17.493 30.55 17.775C29.522 16.593 27.865 16.178 26.402 16.737C24.938 17.296 23.979 18.709 24 20.275V21.108C21.026 21.185 18.21 19.768 16.5 17.333C16.5 17.333 13.167 24.833 20.667 28.167C18.95 29.332 16.906 29.916 14.833 29.833C22.333 34 31.5 29.833 31.5 20.25C31.499 20.018 31.477 19.786 31.433 19.558C32.284 18.72 32.884 17.661 33.167 16.5Z" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24Z" fill="white" stroke="#3E3E3E" stroke-width="2" />
            <path d="M27.333 20.667C30.095 20.667 32.333 22.905 32.333 25.667V31.5H29V25.667C29 24.746 28.254 24 27.333 24C26.413 24 25.667 24.746 25.667 25.667V31.5H22.333V25.667C22.333 22.905 24.572 20.667 27.333 20.667Z" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="15.6666" y="21.5" width="3.33333" height="10" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="17.3333" cy="17.3334" r="1.66667" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24Z" fill="white" stroke="#3E3E3E" stroke-width="2" />
            <path d="M32.783 19.35C32.582 18.545 31.965 17.909 31.167 17.683C29.733 17.333 24 17.333 24 17.333C24 17.333 18.267 17.333 16.833 17.717C16.035 17.943 15.418 18.578 15.217 19.383C14.954 20.838 14.826 22.314 14.833 23.792C14.824 25.281 14.952 26.768 15.217 28.233C15.439 29.013 16.052 29.619 16.833 29.833C18.267 30.217 24 30.217 24 30.217C24 30.217 29.733 30.217 31.167 29.833C31.965 29.607 32.582 28.972 32.783 28.167C33.044 26.723 33.172 25.259 33.167 23.792C33.176 22.302 33.048 20.816 32.783 19.35Z" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.125 26.517L26.917 23.792L22.125 21.067V26.517Z" stroke="#3E3E3E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p className='footer-text'>Example@mail.com</p>
        <p className='footer-text'>Copyright © 2020 Name. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Homepage;
