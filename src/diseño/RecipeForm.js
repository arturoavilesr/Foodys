import React, { Component } from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {


  render() {
    return (
      <div>
        <h2>Formulario de Recetas</h2>
        <form className="recipe-form" onSubmit={this.handleSubmit}>
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
