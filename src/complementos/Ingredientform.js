import React, { Component } from 'react';

class IngredientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: ''
    };
  }

  handleChange = (e) => {
    this.setState({ ingredient: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar el ingrediente al servidor o realizar alguna acción con él.
    console.log('Ingrediente ingresado:', this.state.ingredient);
    this.setState({ ingredient: '' });
  }

  render() {
    return (
      <div>
        <h2>Formulario de Ingredientes</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Ingrediente:
            <input type="text" value={this.state.ingredient} onChange={this.handleChange} />
          </label>
          <button type="submit">Agregar Ingrediente</button>
        </form>
      </div>
    );
  }
}

export default IngredientForm;


