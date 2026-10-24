# Image Uploader

Interface web para selecionar uma imagem, enviá-la a uma API e visualizar o endereço retornado pelo armazenamento em nuvem.

O projeto permite explorar um fluxo comum em catálogos e aplicações com mídia: escolher um arquivo, acompanhar a tela de envio e copiar o link da imagem.

## Funcionalidades presentes no código

- Seleção de imagens pelo computador ou por arrastar e soltar.
- Envio por `multipart/form-data` para `POST /upload`.
- Tela de carregamento durante o envio.
- Exibição da imagem e cópia do endereço retornado.
- Mensagem de erro quando o envio falha.

A integração está implementada com a [Image Uploader API](https://github.com/Daniel-M30/image-uploader-api), que utiliza Google Cloud Storage.

## Tecnologias

React 18, TypeScript, React Router, Axios, React Toastify e Create React App.

## Executar localmente

### Pré-requisitos

- Node.js e npm compatíveis com as dependências do projeto. O repositório não fixa uma versão de Node.js.
- A [API](https://github.com/Daniel-M30/image-uploader-api) configurada e iniciada em `http://localhost:3333`.

```sh
git clone https://github.com/Daniel-M30/image-uploader.git
cd image-uploader
npm ci
npm start
```

Abra o endereço informado pelo servidor de desenvolvimento, normalmente `http://localhost:3000`.

A URL da API está definida em [src/libs/api.ts](src/libs/api.ts). O código atual não lê essa URL de uma variável de ambiente.

## Como explorar

1. Inicie a API e a interface.
2. Selecione uma imagem de teste JPEG ou PNG sem dados pessoais.
3. Observe a tela de envio e, em caso de sucesso, a imagem retornada.
4. Use **Copy Link** para copiar o endereço.
5. Interrompa a API e tente outro envio para observar a mensagem de erro.

Esse roteiro é uma sugestão de verificação manual; não indica que a integração com a nuvem foi validada nesta revisão de documentação.

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm start` | Iniciar o servidor de desenvolvimento. |
| `npm run build` | Gerar o build da interface. |
| `npm test` | Executar o comando de testes configurado pelo Create React App. |

A existência do comando de testes não comprova cobertura: não há arquivos de teste na árvore revisada.

## Estrutura principal

- `src/pages/`: seleção, carregamento e resultado do envio.
- `src/components/`: componentes da interface, incluindo arrastar e soltar.
- `src/libs/api.ts`: conexão com a API.
- `src/styles/`: estilos da aplicação.

## Escopo e limitações

Este repositório contém a interface; o armazenamento depende da API e da configuração do Google Cloud. O código foi documentado por leitura estática, sem execução do upload ou validação de uma demonstração pública.

As dependências e a configuração de ambiente precisam ser verificadas antes de uma implantação. Credenciais do Google Cloud pertencem à configuração privada da API e não devem ser adicionadas à interface.

## Licença e contato

Consulte [LICENSE](LICENSE).

Desenvolvido por [Daniel Monteiro](https://github.com/Daniel-M30).
[Converse sobre um projeto](mailto:dvalerio.monteiro@gmail.com) · [LinkedIn](https://www.linkedin.com/in/dvalerio-monteiro).
