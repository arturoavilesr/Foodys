class IngredientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cost: '',
      unit: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ingrediente ingresado:', this.state);
    // Aquí puedes realizar acciones adicionales con el ingrediente
    this.setState({ name: '', cost: '', unit: '' });
  }

  render() {
    return (
      <div>
        <h2>Formulario de Ingredientes</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre del Ingrediente:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
  Costo:
            <input type="text" name="cost" value={this.state.cost} onChange={this.handleChange} />
          </label>
          <label>
            Unidad:
            <select name="unit" value={this.state.unit} onChange={this.handleChange}>
              <option value="">Seleccionar</option>
              <option value="kg">kg</option>
              <option value="unidad">unidad</option>
              {/* Otras unidades podrían ser agregadas aquí */}
            </select>
