'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export default function Home() {
  function btnLoginClick() {
    console.log('click');
  }

  return (
    <>
      <Head>
        <title>Webbb3 | Login</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={montserrat.className}>
        <div className='container col-xxl-8 px-4 py-5'>
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <Image
                src='https://pronatec.pro.br/wp-content/uploads/2024/01/ig-1024x633.png'
                className='d-block mx-lg-auto img-fluid rounded'
                width='700'
                height='500'
                alt='BBB image'
              />
            </div>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3 text-uppercase'>
                Webbb3
              </h1>
              <p className='lead text-muted'>Votação on-chain do BBB</p>
              <p className='lead mb-3'>
                Autentique-se com a sua carteira digital e deixe o seu voto para
                o próximo paredão
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button
                  type='button'
                  onClick={btnLoginClick}
                  className='btn btn-primary btn-lg btn-box-shadow px-4 me-md-2'
                >
                  <Image
                    src='/metamask.svg'
                    width='64'
                    height='64'
                    className='me-3'
                    alt='Metamask icon'
                  />
                  Conectar com a MetaMask
                </button>
              </div>
            </div>
          </div>
          <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
            <p className='col-md-4 mb-0 text-body-secondary'>
              &copy; 2024 Webbb3, Inc.
            </p>
            <ul className='nav col-md-4 justify-content-end'>
              <li className='nav-item'>
                <Link href='/' className='nav-link px-2 text-body-secondary'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='#' className='nav-link px-2 text-body-secondary'>
                  About
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
