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
