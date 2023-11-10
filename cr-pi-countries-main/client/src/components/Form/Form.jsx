import { useState } from "react";
import { useSelector } from "react-redux";

export default function Form() {
  const paises = useSelector((state) => state.allCountries);
  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    // Aquí puedes realizar acciones como enviar los datos al servidor.
    fetch("http://localhost:3001/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Actividad creada con éxito:", data);
        // Puedes redirigir al usuario a otra página después de la creación si es necesario
        // history.push("/otra-ruta");
      })
      .catch((error) => {
        console.error("Error al crear la actividad:", error);
      });
  }
  function handleChangePais(event) {
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]:
        name === "countries"
          ? value.split(",").map((country) => country.trim())
          : value,
    }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            onChange={handleChange}
            value={input.value}
            name="nombre"
            style={{ textTransform: "capitalize" }}
          />
        </div>
        <div>
          <label>Dificultad</label>
          <input
            onChange={handleChange}
            value={input.value}
            name="dificultad"
          />
        </div>
        <div>
          <label>Duracion</label>
          <input onChange={handleChange} value={input.value} name="duracion" />
        </div>
        <div>
          <label>Temporada</label>
          <input
            onChange={handleChange}
            value={input.value}
            name="temporada"
            style={{ textTransform: "capitalize" }}
          />
        </div>
        <div>
          <label>Paises (separados por comas)</label>
          <input
            onChange={handleChangePais}
            value={input.value}
            name="countries"
            style={{ textTransform: "capitalize" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
