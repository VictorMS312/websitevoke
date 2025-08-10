# Contratos de API - Agência VOKE

## Visão Geral
Este documento define os contratos entre frontend e backend para o site da Agência VOKE, especificando como os formulários de briefing e contato serão processados e enviados por email.

## Dados Mockados no Frontend (mock.js)
- **services**: Array com 4 serviços e seus respectivos formulários de briefing
- **portfolioItems**: Array com casos de sucesso (PriStore, Vamo, Sorveteria Tropical)  
- **testimonials**: Array com depoimentos dos clientes
- **companyInfo**: Informações da empresa (email, telefone, whatsapp, etc.)

## APIs a Implementar

### 1. POST /api/briefing
**Finalidade**: Receber e processar formulários de briefing de serviços específicos

**Payload**:
```json
{
  "serviceId": 1,
  "serviceName": "Design de Identidade Visual",
  "clientName": "Nome do Cliente",
  "clientEmail": "cliente@email.com", 
  "clientPhone": "(51) 99999-9999",
  "responses": {
    "1": "Resposta para pergunta 1",
    "2": "Resposta para pergunta 2",
    // ... demais respostas
  }
}
```

**Ação**: Enviar email formatado para `vokeagencyoficial@gmail.com` com:
- Assunto: "Novo Briefing - [Nome do Serviço]"
- Conteúdo: Dados do cliente + respostas organizadas por pergunta

### 2. POST /api/contact
**Finalidade**: Receber e processar formulário de contato geral

**Payload**:
```json
{
  "nome": "Nome do Cliente",
  "empresa": "Empresa (opcional)",  
  "email": "cliente@email.com",
  "telefone": "(51) 99999-9999",
  "servico": "identidade-visual",
  "mensagem": "Mensagem do cliente"
}
```

**Ação**: Enviar email para `vokeagencyoficial@gmail.com` com:
- Assunto: "Novo Contato - [Nome do Cliente]"
- Conteúdo: Dados completos do formulário de contato

## Modelos de Dados MongoDB

### BriefingSubmission
```javascript
{
  _id: ObjectId,  
  serviceId: Number,
  serviceName: String,
  clientName: String,
  clientEmail: String,
  clientPhone: String,
  responses: Object, // Key-value das respostas
  createdAt: Date,
  emailSent: Boolean
}
```

### ContactSubmission  
```javascript
{
  _id: ObjectId,
  nome: String,
  empresa: String,
  email: String, 
  telefone: String,
  servico: String,
  mensagem: String,
  createdAt: Date,
  emailSent: Boolean
}
```

## Integração Frontend

### Componentes a Atualizar:
1. **Services.jsx**: Remover mock do handleSubmit, integrar com API `/api/briefing`
2. **Contact.jsx**: Remover mock do handleSubmit, integrar com API `/api/contact`

### Alterações nos Formulários:
- Substituir simulação por chamadas reais à API
- Manter UX de loading e mensagens de sucesso/erro
- Adicionar validação de campos obrigatórios
- Limpar formulários após envio bem-sucedido

## Configuração de Email
- **Provedor**: A definir (Nodemailer com Gmail SMTP)
- **From**: vokeagencyoficial@gmail.com  
- **To**: vokeagencyoficial@gmail.com
- **Autenticação**: App Password do Gmail

## Tratamento de Erros
- Validação de dados de entrada
- Logs de erro para debugging
- Mensagens amigáveis para o usuário  
- Fallback em caso de falha no envio de email

## Próximos Passos
1. Implementar modelos MongoDB
2. Criar endpoints da API
3. Configurar sistema de envio de email
4. Integrar frontend com backend
5. Testar formulários end-to-end