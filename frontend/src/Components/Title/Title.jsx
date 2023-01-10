/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as DarkHands } from '../../Images/Darkhands.svg';
import './Title.css';

function Title({ title, subTitle }) {
  return (
    <section>
      <div className="container container-title">
        <DarkHands />
        <h4 className="title">{title}</h4>
      </div>
      <span className="subtitle">{subTitle}</span>
    </section>

  );
}

export default Title;
