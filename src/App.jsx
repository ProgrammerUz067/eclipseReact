import React from "react";
import './App.css';

const App = () => {
  return (

    <div>
      <div class="header">
        {" "}
        <h2>
          <a
            href="https://www.instagram.com/xasan0v_me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diyor.
          </a>
        </h2>{" "}
        <div
          class="mid-spot"
          onclick="document.body.classList.toggle('gold');"
        ></div>{" "}
        <button class="contact-btn">
          {" "}
          <span class="glow"></span>{" "}
          <span class="contact-btn-content">Contact Us</span>{" "}
        </button>{" "}
        <div class="spotlight">
          {" "}
          <div></div> <div></div> <div></div>{" "}
        </div>
      </div>
      <canvas id="particleCanvas"></canvas>
      <div class="accent-lines">
        {" "}
        <div>
          {" "}
          <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        </div>{" "}
        <div>
          {" "}
          <div></div> <div></div> <div></div> <div></div>{" "}
        </div>
      </div>
      <div class="heroSubP">
        {" "}
        <p>Introducing</p>
      </div>
      <div class="hero">
        {" "}
        <div class="heroT">
          {" "}
          <h2>Eclipx</h2> <h2>Eclipx</h2>{" "}
        </div>
      </div>
      <p class="heroP">
        The world's best platform, <br /> powered by EclipxOS + React.
      </p>
      <div class="mountains">
        {" "}
        <div></div> <div></div> <div></div>
      </div>
      <div class="hero-spacer"></div>
      <div class="content-section">
        {" "}
        <div class="content-acc">
          {" "}
          <div></div> <div></div>{" "}
        </div>{" "}
        <p class="subt">Revolutionary by design</p>{" "}
        <h3 class="title">
          Harness. Empower.
          <br /> Unmatched Versatility.
        </h3>{" "}
        <p class="subp">
          At the core lies our revolutionary framework, <br />
          ensuring adaptability across all application architectures.
        </p>
      </div>
    </div>
  );
};

export default App;
