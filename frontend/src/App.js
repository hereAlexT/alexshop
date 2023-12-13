import React from 'react'
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import GithubCorner from 'react-github-corner';


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <GithubCorner
        direction='left'
        href="https://github.com/hereAlexT/alexshop" />
    </>
  )
}

export default App
