import React, { Component } from 'react';
import './RecipeForm.css'; 

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: [
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' }
      ]
    };
  }

  handleChange = (e, index) => {
    const { name, value } = e.target;
    const newIngredients = [...this.state.ingredients];
    newIngredients[index][name] = value;

    this.setState({ ingredients: newIngredients });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Receta ingresada:', this.state);
 
    this.setState({
      title: '',
      ingredients: [
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' },
        { name: '', amount: '', unit: '' }
      ]
    });
  }

  render() {
    return (
      <div className="recipe-form">
        <h2>Receta</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Título de la Receta:
            <input type="text" name="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          </label>

          <h3>Ingredientes</h3>

          {this.state.ingredients.map((ingredient, index) => (
            <div key={index}>
              <label>
                Nombre del Ingrediente:
                <input type="text" name="name" value={ingredient.name} onChange={(e) => this.handleChange(e, index)} />
              </label>
              <label>
                Cantidad:
                <input type="text" name="amount" value={ingredient.amount} onChange={(e) => this.handleChange(e, index)} />
              </label>
              <label>
                Unidad:
                <select name="unit" value={ingredient.unit} onChange={(e) => this.handleChange(e, index)}>
                  <option value="">Seleccionar</option>
                  <option value="kg">kg</option>
                  <option value="pzas">pzas</option>
                </select>
              </label>
            </div>
          ))}

          <button type="submit">Agregar Receta</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;

