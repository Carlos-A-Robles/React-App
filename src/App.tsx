import ListaGrupo from "./componentes/ListaGrupo";

function App() {
  let cosas = ["San Juan", "Aguadilla", "Toa Baja", "Ponce", "Mayaguez"];

  const manejaCosaSeleccionada = (cosa: string) => {
    console.log(cosa);
  };
  return (
    <div>
      <ListaGrupo
        cosas={cosas}
        heading="Ciudades"
        onCosaSeleccionada={manejaCosaSeleccionada}
      />
    </div>
  );
}

export default App;
