import React from 'react';
import Content from '../Content/Content';
// import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import './Dashboard.css';

function Dashboard() {
  return (
    <main>
      <Header />
      <section className="container">
        <Sidebar />
        <div className="divTable">
          <div>
            <h3>Notas fiscais</h3>
            <span>Visualize as notas fiscais que você tem</span>
          </div>
          <Content />

        </div>

      </section>
    </main>
  );
}

export default Dashboard;
