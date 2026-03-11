# 🌱 Região do Cerrado Mineiro

![Cerrado Mineiro](https://img.shields.io/badge/Café-Cerrado%20Mineiro-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)

> **Um Futuro Regenerativo Para o Café**  
> A primeira origem de café do mundo a adotar a regeneração como visão de desenvolvimento.

---

## 📖 Sobre o Projeto

Site institucional da **Região do Cerrado Mineiro**, apresentando a história, valores e visão de futuro da primeira Denominação de Origem de café do Brasil. O projeto destaca o compromisso com a agricultura regenerativa e o desenvolvimento sustentável da região cafeeira.

### 🎯 Objetivos

- **Ressignificar** o Produzir, o Inovar e o Viver
- **Liderar** um Futuro Regenerativo
- **Promover** a Denominação de Origem do Cerrado Mineiro
- **Conectar** produtores, indústria e consumidores

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização customizada com sistema REM responsivo
- **Bootstrap 5.3** - Framework CSS
- **AOS (Animate On Scroll)** - Animações suaves ao rolar a página
- **JavaScript ES6+** - Interatividade
- **jQuery** - Manipulação DOM
- **Owl Carousel** - Carrosséis responsivos

---

## 📁 Estrutura do Projeto

```
cerrado/
├── assets/
│   ├── css/
│   │   ├── custom.css              # Estilos principais
│   │   ├── responsive.css          # Media queries e responsividade
│   │   ├── bootstrap.min.css       # Framework Bootstrap
│   │   └── fontes.css              # Tipografia customizada
│   ├── js/
│   │   ├── custom.js               # Scripts customizados
│   │   ├── bootstrap.bundle.min.js
│   │   └── jquery-3.3.1.slim.min.js
│   ├── images/
│   │   ├── 2x/                     # Imagens em alta resolução
│   │   └── SVG/                    # Ícones e gráficos vetoriais
│   ├── video/
│   │   ├── desk-720.mp4            # Vídeo banner desktop (720p)
│   │   ├── mobile-720.mp4          # Vídeo banner mobile (720p)
│   │   └── video.mp4               # Vídeo original
│   ├── fontes/                     # Fontes customizadas
│   ├── favicon/                    # Favicons e ícones de app
│   └── lib/
│       └── owlcarousel/            # Biblioteca de carrossel
├── index.html                      # Página de boas-vindas
├── landing.html                    # Landing page principal (imagem banner)
├── landing-video.html              # Landing page alternativa (vídeo banner)
└── README.md                       # Este arquivo
```

---

## 🎬 Layouts de Aprovação

O projeto inclui duas versões do site para apresentação:

### 🖼️ landing.html - Versão Principal (Imagem Banner)
- Banner inicial com imagem estática de alta qualidade
- Performance otimizada para carregamento rápido
- Visual clean e elegante
- Compatibilidade universal com todos os navegadores
- **Versão aprovada como principal**

### 🎥 landing-video.html - Versão Alternativa (Vídeo Banner)
- Banner inicial com vídeo em movimento
- Vídeos otimizados para desktop (desk-720.mp4) e mobile (mobile-720.mp4)
- Autoplay com transição suave e fallback para imagem estática
- Impacto visual maior e mais moderno
- **Opção adicional para contextos específicos**

**Acesse:**
- `http://localhost/cerrado/` ou `http://localhost/cerrado/landing.html` - Versão principal (imagem)
- `http://localhost/cerrado/landing-video.html` - Versão alternativa (vídeo)

---

## 💻 Como Executar Localmente

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento):
  - WAMP, XAMPP, LAMP, Live Server (VS Code), ou similar
  - Python: `python -m http.server 8000`
  - Node.js: `npx serve`

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/lucasbarin/cerrado.git
   ```

2. **Configure o servidor local**
   - Coloque o projeto na pasta do seu servidor web
   - Ex: `C:\wamp64\www\cerrado` (WAMP no Windows)

3. **Acesse no navegador**
   ```
   http://localhost/cerrado/              (Página inicial)
   http://localhost/cerrado/landing.html  (Landing principal - imagem)
   http://localhost/cerrado/landing-video.html  (Landing alternativa - vídeo)
   ```

---

## 🎨 Sistema de Design

### Tipografia
- **Fonte Primária**: Raptor V3 Premium (customizada)
- **Base REM**: `1rem = 10px` (via `html { font-size: 62.5%; }`)
- **Escalonamento Proporcional**: O site mantém proporções visuais perfeitas em todos os tamanhos de tela

### Paleta de Cores
- **Verde Cerrado**: Cores inspiradas no bioma do Cerrado
- **Tons Terrosos**: Representando a terra e o café
- **Acentos Vibrantes**: Para CTAs e destaques

### Responsividade
- **Desktop First**: Otimizado para telas grandes
- **Mobile Friendly**: Adaptado para dispositivos móveis
- **Breakpoints Personalizados**: Media queries a cada 20px para escalonamento suave

---

## 🔧 Funcionalidades

- ✅ **Banner Responsivo** - Versão principal com imagem + versão alternativa com vídeo
- ✅ **Scroll Suave** com animações personalizadas
- ✅ **Animações on Scroll** (AOS - Animate On Scroll)
- ✅ **Carrosséis Responsivos** (Owl Carousel)
- ✅ **Menu Fixo** com efeito de transição
- ✅ **Vídeos Otimizados** para desktop e mobile com fallback (720p)
- ✅ **SEO Otimizado** com meta tags completas
- ✅ **Open Graph** para compartilhamento em redes sociais
- ✅ **Favicons** para múltiplas plataformas
- ✅ **Sistema REM Responsivo** - Escalonamento proporcional perfeito
- 🚧 **Animações Avançadas** (em desenvolvimento)

---

## 📱 Responsividade

O site é totalmente responsivo e testado em:

- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1025px - 1920px+

---

## 🌐 SEO e Social Media

- Meta tags otimizadas para Google
- Open Graph para Facebook
- Twitter Cards
- Structured data (em desenvolvimento)
- Sitemap XML (em desenvolvimento)

---

## 🤝 Contribuindo

Este é um projeto proprietário da Região do Cerrado Mineiro. Para sugestões ou melhorias, entre em contato através dos canais oficiais.

---

## 📄 Licença

© 2026 Região do Cerrado Mineiro - Todos os direitos reservados.

---

## 👨‍💻 Desenvolvedor

**Lucas Barin**  
Desenvolvimento Web & Design

---

## 📞 Contato

Para mais informações sobre a Região do Cerrado Mineiro:
- 🌐 Website: [regiaocerradomineiro.com.br](https://regiaocerradomineiro.com.br)
- 📧 E-mail: contato@regiaocerradomineiro.com.br

---

<div align="center">

**Feito com ❤️ e ☕ no Cerrado Mineiro**

</div>
