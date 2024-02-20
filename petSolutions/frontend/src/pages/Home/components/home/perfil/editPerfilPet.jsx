import React, { Component } from 'react';
import '../perfil/editPerfilPet.scss'

class EditPerfilPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idade: '',
      raca: '',
      peso: '',
      ultimaConsulta: '',
      obs: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, por exemplo, enviá-los para o servidor
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Idade:
            <input
              type="text"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Raça:
            <input
              type="text"
              name="raca"
              value={this.state.raca}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Peso:
            <input
              type="text"
              name="peso"
              value={this.state.peso}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Última Consulta:
            <input
              type="date"
              name="ultimaConsulta"
              value={this.state.ultimaConsulta}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Observações:
            <textarea
              name="obs"
              value={this.state.obs}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default EditPerfilPet;