/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Hero from '../components/Hero';
import Card from '../components/Card';

function Home() {
  return (
    <div className="container-xxl p-0">
      <div className="d-flex justify-content-around flex-column">
        <h4 className="text-center my-0 open-sans-font">Header 1</h4>
        <h4 className="text-center pb-3">Header 2</h4>
        <img
          className="align-self-center z-depth-2"
          alt="100x100"
          height={200}
          width={200}
          src="./assets/background-image.jpeg"
          data-holder-rendered="true"
        />
        <p className="text-center my-3">Desc</p>
      </div>
    </div>
  );
}

export default Home;
