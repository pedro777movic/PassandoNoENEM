import React from 'react';
import Header from './components/Header';
import PainPoints from './components/PainPoints';
import Method from './components/Method';
import Product from './components/Product';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import FloatingScore from './components/FloatingScore';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <FloatingScore />
      <Header />
      <PainPoints />
      <Method />
      <Product />
      <Benefits />
      <Authority />
      <Offer />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;