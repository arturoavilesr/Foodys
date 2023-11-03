import React, { Component } from 'react';
import './IngredientForm.css'; 

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
   
    console.log('Ingrediente ingresado:', this.state.ingredient);
    this.setState({ ingredient: '' });
  }

  render() {
    return (
      <div className="ingredient-form"> {}
        <h2>Formulario de Ingredientes</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Ingrediente:
            <input type="text" value={this.state.ingredient} onChange={this.handleChange} className="input-field" /> {/* Aplicar la clase para el input */}
          </label>
          <button type="submit" className="submit-button">Agregar Ingrediente</button> {/* Aplicar la clase para el botón */}
        </form>
      </div>
    );
  }
}

export default IngredientForm;
