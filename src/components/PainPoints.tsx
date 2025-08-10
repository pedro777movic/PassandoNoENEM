import React from 'react';
import { AlertCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const painPoints = [
    "Começa a estudar e se sente perdido no meio do caminho?",
    "Tem dificuldade para memorizar o que aprendeu?",
    "Sente que é tarde demais para começar?",
    "Se esforça mas não vê evolução real?"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Você já passou por isso?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-slate-700/50 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-left">{point}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
            </div>
            <p className="text-xl text-cyan-300 font-semibold">
              A verdade é: o problema não é você. O problema é o método.
            </p>
          </div>

          {/* Author Image Placeholder */}
          <div className="mt-8">
            <div className="w-32 h-32 mx-auto rounded-full border border-cyan-500/30 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Júlio Maciel Machado - Especialista em preparação para ENEM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;