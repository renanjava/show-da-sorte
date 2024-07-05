import React from 'react';
import Head from 'next/head';

const DefaultHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Rifas Charamba</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />

      <link href="/assets/img/favicon.png" rel="icon" />
      <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Cardo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
      <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

      <link href="/assets/css/main.css" rel="stylesheet" />
    </Head>
  );
}

export default DefaultHead;
