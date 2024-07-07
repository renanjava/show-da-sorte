import React from 'react';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Footer from '../../components/Footer';
import DefaultHead from '../../components/DefaultHead';
import Extra from '../../components/Extra';
import JsFiles from '../../components/JsFiles';

const HomePage: React.FC = () => {
  return (
    <>
      <DefaultHead />
      <Header />
      <MainContent />
      <Footer />
      <Extra />
      <JsFiles />
    </>
  );
};

export default HomePage;
