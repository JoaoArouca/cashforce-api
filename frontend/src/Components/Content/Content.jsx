/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import Context from '../../Context/context';
import './Content.css';

function Content() {
  const { orders } = useContext(Context);
  return (
    <Table responsive className="table">
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
            orders.length && (
              orders.map((order) => {
                const {
                  buyer, provider, value, emissionDate, orderStatusBuyer, nNf,
                } = order;

                const splitJSDAte = emissionDate.split('-');
                const getDay = splitJSDAte[2].split('T');
                const formatedEmissionDate = `${getDay[0]}/${splitJSDAte[1]}/${splitJSDAte[0]}`;

                return (
                  <tr key={nNf}>
                    <td>{nNf}</td>
                    <td>{buyer.name}</td>
                    <td>{provider.name}</td>
                    <td>{formatedEmissionDate}</td>
                    <td>{`R$${Number(value).toFixed(2).replace('.', ',')}`}</td>
                    <td>{orderStatusBuyer}</td>
                    <td>
                      <button
                        type="button"
                        className="provider-btn"
                      >
                        Dados do cedente
                      </button>
                    </td>
                  </tr>
                );
              })
            )
        }
      </tbody>
    </Table>
  );
}

export default Content;
