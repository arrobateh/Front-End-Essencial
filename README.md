# 🇧🇷 Seleção Brasileira — Loja Oficial

Site institucional e de produtos da Seleção Brasileira de Futebol, desenvolvido como projeto final da disciplina de **Front-End Essencial** no programa de Residência em TIC/Software do **Serratec**.

---

## 📋 Sobre o Projeto

O projeto simula uma loja online de camisas da Seleção Brasileira, com páginas de apresentação da equipe, histórico do time, formulário de cadastro e catálogo de produtos. Foi desenvolvido em grupo, com foco em boas práticas de versionamento e organização de código.

---

## 👥 Equipe

| Nome | Responsabilidades |
|------|------------------|
| Breno França Magrani | HTML e CSS da página Sobre |
| Vinicius de Souza Lamas | HTML e CSS das páginas Home e História, JavaScript do carrossel e modelo de Header/Footer |
| Vitor Ribeiro | HTML e CSS das páginas de produtos individuais |
| Yan Martins de Oliveira | HTML e CSS da página Camisas, modelo de Header/Footer, organização de pastas e modularização dos CSS's |
| Wallace Ildefonso | HTML e CSS da página Contato e implementação do Bootstrap no projeto |

---

## 🗂️ Estrutura de Pastas

```
Front-End-Essencial/
├── index.html              # Página Home (raiz)
├── assets/
│   ├── banners/            # Imagens do carrossel
│   ├── camisas/
│   │   ├── camisas_frente/ # Fotos frontais das camisas
│   │   └── camisas_costas/ # Fotos traseiras das camisas
│   ├── devs/               # Fotos dos integrantes
│   ├── icones/             # Ícones da interface
│   └── logo/               # Logotipo do site
├── css/
│   ├── style.css           # Arquivo principal (importa todos os outros)
│   ├── global/             # Estilos globais: header, footer, componentes e reset anti-Bootstrap
│   ├── home/               # Estilos da página Home
│   ├── camisas/            # Estilos da página de Camisas
│   ├── contato/            # Estilos da página de Contato
│   ├── historia/           # Estilos da página de História
│   ├── sobre/              # Estilos da página Sobre
│   └── produtos/           # Estilos das páginas de produto individual
├── pages/
│   ├── sobre.html          # Apresentação da equipe
│   ├── contato.html        # Formulário de cadastro
│   ├── historia.html       # História da Seleção
│   ├── camisas.html        # Catálogo de camisas
│   ├── camisa_amarela.html # Produto: Camisa Amarela
│   ├── camisa_azul.html    # Produto: Camisa Azul
│   ├── camisa_branca.html  # Produto: Camisa Branca
│   ├── camisa_retro.html   # Produto: Camisa Retrô
│   └── camisa_treino.html  # Produto: Camisa de Treino
└── scripts/
    └── script.js           # Carrossel de banners (manipulação DOM)
```

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com `@import` modularizado)
- **JavaScript** (ES6+)
- **Bootstrap 5** (via CDN na página de Contato, com reset de alta especificidade em `css/global/reset.css` para neutralizar o Reboot)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117)

---

## ✅ Funcionalidades

- Carrossel de banners animado via JavaScript
- Catálogo de camisas com página individual por produto
- Formulário de cadastro com campos de nome, CPF, telefone, endereço, e-mail e estado
- Página Sobre com foto e descrição de cada integrante
- Página de História da Seleção Brasileira
- Layout responsivo com header e footer globais

---

## ⚙️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/arrobateh/Front-End-Essencial.git
   ```
2. Abra o arquivo `index.html` em seu navegador, ou utilize a extensão **Live Server** no VS Code para servir o projeto localmente.

> O projeto não requer instalação de dependências via `npm`. A página de Contato carrega o Bootstrap via CDN, portanto requer conexão com a internet para exibir o botão corretamente.

---

## 📝 Padrão de Commits

O projeto adota **Conventional Commits**:

```
feat: adicionar página de contato
fix: corrigir caminho das imagens no index
style: ajustar espaçamento do header
refactor: reorganizar pastas de assets
```

---

## 🏫 Instituições

Projeto desenvolvido no âmbito da **Residência em TIC/Software** do [Serratec](https://serratec.org/), em parceria com o [SENAI](https://www.senai.portaldaindustria.com.br/).