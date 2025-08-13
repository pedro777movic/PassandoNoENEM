import React from 'react';
import { Rocket, Target } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-cyan-400 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Rocket className="mx-auto mb-4 w-16 h-16 text-cyan-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Passando no ENEM Começando Hoje
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 text-gray-300">
              Acelere sua aprovação no ENEM — mesmo que esteja começando agora
            </h2>
            <p className="text-lg md:text-xl text-cyan-300 mb-8">
              📚 Estudo inteligente, com foco no que mais cai, sem perder tempo com o que não importa.<br />
              Não é sobre estudar mais, é sobre estudar certo.
            </p>
          </div>

          <a 
            href="https://pay.cakto.com.br/9ymp7n8_518446" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'InitiateCheckout');
              }
            }}
            className="group inline-flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="flex items-center gap-3">
              <Target className="w-6 h-6" />
              COMEÇAR MINHA PREPARAÇÃO AGORA
              <span className="text-2xl">🔥</span>
            </span>
          </a>

          {/* Student Image Placeholder */}
          <div className="mt-12">
            <div className="w-80 h-60 mx-auto rounded-lg border border-cyan-500/30 overflow-hidden">
              <img 
                src="https://i.imgur.com/LrUaZrd.png" 
                alt="Estudantes focados preparando-se para o ENEM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;