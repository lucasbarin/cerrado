# 🌱 Região do Cerrado Mineiro

![Cerrado Mineiro](https://img.shields.io/badge/Café-Cerrado%20Mineiro-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Produção-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)

> **Um Futuro Regenerativo Para o Café**  
> A primeira origem de café do mundo a adotar a regeneração como visão de desenvolvimento.

**🌐 Domínio de Produção:** [cerradomineiro.org](https://cerradomineiro.org)

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
│   │   └── mobile-720.mp4          # Vídeo banner mobile (720p)
│   ├── fonts/                      # Fontes web (Raptor Text Premium)
│   ├── downloads/                  # Assets para download (logos, mapas)
│   ├── favicon/                    # Favicons e ícones de app
│   └── lib/
│       └── owlcarousel/            # Biblioteca de carrossel
├── index.html                      # Página de boas-vindas
├── landing.html                    # Landing page principal (vídeo banner)
└── README.md                       # Este arquivo
```

---

## 🎬 Layout Principal

### 🎥 landing.html - Versão com Vídeo Banner
- Banner inicial com vídeo em movimento
- Vídeos otimizados para desktop (desk-720.mp4) e mobile (mobile-720.mp4)
- Autoplay com transição suave e fallback para imagem estática
- Sistema de detecção de dispositivo para vídeo apropriado
- **Versão aprovada e em produção**

**Acesse:**
- `http://localhost/cerrado/` ou `http://localhost/cerrado/landing.html`

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
   http://localhost/cerrado/landing.html  (Landing page principal)
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

- ✅ **Banner Responsivo** - Versão principal com vídeo banner
- ✅ **Scroll Suave** com animações personalizadas
- ✅ **Animações on Scroll** (AOS - Animate On Scroll)
- ✅ **Carrosséis Responsivos** (Owl Carousel)
- ✅ **Menu Fixo** com efeito de transição
- ✅ **Vídeos Otimizados** para desktop e mobile com fallback (720p)
- ✅ **SEO Otimizado** com meta tags completas
- ✅ **Open Graph** para compartilhamento em redes sociais
- ✅ **Favicons** para múltiplas plataformas
- ✅ **Sistema REM Responsivo** - Escalonamento proporcional perfeito
- ✅ **Downloads de Assets** - Logotipos e mapas disponíveis
- ✅ **Safari iOS Fix** - Correção específica para barras de navegação dinâmicas
- ✅ **Cross-browser Compatibility** - Testado em todos os principais navegadores

---

## 🔧 Otimizações Técnicas

### Performance
- **Vídeos Otimizados**: 720p com compressão eficiente
- **Lazy Loading**: Imagens carregadas sob demanda
- **DNS Prefetch**: Para CDNs externos
- **Preload**: Fontes e vídeos críticos

### Safari iOS Fix
Implementado um fix específico para resolver o problema de viewport em Safari iOS:
- Detecta **exclusivamente Safari iOS** (não afeta Chrome, Firefox ou outros)
- Ajusta altura para 115vh para compensar barras de navegação dinâmicas
- Scroll automático após loading para posicionamento correto
- Navbar fixed que se esconde ao rolar
- Não interfere em outros navegadores ou plataformas

**Arquivos com o fix:**
- `landing.html` (versão de produção)
- `teste.html` (versão de testes)

---

## 📱 Responsividade & Compatibilidade

O site é totalmente responsivo e testado em:

**Dispositivos:**
- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1025px - 1920px+

**Navegadores:**
- ✅ Chrome (desktop & mobile)
- ✅ Safari (desktop & iOS) - com fix específico
- ✅ Firefox (desktop & mobile)
- ✅ Edge
- ✅ Opera

---

## 🌐 SEO e Social Media

- Meta tags otimizadas para Google
- Open Graph para Facebook
- Twitter Cards
- Structured data (em desenvolvimento)
- Sitemap XML (em desenvolvimento)

---

## 🚀 Deploy / Produção

### Checklist para Deploy

- [x] Testar em todos os navegadores principais (Chrome, Safari, Firefox, Edge)
- [x] Validar Safari iOS (fix aplicado em landing.html)
- [x] Verificar responsividade em todos os breakpoints
- [x] Otimizar vídeos e imagens
- [x] Validar meta tags e SEO
- [x] Testar formulários e links
- [ ] Configurar domínio: **cerradomineiro.org**
- [ ] Configurar SSL/HTTPS
- [ ] Setup de servidor (Apache/Nginx)
- [ ] Configurar redirects (www → non-www ou vice-versa)
- [ ] Google Analytics / Tag Manager
- [ ] Sitemap XML e robots.txt
- [ ] Teste de velocidade (Google PageSpeed Insights)

### Arquivos Importantes para Produção

- `landing.html` - Landing page principal (recomendado como index)
- `index.html` - Página alternativa
- `assets/` - Todos os assets (não remover nenhum arquivo)
- `.htaccess` (se Apache) - Para redirects e cache
- `robots.txt` - Para SEO
- `sitemap.xml` - Para SEO

### Configuração do Domínio

1. Apontar DNS do domínio **cerradomineiro.org** para o servidor
2. Configurar certificado SSL (Let's Encrypt recomendado)
3. Testar HTTPS e redirects

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
- 🌐 Website: [cerradomineiro.org](https://cerradomineiro.org)
- 📧 E-mail: comunicacao@cerradomineiro.org
- 📘 Facebook: [@cerradomineirooficial](https://www.facebook.com/cerradomineirooficial/)
- 📷 Instagram: [@cerradomineirooficial](https://www.instagram.com/cerradomineirooficial/)

---

<div align="center">

**Feito com ❤️ e ☕ no Cerrado Mineiro**

</div>
