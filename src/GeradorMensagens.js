import React, { Component } from 'react';

class GeradorMensagens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagem: ''
    };
    this.atualizarMensagem = this.atualizarMensagem.bind(this);
  }

  atualizarMensagem(e) {
    const palavrasChave = {
      'sucesso': 'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
      'coragem': 'A coragem não é a ausência do medo, mas o triunfo sobre ele.',
      'dedicação': 'A dedicação é a chave para alcançar qualquer objetivo.',
      'felicidade': 'A felicidade não é algo pronto. Ela vem de suas próprias ações.'
    };

    const palavra = e.target.value.toLowerCase();
    this.setState({
      mensagem: palavrasChave[palavra] || 'Digite uma palavra-chave para receber uma mensagem inspiradora.'
    });
  }

  render() {
    return (
      <div>
        <h2>Gerador de Mensagens Motivacionais</h2>
        <input
          type='text'
          placeholder='Digite uma palavra-chave'
          onChange={this.atualizarMensagem}
        />
        <p>{this.state.mensagem}</p>
      </div>
    );
  }
}

export default GeradorMensagens;
