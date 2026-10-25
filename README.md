# Image Uploader

**Interface web para enviar imagens a uma API e obter o endereço do arquivo armazenado na nuvem.**

![React](https://img.shields.io/badge/React-18-149eca?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4-3178c6?logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-ca4245?logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5a29e4?logo=axios&logoColor=white)
![MIT](https://img.shields.io/badge/Licença-MIT-2ea44f)

## Sobre o projeto

O **Image Uploader** é uma interface construída com React e TypeScript que recebe uma imagem selecionada pelo usuário, envia o arquivo a uma API e exibe o endereço retornado pelo armazenamento em nuvem.

Esta é a parte **front-end** da solução. O recebimento e o armazenamento dos arquivos são responsabilidade da [Image Uploader API](https://github.com/Daniel-M30/image-uploader-api), que integra o Google Cloud Storage.

## Funcionalidades presentes no código

- Seleção de arquivo por botão ou arrastar e soltar (**drag and drop**).
- Envio do arquivo em `multipart/form-data` para `POST /upload`.
- Indicação visual de carregamento durante o envio.
- Tela de sucesso com prévia da imagem e endereço retornado.
- Botão para copiar o link da imagem.
- Notificação quando o envio falha.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
| --- | --- |
| React 18 | Interface e componentes |
| TypeScript 4 | Tipagem |
| Create React App / react-scripts 5 | Servidor de desenvolvimento e build |
| React Router 6 | Navegação entre telas |
| Axios | Requisições à API |
| React Toastify | Mensagens de retorno |
| CSS | Estilização |

## Estrutura do projeto

- `src/pages/InsertImage.tsx` — Seleção e envio de arquivos.
- `src/pages/LoadImage.tsx` — Estado visual de carregamento.
- `src/pages/SuccessLoad.tsx` — Prévia e cópia do link.
- `src/components/DragDrop.tsx` — Interação de arrastar e soltar.
- `src/libs/api.ts` — Cliente Axios configurado para a API.
- `src/styles/` — Estilos da interface.

## Executando localmente

### Pré-requisitos

- Node.js e npm compatíveis com as dependências históricas do projeto (a versão do Node não está fixada).
- [Image Uploader API](https://github.com/Daniel-M30/image-uploader-api) funcionando em `http://localhost:3333`.
- Credenciais de nuvem configuradas **somente na API**, nunca neste front-end.

```bash
git clone https://github.com/Daniel-M30/image-uploader.git
cd image-uploader
npm ci
npm start
```

O servidor de desenvolvimento normalmente disponibiliza a aplicação em `http://localhost:3000`.

A URL da API está definida diretamente em [`src/libs/api.ts`](src/libs/api.ts). Não existe variável de ambiente para trocar esse endereço sem modificar o código.

### Como testar o fluxo manualmente

1. Inicie a API e a interface.
2. Escolha uma imagem de teste JPEG ou PNG sem informações pessoais.
3. Observe a tela de carregamento e, em caso de sucesso, a imagem retornada.
4. Use **Copy Link** para copiar a URL exibida.
5. Interrompa a API e tente enviar outra imagem para observar a notificação de falha.

Esse procedimento é uma sugestão de teste manual; a integração com o Google Cloud não foi executada nesta revisão.

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm start` | Iniciar a aplicação em desenvolvimento |
| `npm run build` | Criar build de produção |
| `npm test` | Executar o comando de testes do Create React App |

O script de testes existe por configuração do framework, mas **não foram identificados arquivos de testes automatizados** na árvore revisada.

## Estado atual e limitações

- A interface depende da API separada e do armazenamento configurado por ela.
- O seletor de arquivos restringe os tipos exibidos, mas isso não substitui validações de segurança no servidor.
- O comportamento de arrastar e soltar deve ser revisado para validar tipos e tamanhos de arquivo.
- O endereço da API está fixo no código.
- Não foram encontrados workflows de CI ou demonstração pública validada.
- As dependências devem ser revisadas antes de uma implantação pública.

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE).

## Autor e contato

Desenvolvido por [Daniel Monteiro](https://github.com/Daniel-M30).

[Conversar sobre um projeto](mailto:dvalerio.monteiro@gmail.com) · [LinkedIn](https://www.linkedin.com/in/dvalerio-monteiro).
