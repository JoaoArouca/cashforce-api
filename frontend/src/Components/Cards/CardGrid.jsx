import React, { useContext } from 'react';
// import { ListGroup } from 'react-bootstrap';
import Context from '../../Context/context';
import Card from './Card';
import './CardGrid.css';

function CardGrid() {
  const { orders } = useContext(Context);
  return (
    <div>
      <div className="card-index">
        <span className="nf-item">NOTA FISCAL</span>
        <span className="card-item">SACADO</span>
        <span className="card-item">CEDENTE</span>
        <span className="card-item">EMISSÃO</span>
        <span className="card-item">VALOR</span>
        <span className="card-item status">STATUS</span>
        <span className="card-item btn-index" />
      </div>
      {
        orders.length ? (
          orders.map((order) => <Card order={order} key={order.nNf} />)
        ) : null
      }
    </div>
  );
}

export default CardGrid;
