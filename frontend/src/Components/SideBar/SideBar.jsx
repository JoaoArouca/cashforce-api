import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Hands } from '../../Images/Framehands.svg';
import './SideBar.css';

function SideBar() {
  const [selected, setSelected] = useState(null);

  return (
    <Nav
      variant="pills"
      className="flex-column sidebar"
    >
      <Link
        to="/"
        onClick={() => setSelected(1)}
        className={`navItemDefaultStyle ${selected === 1 && 'navItem'}`}
      >
        <Hands />
        <span>Notas fiscais</span>
      </Link>
      {/* <NavItem
        onClick={() => setSelected(2)}
        style={NavItemStyle}
        className={selected === 2 && 'navItem'}
      >
        Link 2
      </NavItem>
      <NavItem
        style={NavItemStyle}
        onClick={() => setSelected(3)}
        className={selected === 3 && 'navItem'}
      >
        Link 3

      </NavItem> */}
    </Nav>
  );
}

export default SideBar;
