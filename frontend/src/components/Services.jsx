import React, { useState } from 'react';
import { Palette, Share2, Globe, Camera, X, Send } from 'lucide-react';
import { services } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { useToast } from '../hooks/use-toast';

const iconMap = {
  Palette: Palette,
  Share2: Share2,
  Globe: Globe,
  Camera: Camera
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCheckboxChange = (questionId, option, checked) => {
    setFormData(prev => {
      const currentValues = prev[questionId] || [];
      if (checked) {
        return {
          ...prev,
          [questionId]: [...currentValues, option]
        };
      } else {
        return {
          ...prev,
          [questionId]: currentValues.filter(value => value !== option)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - in real implementation, this would send to backend
    setTimeout(() => {
      toast({
        title: "Briefing enviado com sucesso!",
        description: "Entraremos em contato em breve para discutir seu projeto.",
      });
      setIsSubmitting(false);
      setSelectedService(null);
      setFormData({});
    }, 2000);
  };

  const renderFormField = (question) => {
    const IconComponent = iconMap[question.icon];
    
    switch (question.type) {
      case 'text':
        return (
          <div key={question.id} className="space-y-2">
            <Label className="text-white">{question.question} {question.required && <span className="text-red-400">*</span>}</Label>
            <Input
              value={formData[question.id] || ''}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              required={question.required}
            />
          </div>
        );
      
      case 'textarea':
        return (
          <div key={question.id} className="space-y-2">
            <Label className="text-white">{question.question} {question.required && <span className="text-red-400">*</span>}</Label>
            <Textarea
              value={formData[question.id] || ''}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
              required={question.required}
            />
          </div>
        );
      
      case 'select':
        return (
          <div key={question.id} className="space-y-2">
            <Label className="text-white">{question.question} {question.required && <span className="text-red-400">*</span>}</Label>
            <Select onValueChange={(value) => handleInputChange(question.id, value)}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                {question.options.map((option, index) => (
                  <SelectItem key={index} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      
      case 'checkbox':
        return (
          <div key={question.id} className="space-y-2">
            <Label className="text-white">{question.question} {question.required && <span className="text-red-400">*</span>}</Label>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${question.id}-${index}`}
                    checked={(formData[question.id] || []).includes(option)}
                    onCheckedChange={(checked) => handleCheckboxChange(question.id, option, checked)}
                  />
                  <Label htmlFor={`${question.id}-${index}`} className="text-white text-sm">{option}</Label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'radio':
        return (
          <div key={question.id} className="space-y-2">
            <Label className="text-white">{question.question} {question.required && <span className="text-red-400">*</span>}</Label>
            <RadioGroup onValueChange={(value) => handleInputChange(question.id, value)}>
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                  <Label htmlFor={`${question.id}-${index}`} className="text-white text-sm">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em marketing digital para fazer sua marca brilhar no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div key={service.id} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="text-orange-500 mb-6">
                  <IconComponent size={48} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      onClick={() => setSelectedService(service)}
                    >
                      Solicitar Orçamento
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="bg-gray-800 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-orange-500 mb-4">
                        Briefing - {service.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {service.briefingForm.map(renderFormField)}
                      
                      <div className="flex gap-4 pt-6">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Enviar Briefing
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;