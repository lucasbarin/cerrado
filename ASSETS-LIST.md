# 📦 ASSETS NECESSÁRIOS - Projeto RCM Cerrado Mineiro

## Estrutura de Pastas
```
assets/
├── img/
│   ├── hero/
│   ├── sections/
│   └── branding/
└── svg/
    └── logo/
```

---

## 🎯 IMAGENS PARA EXPORTAR

### 1. **HERO - Background Principal**
**Arquivo:** `assets/img/hero/hero-bg.jpg`
- **Dimensões:** 2560×1636px (1920px real @ 96 DPI)
- **Formato:** JPG (qualidade 85%)
- **Descrição:** Imagem principal do hero com café/plantação
- **Localização no HTML:** `<section id="hero" class="rcm-hero">`
- **Observações:** Deve ter contraste suficiente para texto branco sobreposto

---

### 2. **SEÇÃO JORNADA - Imagem Full Width**
**Arquivo:** `assets/img/sections/jornada-full.jpg`
- **Dimensões:** 2560×1487px
- **Formato:** JPG (qualidade 85%)
- **Descrição:** Imagem intermediária após seção "A Jornada"
- **Localização no HTML:** Primeira `<section class="rcm-section-image">`
- **Observações:** Proporção 1.72:1

---

### 3. **REBRANDING - Showcase Item 1**
**Arquivo:** `assets/img/branding/logo-evolution.png`
- **Dimensões:** 600×800px
- **Formato:** PNG (transparência se necessário)
- **Descrição:** Evolução do logotipo ou aplicação da marca
- **Localização no HTML:** Seção rebranding, primeira div `.rcm-brand-item`
- **Observações:** Imagem vertical

---

### 4. **REBRANDING - Showcase Item 2**
**Arquivo:** `assets/img/branding/brand-system.png`
- **Dimensões:** 600×800px
- **Formato:** PNG
- **Descrição:** Sistema de identidade visual/elementos da marca
- **Localização no HTML:** Seção rebranding, segunda div `.rcm-brand-item`

---

### 5. **REBRANDING - Showcase Item 3**
**Arquivo:** `assets/img/branding/applications.png`
- **Dimensões:** 600×800px
- **Formato:** PNG
- **Descrição:** Aplicações da marca ou mockups
- **Localização no HTML:** Seção rebranding, terceira div `.rcm-brand-item`

---

### 6. **SEÇÃO REBRANDING - Imagem Full Width 2**
**Arquivo:** `assets/img/sections/rebranding-full.jpg`
- **Dimensões:** 2560×1665px
- **Formato:** JPG (qualidade 85%)
- **Descrição:** Imagem grande após seção de rebranding
- **Localização no HTML:** Segunda `<section class="rcm-section-image">`
- **Observações:** Proporção 1.54:1

---

## 🎨 LOGOS E ÍCONES

### 7. **Logo RCM - Navegação**
**Arquivo:** `assets/svg/logo/logo-rcm.svg`
- **Formato:** SVG (vetor)
- **Dimensões:** Flexível (altura ~40px)
- **Descrição:** Logotipo da Região do Cerrado Mineiro
- **Localização no HTML:** `.rcm-nav-logo` (pode ser texto ou imagem)
- **Alternativa:** Se não puder exportar como SVG, usar o texto "Região do Cerrado Mineiro"

---

### 8. **Logo RCM - Footer**
**Arquivo:** `assets/svg/logo/logo-rcm-footer.svg`
- **Formato:** SVG (vetor)
- **Dimensões:** Flexível (altura ~80px)
- **Descrição:** Logotipo para o rodapé (pode ser o mesmo do header)
- **Localização no HTML:** `.rcm-footer-logo`
- **Alternativa:** Usar o texto estilizado como está no HTML

---

## 🔄 SUBSTITUIÇÕES NO HTML

Após exportar os assets, substitua os placeholders no HTML:

### Hero Background:
```html
<!-- ANTES: -->
<div class="rcm-hero-placeholder">HERO BACKGROUND IMAGE</div>

<!-- DEPOIS: -->
<img src="assets/img/hero/hero-bg.jpg" alt="Região do Cerrado Mineiro" style="width:100%; height:100%; object-fit:cover;">
```

### Imagens Full Width:
```html
<!-- ANTES: -->
<div class="rcm-image-placeholder">IMAGEM FULL WIDTH - SEÇÃO INTERMEDIÁRIA</div>

<!-- DEPOIS: -->
<img src="assets/img/sections/jornada-full.jpg" alt="Cerrado Mineiro" style="width:100%; height:100%; object-fit:cover;">
```

### Branding Showcase:
```html
<!-- ANTES: -->
<div class="rcm-brand-placeholder">LOGO PLACEHOLDER</div>

<!-- DEPOIS: -->
<img src="assets/img/branding/logo-evolution.png" alt="Evolução da Marca" style="width:100%; height:auto;">
```

---

## 📋 CHECKLIST DE EXPORTAÇÃO

- [ ] Hero background (2560×1636px JPG)
- [ ] Seção Jornada full (2560×1487px JPG)
- [ ] Branding item 1 (600×800px PNG)
- [ ] Branding item 2 (600×800px PNG)
- [ ] Branding item 3 (600×800px PNG)
- [ ] Rebranding full (2560×1665px JPG)
- [ ] Logo SVG (opcional - pode usar texto)
- [ ] Logo Footer SVG (opcional - pode usar texto)

---

## 💡 DICAS DE EXPORTAÇÃO

### Adobe Illustrator / Photoshop:
1. **JPGs:** Salvar para Web → JPEG → Qualidade 85%
2. **PNGs:** Salvar para Web → PNG-24 (se precisar transparência)
3. **SVGs:** Arquivo → Salvar Como → SVG → Minimizado

### Figma / XD:
1. Selecionar elemento → Exportar → Definir escala e formato
2. Para imagens retina: exportar em @2x e depois redimensionar

### Otimização:
- Usar TinyPNG ou ImageOptim para comprimir sem perda de qualidade
- SVGs: usar SVGOMG (https://jakearchibald.github.io/svgomg/)

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Exportar todas as imagens listadas acima
2. ✅ Colocar nas pastas corretas dentro de `assets/`
3. ✅ Substituir os placeholders no `index.html`
4. ✅ Testar no browser (localhost ou WAMP)
5. ✅ Ajustar responsividade mobile se necessário

---

## 📞 OBSERVAÇÕES

- **Backgrounds escuros:** Certifique-se que as imagens do hero e D.O. Có suportem texto branco
- **Cores:** Use as cores do projeto (verde #1DB57A, cream #F7F4EE, etc.)
- **Qualidade:** Priorize qualidade visual, mas mantenha arquivos < 500KB quando possível
- **Alt texts:** Adicione textos alternativos descritivos nas imagens para acessibilidade

---

**Estrutura HTML está pronta! Basta adicionar as imagens reais.**
