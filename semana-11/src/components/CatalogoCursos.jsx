import { useState } from "react";
import ListaCursos from "./ListaCursos";
import Reloj from "./Reloj";

const cursosIniciales = [
  {
    id: 1,
    nombre: "JavaScript",
    descripcion: "Aprende a crear páginas web interactivas."
  },
  {
    id: 2,
    nombre: "HTML y CSS",
    descripcion: "Aprende a estructurar y diseñar páginas web."
  },
  {
    id: 3,
    nombre: "Python",
    descripcion: "Conoce los fundamentos de la programación."
  },
  {
    id: 4,
    nombre: "React",
    descripcion: "Crea interfaces web mediante componentes."
  },
  {
    id: 5,
    nombre: "Bases de datos",
    descripcion: "Aprende a organizar y consultar información."
  }
];

export default function CatalogoCursos() {
  const [busqueda, setBusqueda] = useState("");
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const cursosFiltrados = cursosIniciales.filter((curso) =>
    curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  function manejarBusqueda(evento) {
    setBusqueda(evento.target.value);
    setCursoSeleccionado(null);
  }

  function seleccionarCurso(curso) {
    setCursoSeleccionado(curso);
  }

  return (
    <main className="contenedor">
      <h1>Catálogo interactivo de cursos</h1>
      <p className="subtitulo">
        Explora, busca y selecciona tu próximo curso.
      </p>
      <Reloj />

      <input
        type="text"
        placeholder="Buscar un curso..."
        value={busqueda}
        onChange={manejarBusqueda}
        aria-label="Buscar cursos"
      />

      <p className="contador">Cursos encontrados: {cursosFiltrados.length}</p>

      <ListaCursos cursos={cursosFiltrados} onSeleccionar={seleccionarCurso} />

      {cursoSeleccionado && (
        <section className="seleccion">
          <h2>Curso seleccionado</h2>
          <p>
            Has seleccionado: <strong>{cursoSeleccionado.nombre}</strong>
          </p>
          <p>{cursoSeleccionado.descripcion}</p>
          <button onClick={() => setCursoSeleccionado(null)}>
            Quitar selección
          </button>
        </section>
      )}
    </main>
  );
}
