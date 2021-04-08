import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';


export const App = () => {
  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <Footer/>      
      </main>
    </div>
  )
}



