"use client"

import React from 'react';

const HomePage = () => {

  const handleClick = () => {
    console.log("aaaaa")
  }

  return (
    <div>
      <h1>aaa</h1>
      <input type='button' value="aaaaa" onClick={handleClick} />
    </div>
  );
};

export default HomePage;
