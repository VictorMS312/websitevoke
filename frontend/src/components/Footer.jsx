import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">
              Agência <span className="text-orange-500">VOKE</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformamos ideias em resultados extraordinários através de estratégias criativas 
              e inovadoras que fazem sua marca se destacar no mercado digital.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href={companyInfo.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  {companyInfo.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300 text-sm">
                  {companyInfo.address}
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Horário de Atendimento</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <div>Segunda - Sexta: 9h às 18h</div>
                <div>Sábado: 9h às 13h</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Quick List */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">Nossos Serviços</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Design de Identidade Visual',
              'Gestão de Redes Sociais',
              'Criação de Sites',
              'Captação e Edição de Vídeos',
              'Estratégia Digital',
              'Consultoria em Marketing'
            ].map((service, index) => (
              <span 
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-600 hover:text-white transition-colors duration-300 cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Agência VOKE. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-gray-500 text-xs">
            Desenvolvido com ❤️ pela Agência VOKE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;