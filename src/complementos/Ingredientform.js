function IngredientForm(){
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
}
export default IngredientForm;


