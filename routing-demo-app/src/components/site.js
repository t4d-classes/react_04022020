import React from 'react';

import { useParams } from 'react-router-dom';

export const Home = () => {

  return <h1>Home</h1>;

};

export const About = () => {

  const params = useParams();

  return <h1>About {params.id}</h1>;

};

export const Contact = () => {

  return <h1>Contact</h1>;

};