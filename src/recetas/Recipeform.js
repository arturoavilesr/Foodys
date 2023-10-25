import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      instructions: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la receta al servidor o realizar alguna acción con ella.
    console.log('Receta ingresada:', this.state);
    this.setState({ title: '', ingredients: '', instructions: '' });
  }

  render() {
    return (
      <div>
        <h2>Formulario de Recetas</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Título de la Receta:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Ingredientes:
            <textarea name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
          </label>
          <label>
            Instrucciones:
            <textarea name="instructions" value={this.state.instructions} onChange={this.handleChange} />
          </label>
          <button type="submit">Agregar Receta</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
