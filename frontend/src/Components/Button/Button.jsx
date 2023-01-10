/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Button.css';
import { Modal, Card } from 'react-bootstrap';
import { getById } from '../../Services';

function Button(props) {
  const { provider } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cnpj, setCnpj] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataCnpjById = await getById('cnpj', provider.cnpjId);
      setCnpj(dataCnpjById);
    }

    getData();
  }, []);

  const formatDate = (date) => {
    const splitJSDAte = date.split('-');
    const getDay = splitJSDAte[2].split('T');
    const formatedEmissionDate = `${getDay[0]}/${splitJSDAte[1]}/${splitJSDAte[0]}`;
    return formatedEmissionDate;
  };

  return (
    <>
      <button onClick={handleShow} type="button" className="provider-btn">
        Dados do cedente
      </button>

      {
        show && (
        <Modal show={show} onHide={handleClose} className="overLayer" animation="front">
          <Modal.Header closeButton>
            <Card className="layerCard">
              <Card.Header as="h6">{provider.name}</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{`Cnpj: ${cnpj.cnpj}`}</Card.Subtitle>
                <Card.Text>{`Company Type: ${cnpj.companyType}`}</Card.Text>
                <Card.Text>{`Data de inscrição: ${formatDate(cnpj.createdAt)}`}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Header>
        </Modal>
        )
      }

    </>

  );
}

export default Button;
