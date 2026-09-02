# Portfólio — Dênis Luft

Site pessoal e portfólio, em React + TypeScript, com conteúdo em português e inglês.

**No ar:** https://denisluft8.github.io/portfolio-denisluft/

## Rodando localmente

```bash
yarn install
yarn dev
```

| Comando | O que faz |
| --- | --- |
| `yarn dev` | Servidor de desenvolvimento |
| `yarn build` | Checagem de tipos + build de produção em `dist/` |
| `yarn preview` | Serve o `dist/` já construído |
| `yarn deploy` | Publica o `dist/` no GitHub Pages |

## Formulário de contato

O formulário não envia e-mail: ele valida os campos, monta a mensagem e abre a
conversa no WhatsApp. **Não há credencial nenhuma no cliente.**

A versão anterior usava EmailJS, mas o plano gratuito não oferece restrição por
domínio (é recurso pago, a partir de US$ 9/mês). Sem essa trava, o service id, o
template id e a public key ficam legíveis no JavaScript publicado e qualquer
pessoa pode gastar a cota mensal da conta — deixando o formulário fora do ar
para quem realmente quer falar com você.

Se um dia o envio por e-mail for necessário, o caminho seguro é um backend
mínimo (por exemplo um Cloudflare Worker) guardando a chave como secret, nunca
uma chave embutida no front.

## Estrutura

```
src/
├── assets/          imagens e vídeos (projetos em assets/projects/)
├── components/      Header, ProjectCard, Reveal, LanguageToggle, ui/primitives
├── data/            projects.ts, services.ts, skills.ts, contact.ts, emailjs.ts
├── hooks/           useTranslation, useScrollDirection, useReveal, useTypewriter,
│                    useActiveSection
├── i18n/            LanguageContext + pt.json / en.json
├── sections/        Hero, Services, Projects, About, Skills, Contact, Footer
└── styles/          theme.ts (tokens) + globalStyles.ts
```

## Como alterar o conteúdo

**Adicionar um projeto** — coloque a imagem (e o vídeo, opcional) em
`src/assets/projects/`, acrescente o item em `src/data/projects.ts` e a entrada
correspondente em `projectList` nos **dois** arquivos de tradução. Nenhum JSX
muda.

**Textos** — tudo vive em `src/i18n/pt.json` e `src/i18n/en.json`. O arquivo PT
é a fonte da verdade dos tipos: uma chave que exista em um e não no outro quebra
o `yarn build`.

**Cores, fontes e espaçamentos** — `src/styles/theme.ts`.

**Serviços e stack** — `src/data/services.ts` e `src/data/skills.ts`.

## Mídia

Os vídeos de preview são comprimidos antes de entrar no repositório (14 s, 960 px
de largura, CRF 30, sem áudio). Isso levou os assets de 92 MB para 5,7 MB. Ao
adicionar um vídeo novo:

```bash
ffmpeg -ss 0.5 -t 14 -i entrada.mp4 \
  -vf "scale=960:-2,fps=24" -c:v libx264 -profile:v main -crf 30 -preset slow \
  -pix_fmt yuv420p -movflags +faststart -an src/assets/projects/saida.mp4
```

### Trocar a foto do "Sobre"

`scripts/crop-portrait.swift` detecta o rosto com o framework Vision e recorta
um quadrado já enquadrado (boné/cabelo inteiros acima, ombros abaixo, mais
espaço na direção do olhar). Roda sem instalar nada — só precisa do Xcode
Command Line Tools:

```bash
# argumentos: entrada  saida  tamanho  proporcaoDoRosto  linhaDosOlhos  deslocamentoX
swift scripts/crop-portrait.swift ~/foto.jpg src/assets/projects/profile.jpg 560 0.34 0.48 0.02
```

Os três últimos argumentos são opcionais e ajustam o enquadramento:
`proporcaoDoRosto` menor afasta a câmera, `linhaDosOlhos` 0.5 põe os olhos no
meio vertical, e `deslocamentoX` positivo empurra o rosto para a esquerda. Os
valores acima são os que geraram a foto atual.

Ele imprime as coordenadas do rosto e do recorte. Fazer isso à mão com
`sips --cropOffset` é um convite ao erro: o offset é relativo ao centro e a
direção não é óbvia.

### Preview de um site que já está no ar

Todos os vídeos de hover são **gravações automatizadas do site no ar**, não
capturas de tela antigas. O procedimento: `puppeteer-core` dirige o Chrome já
instalado (sem baixar browser), captura um frame por passo de um roteiro, e o
`ffmpeg` monta os frames a 20–24 fps com o perfil acima.

O roteiro é uma timeline declarativa — cada passo consome N frames:

- **Landing pages** (Low Carbon, Analog Nostalgic, Decaltak, FortMix): scroll
  interpolado do topo ao fim, com pausa nas pontas para o loop não saltar.
- **Telas com funcionalidade**: além do scroll, o roteiro interage — filtra uma
  busca, preenche um formulário, publica um comentário.

Dois cuidados aprendidos na prática:

1. **Digite com o teclado do browser** (`keyboard.type`), não setando `value` no
   DOM. Inputs controlados por React ignoram atribuição direta e o campo fica
   vazio no vídeo. A exceção é `<input type="date">`, onde clicar posiciona o
   cursor num segmento arbitrário — nesse caso use o setter nativo do
   `HTMLInputElement` seguido de um evento `input`.
2. **Nunca envie formulários** em site de cliente. Preencher demonstra a
   funcionalidade; submeter gera um lead ou e-mail real.

## Deploy

`yarn deploy` publica no GitHub Pages. O `base` em `vite.config.ts` está como
`/portfolio-denisluft/`; com domínio próprio, troque para `/` e atualize as URLs
absolutas em `index.html` (canonical e Open Graph).
