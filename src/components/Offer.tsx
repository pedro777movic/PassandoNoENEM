import React from 'react';
import { Gift, Clock, Target } from 'lucide-react';

const Offer: React.FC = () => {
  const bonuses = [
    "Checklist dos assuntos mais cobrados",
    "Guia de Redação Nota 1000",
    "Mapa mental de Matemática e Ciências da Natureza"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Oferta Especial
          </h3>

          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-cyan-500/30 rounded-lg p-8 text-center mb-8">
            <div className="mb-6">
              <p className="text-gray-400 text-xl line-through mb-2">De R$ 109,90</p>
              <p className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
                Por apenas R$ 29,90
              </p>
              <p className="text-gray-300">Pagamento único ou em até 3x no cartão</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-cyan-400" />
                <h4 className="text-xl font-bold text-white">
                  🎁 Bônus para as primeiras 50 compras de hoje:
                </h4>
              </div>
              
              <div className="grid gap-3">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-center gap-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <p className="text-gray-300">{bonus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-red-600/20 border border-red-500/30 rounded-lg px-6 py-3 mb-8">
              <Clock className="w-6 h-6 text-red-400" />
              <p className="text-red-300 font-semibold">
                Bônus liberados apenas para as primeiras 50 compras de hoje
              </p>
            </div>

            <a 
              href="https://pay.cakto.com.br/9ymp7n8_518446" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) {
                  window.fbq('track', 'AddToCart');
                }
              }}
              className="group inline-flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="flex items-center gap-3">
                <Target className="w-6 h-6" />
                QUERO COMEÇAR AGORA
                <span className="text-2xl">🚀</span>
              </span>
            </a>
          </div>

          {/* Guarantee */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Garantia Total</h4>
            <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <p className="text-gray-300 text-lg">
                Você tem <span className="text-green-400 font-bold">7 dias</span> para testar. 
                Se não gostar, devolvemos <span className="text-green-400 font-bold">100%</span> do seu dinheiro — sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;