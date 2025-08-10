import React from 'react';
import { TrendingUp, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const tangibleBenefits = [
    "✅ Estude menos e aprenda mais.",
    "✅ Saiba exatamente o que priorizar.",
    "✅ Chegue confiante no dia da prova."
  ];

  const emotionalBenefits = [
    "💪 Sinta-se no controle.",
    "🧘‍♂ Mais foco, menos estresse.",
    "🎯 Tranquilidade por saber que está no caminho certo."
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Benefícios para você
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                <h4 className="text-2xl font-bold text-white">TANGÍVEIS</h4>
              </div>
              {tangibleBenefits.map((benefit, index) => (
                <p key={index} className="text-gray-300 text-lg mb-3">{benefit}</p>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-purple-400" />
                <h4 className="text-2xl font-bold text-white">EMOCIONAIS</h4>
              </div>
              {emotionalBenefits.map((benefit, index) => (
                <p key={index} className="text-gray-300 text-lg mb-3">{benefit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;