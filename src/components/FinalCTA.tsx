import React from 'react';
import { Rocket, Clock, Target } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-black to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sua aprovação começa agora!
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Não deixe mais um ano passar. Comece sua preparação hoje mesmo e garante sua vaga na universidade dos seus sonhos.
            </p>
          </div>

          <a 
            href="https://pay.cakto.com.br/9ymp7n8_518446" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Purchase');
              }
            }}
            className="group inline-flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 mb-8"
          >
            <span className="flex items-center gap-4">
              <Target className="w-8 h-8" />
              QUERO COMEÇAR AGORA
              <span className="text-3xl">🚀</span>
            </span>
          </a>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cyan-600/20 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-cyan-300 font-semibold">
                🎁 Bônus exclusivos inclusos
              </p>
            </div>
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-red-400" />
                <p className="text-red-300 font-semibold">
                  ⏳ Oferta por tempo limitado
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-400">
            Sua jornada rumo à aprovação começa com um clique. 
            <br />
            Junte-se aos centenas de alunos que já transformaram seus sonhos em realidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;