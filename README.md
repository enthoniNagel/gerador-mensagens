# Gerador de Mensagens Motivacionais

## Objetivo

Criar um componente que atualiza e exibe uma mensagem inspiradora com base no texto digitado pelo usuário, além de exibir a palavra-chave digitada.

## Descrição

O projeto contém dois componentes React: `GeradorMensagens` e `ExibidorPalavras`. O `GeradorMensagens` permite ao usuário digitar uma palavra-chave e exibe uma mensagem inspiradora relacionada. O `ExibidorPalavras` mostra a palavra-chave digitada em tempo real.

## Instruções

1. **Inicialize o Estado do Componente**

   O estado inicial do componente `GeradorMensagens` deve ter uma propriedade `mensagem` definida como uma string vazia.

2. **Crie o Método `atualizarMensagem`**

   Este método deve atualizar o valor da `mensagem` com base na palavra-chave digitada pelo usuário.

3. **Crie o Componente `ExibidorPalavras`**

   Este componente deve ter um campo de entrada e exibir a palavra-chave digitada em tempo real. Ele deve receber o método `atualizarMensagem` como uma prop e chamá-lo sempre que a entrada mudar.

4. **Renderize o Componente**

   - No componente `GeradorMensagens`, use o `ExibidorPalavras` e passe o método `atualizarMensagem` como uma prop.
   - Exiba a mensagem inspiradora e a palavra-chave digitada.

## Estrutura do Projeto

1. **Criação do Projeto**

   Crie o projeto usando `create-react-app` com um nome em minúsculas:

   ```bash
   npx create-react-app gerador-mensagens
