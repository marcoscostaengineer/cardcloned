# Verificador de Cartão Clonado - Projeto Educacional

## Sobre o Projeto
Este projeto foi desenvolvido exclusivamente para fins de estudo e aprendizado sobre a integração entre HTML, CSS, JavaScript e PHP. O tema do "Verificador de Cartão Clonado" é uma sátira aos golpes aplicados na internet, demonstrando como informações sensíveis podem ser manipuladas em aplicações web.

**IMPORTANTE:** Este projeto deve ser utilizado apenas com dados fictícios e para propósitos educacionais. O uso indevido ou para fins maliciosos é estritamente proibido.

## Tecnologias Utilizadas
- **HTML & CSS**: Estrutura e estilização do formulário com design moderno e responsivo.
- **JavaScript (AJAX)**: Comunicação assíncrona com o servidor e aplicação de máscaras nos campos de entrada.
- **PHP**: Processamento dos dados e armazenamento em um arquivo `.txt`.

## Como Funciona
1. O usuário insere os dados no formulário.
2. O JavaScript envia os dados via AJAX para o servidor PHP.
3. O PHP verifica se os dados já estão armazenados no arquivo `dados.txt`.
4. Se os dados forem encontrados no arquivo, retorna "⚠️ SEU CARTÃO FOI CLONADO!" em um alerta destacado.
5. Se não forem encontrados, retorna "✅ SEU CARTÃO NÃO FOI CLONADO" e salva os dados no arquivo.

## Como Executar o Projeto
1. Faça o download do projeto.
2. Extraia os arquivos em seu servidor local (XAMPP, WAMP, ou outro servidor PHP).
3. Certifique-se de que o servidor Apache e o PHP estão rodando.
4. Acesse o `index.html` através do navegador.
5. Teste a aplicação utilizando **somente dados fictícios**.

## Estrutura do Projeto
```
projeto/
├── index.html      # Página principal com o formulário
├── style.css       # Estilização do formulário
├── script.js       # Código JavaScript para AJAX e máscaras
├── process.php     # Código PHP para processar os dados
└── dados.txt       # Armazena os dados já verificados
```

## Aviso Legal
Este projeto tem apenas propósitos educacionais. O autor não se responsabiliza por qualquer uso inadequado deste código. Nunca insira informações reais, como números de cartão de crédito, CPF ou outros dados pessoais.

Divirta-se aprendendo, mas sempre de forma ética!

