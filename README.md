# Nexalt

Site institucional da Nexalt em Next.js. Estratégia e desenvolvimento de tecnologia: software sob medida, integração de sistemas, automação e evolução contínua.

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Validação e produção

```sh
npx tsc --noEmit
npm run build
npm start
```

## Estrutura

- `app/page.tsx`: página institucional.
- `app/privacidade/page.tsx`: informações sobre navegação e contato.
- `app/menu-enhancement.tsx`: interação acessível do menu móvel.
- `app/globals.css`: identidade visual e responsividade.
- `app/layout.tsx`: metadados e estrutura global.
- `public/assets/`: logotipos, símbolo e fontes locais com licenças.
- `app/robots.ts` e `app/sitemap.ts`: indexação.

Mantém a estrutura Next.js da publicação existente. As fontes são locais, sem download do Google durante o build. O conteúdo considera uma empresa em lançamento: aplicações são ilustrativas, sem depoimentos ou resultados comerciais fictícios.

## Contato

WhatsApp: https://wa.me/5537984269679. O link prepara uma mensagem editável; não envia automaticamente. Não há formulário, backend de captação ou script de analytics nesta implementação.

## Identidade

Logo, símbolo, Space Grotesk e Inter provenientes da identidade fornecida pela Nexalt. Licenças das fontes em `public/assets/*-OFL.txt`. A imagem de compartilhamento existente foi preservada.
