import React from 'react';
import { CheckCircle, Play } from 'lucide-react';

const Product: React.FC = () => {
  const features = [
    "📓 Estratégias para o ENEM, Linguagens e Códigos, Matemática e Ciências da Natureza",
    "🗺 Mapa dos Assuntos Mais Cobrados no ENEM.",
    "🧠 Técnicas de Memorização Acelerada.",
    "✍ Treinamento de Redação Nota 1000.",
    "📊 Método passo a passo para revisar e fixar."
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            O que você vai receber
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{feature}</p>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg">
                <p className="text-cyan-300 font-semibold text-center">
                  📚 São 7 módulos com aulas direto ao ponto.
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* Members Area Screenshot Placeholder */}
              <div className="w-full h-80 border border-cyan-500/30 rounded-lg overflow-hidden mb-4 relative">
                <img 
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Área de membros do curso com aulas online"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Área de Membros</p>
                    <p className="text-cyan-300 text-sm">Preview das aulas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;