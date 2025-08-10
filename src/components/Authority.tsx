import React from 'react';
import { Star, Users, MessageCircle } from 'lucide-react';

const Authority: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana S.",
      text: "Comecei em agosto e achei que não ia dar tempo. Segui o método e passei em Direito na UFMG!",
      course: "Direito - UFMG",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Lucas P.",
      text: "Mesmo trabalhando o dia todo, consegui organizar meus estudos e fui aprovado!",
      course: "Engenharia - UFRJ",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ana Clara M.",
      text: "Estava desesperada porque só tinha 4 meses para estudar. O cronograma personalizado me salvou!",
      course: "Medicina - UFBA",
      image: "https://images.pexels.com/photos/6549362/pexels-photo-6549362.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rafael T.",
      text: "As técnicas de memorização mudaram tudo! Consegui lembrar de fórmulas que sempre esquecia.",
      course: "Física - USP",
      image: "https://images.pexels.com/photos/3913012/pexels-photo-3913012.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Camila R.",
      text: "Trabalhava meio período e estudava à noite. O método se adaptou perfeitamente à minha rotina!",
      course: "Psicologia - UFRGS",
      image: "https://images.pexels.com/photos/7092602/pexels-photo-7092602.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "João Victor L.",
      text: "Minha redação era terrível. Com o guia, consegui tirar 920 na redação do ENEM!",
      course: "Jornalismo - UFMG",
      image: "https://images.pexels.com/photos/8159535/pexels-photo-8159535.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Por que confiar?
          </h3>

          {/* Author Bio */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500">
                <img 
                  src="https://i.imgur.com/OiaXFRQ.jpeg" 
                  alt="Júlio Maciel Machado - Especialista em ENEM"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Júlio Maciel Machado</h4>
                <p className="text-gray-300">Já aprovou centenas de alunos no Exame Nacional do Ensino Médio</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              Sou aprovado no ENEM + de 5 vezes, e com anos de experiência ajudando alunos a conquistar suas vagas.
            </p>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-cyan-400" />
              <p className="text-cyan-300 font-semibold">
                Mais de <span className="text-2xl">500+</span> alunos já aplicaram meu método e aumentaram suas notas.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <h4 className="text-2xl font-bold text-white text-center mb-8">Histórias reais</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-500/50">
                    <img 
                      src={testimonial.image} 
                      alt={`Foto de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-300 text-sm">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gratitude Messages */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-green-600/20 border border-green-500/30 rounded-lg px-6 py-3">
              <MessageCircle className="w-6 h-6 text-green-400" />
              <p className="text-green-300">Dezenas de mensagens de agradecimento recebidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;