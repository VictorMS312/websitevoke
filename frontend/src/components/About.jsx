import React from 'react';
import { Target, Eye, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { companyInfo } from '../data/mock';

const About = () => {
  const valueIcons = {
    'Criatividade': Lightbulb,
    'Resultados': TrendingUp,
    'Transparência': Eye,
    'Inovação': Target,
    'Parceria': Heart
  };

  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a <span className="text-orange-500">Agência VOKE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-orange-500" />
                Nossa Missão
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {companyInfo.mission}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-orange-500" />
                Nossa Visão
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {companyInfo.vision}
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Por que escolher a VOKE?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Equipe especializada e experiente
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Estratégias personalizadas para cada cliente
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Resultados mensuráveis e comprovados
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Suporte contínuo e dedicado
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-600/20 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-orange-500/20">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
                alt="Equipe Agência VOKE"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-2">Nossa Equipe</h4>
                <p className="text-gray-300">
                  Profissionais apaixonados por criar experiências únicas e resultados extraordinários.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">
            Nossos <span className="text-orange-500">Valores</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {companyInfo.values.map((value) => {
            const IconComponent = valueIcons[value] || Target;
            
            return (
              <div
                key={value}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  <IconComponent size={40} />
                </div>
                <h4 className="text-white font-semibold text-lg">
                  {value}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-600/10 to-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-orange-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-300">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">3+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24h</div>
              <div className="text-gray-300">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;