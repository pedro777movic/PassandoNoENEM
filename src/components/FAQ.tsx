import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "E se eu estiver começando do zero?",
      answer: "Sim, o método foi feito especialmente para iniciantes. Você não precisa de conhecimento prévio."
    },
    {
      question: "Tenho pouco tempo para estudar, funciona?",
      answer: "Sim! Adaptamos seu cronograma à sua rotina. O método é otimizado para quem tem pouco tempo."
    },
    {
      question: "Como acesso o curso?",
      answer: "100% online, acesso imediato após a compra. Funciona no computador, tablet e celular."
    },
    {
      question: "Posso parcelar?",
      answer: "Sim, até 3x no cartão de crédito sem juros. Ou pagamento único via PIX/boleto."
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: "Acesso vitalício ao curso e todos os materiais. Sem mensalidades ou renovações."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perguntas Frequentes
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-700/50 border border-cyan-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-600/30 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h4 className="text-white font-semibold text-lg">{faq.question}</h4>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;