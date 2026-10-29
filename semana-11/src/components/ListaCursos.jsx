export default function ListaCursos({ cursos, onSeleccionar }) {
  if (cursos.length === 0) {
    return (
      <p className="sin-resultados">
        No se encontraron cursos. Intenta con otro nombre.
      </p>
    );
  }

  return (
    <div className="lista-cursos">
      {cursos.map((curso) => (
        <article className="tarjeta" key={curso.id}>
          <h3>{curso.nombre}</h3>
          <p>{curso.descripcion}</p>
          <button onClick={() => onSeleccionar(curso)}>
            Seleccionar curso
          </button>
        </article>
      ))}
    </div>
  );
}
