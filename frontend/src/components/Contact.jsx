import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - in real implementation, this would send to backend
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setIsSubmitting(false);
      setFormData({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
      });
    }, 2000);
  };

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua marca? Vamos conversar sobre seu projeto!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Vamos conversar!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Nossa equipe está pronta para ouvir suas ideias e transformá-las em resultados extraordinários. 
                Entre em contato conosco através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-orange-600 p-3 rounded-lg group-hover:bg-orange-700 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-orange-600 p-3 rounded-lg group-hover:bg-orange-700 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefone</h4>
                  <p className="text-gray-300">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-orange-600 p-3 rounded-lg group-hover:bg-orange-700 transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-gray-300">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-white font-bold text-lg mb-4">O que você pode esperar:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 mr-3 text-orange-500" />
                  Resposta em até 24 horas
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 mr-3 text-orange-500" />
                  Consulta gratuita personalizada
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 mr-3 text-orange-500" />
                  Proposta detalhada sem compromisso
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 mr-3 text-orange-500" />
                  Acompanhamento dedicado
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nome" className="text-white">Nome Completo *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="empresa" className="text-white">Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="telefone" className="text-white">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="servico" className="text-white">Serviço de Interesse</Label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="identidade-visual">Design de Identidade Visual</option>
                  <option value="redes-sociais">Gestão de Redes Sociais</option>
                  <option value="sites">Criação de Sites</option>
                  <option value="audiovisual">Captação e Edição de Imagens/Vídeos</option>
                  <option value="consultoria">Consultoria em Marketing</option>
                </select>
              </div>

              <div>
                <Label htmlFor="mensagem" className="text-white">Mensagem *</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white mt-2 min-h-[120px]"
                  placeholder="Conte-nos mais sobre seu projeto..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;