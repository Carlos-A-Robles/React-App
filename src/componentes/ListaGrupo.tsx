import { Fragment, useState } from "react";

interface Adorno {
  cosas: string[];
  heading: string;
  // (cosa: string) => void
  onCosaSeleccionada: (cosa: string) => void;
}

function ListaGrupo({ cosas, heading, onCosaSeleccionada }: Adorno) {
  //Hook
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(-1);

  //EventHandler, called event a MouseEvent through TypeScript

  return (
    <Fragment>
      <h1>{heading}</h1>
      {cosas.length === 0 && <p>No se consiguieron cosas.</p>}
      <ul className="list-group">
        {cosas.map((cosa, index) => (
          <li
            className={
              indiceSeleccionado === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={cosa}
            onClick={() => {
              setIndiceSeleccionado(index);
              onCosaSeleccionada(cosa);
            }}
          >
            {cosa}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListaGrupo;
