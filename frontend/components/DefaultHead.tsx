import React from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../../src/constants/constants';

const DefaultHead: React.FC = () => {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{SITE_NAME}</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />   
    </Head>
    </>
  );
}

export default DefaultHead;
