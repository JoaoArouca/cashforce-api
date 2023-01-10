/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Context from '../../Context/context';
import Button from '../Button/Button';
import './Card.css';

function Card({ order }) {
  const { status } = useContext(Context);

  const formatDate = (date) => {
    const splitJSDAte = date.split('-');
    const getDay = splitJSDAte[2].split('T');
    const formatedEmissionDate = `${getDay[0]}/${splitJSDAte[1]}/${splitJSDAte[0]}`;
    return formatedEmissionDate;
  };

  return (
    <div className="card-info">
      <span className="card-item">{order.nNf}</span>
      <span className="card-item">{order.buyer.name}</span>
      <span className="card-item">{order.provider.name}</span>
      <span className="card-item">{formatDate(order.emissionDate)}</span>
      <span className="card-item colorStyle">{`R$ ${Number(order.value).toFixed(2).replace('.', ',')}`}</span>
      <span className="card-item status colorStyle">{status[order.orderStatusBuyer]}</span>
      <Button className="card-item" provider={order.provider} />
    </div>
  );
}

export default Card;
