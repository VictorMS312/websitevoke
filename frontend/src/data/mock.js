// Mock data for Agência VOKE

export const services = [
  {
    id: 1,
    title: "Design de Identidade Visual",
    description: "Criação completa de identidade visual para sua marca, incluindo logotipo, paleta de cores, tipografia e manual de marca.",
    icon: "Palette",
    features: ["Logo Design", "Manual de Marca", "Paleta de Cores", "Tipografia", "Aplicações"],
    briefingForm: [
      { id: 1, question: "Qual é o nome da sua empresa/marca?", type: "text", required: true },
      { id: 2, question: "Descreva em poucas palavras o que sua empresa faz", type: "textarea", required: true },
      { id: 3, question: "Qual é o público-alvo da sua marca?", type: "textarea", required: true },
      { id: 4, question: "Quais valores sua marca representa?", type: "textarea", required: true },
      { id: 5, question: "Tem alguma preferência de cores?", type: "text", required: false },
      { id: 6, question: "Cite 3 marcas que você admira e por quê", type: "textarea", required: false },
      { id: 7, question: "Como você quer que as pessoas se sintam ao ver sua marca?", type: "textarea", required: true },
      { id: 8, question: "Orçamento disponível para o projeto", type: "select", options: ["R$ 1.000 - R$ 3.000", "R$ 3.000 - R$ 5.000", "R$ 5.000 - R$ 10.000", "Acima de R$ 10.000"], required: true }
    ]
  },
  {
    id: 2,
    title: "Gestão de Redes Sociais",
    description: "Gestão completa das suas redes sociais com criação de conteúdo, planejamento estratégico e análise de resultados.",
    icon: "Share2",
    features: ["Criação de Conteúdo", "Planejamento Estratégico", "Análise de Métricas", "Engajamento", "Stories"],
    briefingForm: [
      { id: 1, question: "Quais redes sociais você deseja gerenciar?", type: "checkbox", options: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Twitter"], required: true },
      { id: 2, question: "Quantas publicações por semana você deseja?", type: "select", options: ["3-5 posts", "6-10 posts", "11-15 posts", "Mais de 15 posts"], required: true },
      { id: 3, question: "Qual é o objetivo principal das suas redes sociais?", type: "textarea", required: true },
      { id: 4, question: "Descreva seu público-alvo", type: "textarea", required: true },
      { id: 5, question: "Que tipo de conteúdo você prefere?", type: "checkbox", options: ["Educativo", "Entretenimento", "Promocional", "Inspiracional", "Notícias do setor"], required: true },
      { id: 6, question: "Você tem algum concorrente de referência?", type: "textarea", required: false },
      { id: 7, question: "Orçamento mensal para gestão", type: "select", options: ["R$ 800 - R$ 1.500", "R$ 1.500 - R$ 3.000", "R$ 3.000 - R$ 5.000", "Acima de R$ 5.000"], required: true }
    ]
  },
  {
    id: 3,
    title: "Criação de Sites",
    description: "Desenvolvimento de sites profissionais, responsivos e otimizados para conversão e SEO.",
    icon: "Globe",
    features: ["Design Responsivo", "SEO Otimizado", "CMS Integrado", "E-commerce", "Manutenção"],
    briefingForm: [
      { id: 1, question: "Que tipo de site você precisa?", type: "select", options: ["Site Institucional", "E-commerce", "Blog", "Portfólio", "Landing Page"], required: true },
      { id: 2, question: "Quantas páginas aproximadamente?", type: "select", options: ["1-5 páginas", "6-10 páginas", "11-20 páginas", "Mais de 20 páginas"], required: true },
      { id: 3, question: "Qual é o objetivo principal do site?", type: "textarea", required: true },
      { id: 4, question: "Você já tem um domínio?", type: "radio", options: ["Sim", "Não"], required: true },
      { id: 5, question: "Precisa de integração com sistemas externos?", type: "textarea", required: false },
      { id: 6, question: "Cite 3 sites que você considera como referência", type: "textarea", required: false },
      { id: 7, question: "Precisa de área administrativa?", type: "radio", options: ["Sim", "Não"], required: true },
      { id: 8, question: "Orçamento para o projeto", type: "select", options: ["R$ 2.000 - R$ 5.000", "R$ 5.000 - R$ 10.000", "R$ 10.000 - R$ 20.000", "Acima de R$ 20.000"], required: true }
    ]
  },
  {
    id: 4,
    title: "Captação e Edição de Imagens/Vídeos",
    description: "Produção audiovisual completa com captação profissional, edição criativa e entrega otimizada para suas campanhas.",
    icon: "Camera",
    features: ["Fotografia Profissional", "Produção de Vídeo", "Edição Criativa", "Motion Graphics"],
    briefingForm: [
      { id: 1, question: "Que tipo de produção você precisa?", type: "checkbox", options: ["Fotografia", "Vídeo", "Motion Graphics", "Animação"], required: true },
      { id: 2, question: "Qual será o uso do material?", type: "checkbox", options: ["Redes Sociais", "Site", "Campanha Publicitária", "E-commerce", "Evento"], required: true },
      { id: 3, question: "Onde será realizada a produção?", type: "text", required: true },
      { id: 4, question: "Quantas pessoas/produtos serão fotografados/filmados?", type: "text", required: true },
      { id: 5, question: "Qual é o prazo para entrega?", type: "select", options: ["Até 7 dias", "8-15 dias", "16-30 dias", "Mais de 30 dias"], required: true },
      { id: 6, question: "Você tem alguma referência visual?", type: "textarea", required: false },
      { id: 7, question: "Precisa de modelos/atores?", type: "radio", options: ["Sim", "Não"], required: true },
      { id: 8, question: "Orçamento para o projeto", type: "select", options: ["R$ 1.500 - R$ 3.000", "R$ 3.000 - R$ 6.000", "R$ 6.000 - R$ 12.000", "Acima de R$ 12.000"], required: true }
    ]
  }
];

export const portfolioItems = [
  {
    id: 1,
    title: "Renovação de Marca - PriStore",
    category: "Identidade Visual",
    description: "Criação completa de identidade visual para loja de roupas, incluindo logo, manual de marca e aplicações comerciais.",
    image: "/logo-pristore.png",
    tags: ["Branding", "Logo Design", "Roupas"]
  },
  {
    id: 2,
    title: "Campanha Digital - PriStore",
    category: "Redes Sociais",
    description: "Gestão completa de redes sociais com aumento de 300% no engajamento e 150% em vendas online.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
    tags: ["Social Media", "Campanha", "Fashion"]
  },
  {
    id: 3,
    title: "E-commerce - Vamo",
    category: "Desenvolvimento Web",
    description: "Desenvolvimento de loja virtual completa com integração de pagamentos e sistema de gestão.",
    image: "/logo-vamo.png",
    tags: ["E-commerce", "Web Design", "UX/UI"]
  },
  {
    id: 4,
    title: "Produção Audiovisual - Sorveteria Tropical",
    category: "Vídeo e Fotografia",
    description: "Produção completa de vídeos promocionais e fotografia gastronômica para sorveteria.",
    image: "/xis.jpg",
    tags: ["Vídeo", "Fotografia", "Gastronomia"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    company: "PriStore",
    role: "Proprietária",
    content: "A Agência VOKE transformou completamente nossa identidade visual. O resultado superou todas as expectativas e nossa marca ganhou uma presença muito mais profissional no mercado.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&cs=tinysrgb"
  },
  {
    id: 2,
    name: "João Santos",
    company: "Vamo",
    role: "Diretor de Marketing",
    content: "Excelente trabalho no desenvolvimento do nosso e-commerce. Em 6 meses, nossas vendas online cresceram significativamente. Equipe muito profissional!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&cs=tinysrgb"
  },
  {
    id: 3,
    name: "Ana Costa",
    company: "Sorveteria Tropical",
    role: "Proprietária",
    content: "A produção audiovisual que a VOKE fez para nossa sorveteria é simplesmente perfeita. As fotos e vídeos aumentaram muito nosso movimento nas redes sociais.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&cs=tinysrgb"
  }
];

export const companyInfo = {
  name: "Agência VOKE",
  tagline: "Sua marca, nossa criatividade",
  description: "Somos uma agência de marketing digital especializada em criar experiências únicas para marcas que querem se destacar no mercado. Com anos de experiência, oferecemos soluções completas em branding, marketing digital e produção audiovisual.",
  mission: "Transformar ideias em resultados extraordinários através de estratégias criativas e inovadoras.",
  vision: "Ser referência nacional em soluções de marketing digital que geram impacto real para nossos clientes.",
  values: ["Criatividade", "Resultados", "Transparência", "Inovação", "Parceria"],
  email: "vokeagencyoficial@gmail.com",
  phone: "(51) 9 9520-5583",
  whatsapp: "https://wa.me/qr/QONJLEITYLVUO1",
  address: "Igrejinha, RS - Brasil",
  instagram: "https://www.instagram.com/voke_agencyoficial/"
};