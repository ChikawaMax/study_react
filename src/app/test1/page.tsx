"use client"

import React from 'react';

const HomePage = () => {

  const handleClick = (e: any) => {
    console.log(e.target.textContent);
  }

  return (
    <div>
      <h1>aaa</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default HomePage;
