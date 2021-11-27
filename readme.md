# Configurando e usando o webpack

### plugins e suas funcionalidades.

- ts-loader: transforma ts e tsx em js.
- style-loader: trata os estilos.
- css-loader: identifica os arquivos css.
**Atenção:** siga esta ordem: `use: [style-loader,css-loader]`;
**Detalhe** os dois, renderizam o estilo in html... :P
**Uma forma melhor**:

- mini-css-extract-plugin: renderiza os estilos em um arquivo a parte.
**Atenção:** agora é nesta ordem: `use: [MiniCssExtractPlugin.loader,'css-loader']`;

### informações importantes.

Para usar o ts-loader e qualquer outro loader,
será necessário instalar o webpack(nao cli) no projeto...

