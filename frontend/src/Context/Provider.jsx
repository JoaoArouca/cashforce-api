/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { get } from '../Services';
import Context from './context';

export default function Provider({ children }) {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const status = ['Pendente de confirmação',
    'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria',
    'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado'];

  useEffect(() => { // retorna todos os valores do bando de dados
    async function getData() {
      const dataOrders = await get('order');
      const dataUsers = await get('user');
      const dataProviders = await get('provider');
      setOrders(dataOrders);
      setProviders(dataProviders);
      setUsers(dataUsers);
    }

    getData();
  }, []);

  const globalstate = {
    orders, users, providers, status,
  };

  return <Context.Provider value={globalstate}>{children}</Context.Provider>;
}
