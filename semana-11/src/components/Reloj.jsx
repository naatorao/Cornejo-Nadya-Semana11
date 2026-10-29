import { useEffect, useState } from "react";

export default function Reloj() {
  const [mostrarHora, setMostrarHora] = useState(false);
  const [horaActual, setHoraActual] = useState("");

  function obtenerHora() {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
  }

  useEffect(() => {
    if (!mostrarHora) return undefined;

    const intervalo = setInterval(
      () => setHoraActual(obtenerHora()),
      1000
    );
    return () => clearInterval(intervalo);
  }, [mostrarHora]);

  function alternarHora() {
    if (!mostrarHora) {
      setHoraActual(obtenerHora());
    }
    setMostrarHora((visible) => !visible);
  }

  return (
    <div className="reloj">
      <button onClick={alternarHora}>
        {mostrarHora ? "Ocultar hora" : "Mostrar hora"}
      </button>
      {mostrarHora && (
        <p aria-live="off">
          Hora actual: <time>{horaActual}</time>
        </p>
      )}
    </div>
  );
}
