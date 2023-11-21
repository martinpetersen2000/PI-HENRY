import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import Select from "react-select";
import style from "./Form.module.css";

export default function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const paises = useSelector((state) => state.allCountries);

  // console.log(paises);
  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: "",
  });

  function validate(input) {
    let errors = {};

    if (!input.nombre) {
      errors.nombre = "Debes introducir un nombre";
    } else {
      errors.nombre = "";
    }
    if (!input.dificultad) {
      errors.dificultad = "Debes introducir un nivel de dificultad";
    } else {
      errors.dificultad = "";
    }
    // if (!input.duracion) {
    //   errors.duracion = "Debes introducir un tiempo de duracion";
    // } else {
    //   errors.duracion = "";
    // }
    if (!input.temporada) {
      errors.temporada = "Debes introducir una temporada";
    } else {
      errors.temporada = "";
    }
    if (!input.countries) {
      errors.countries = "Debes seleccionar uno o mas países";
    } else {
      errors.countries = "";
    }
    setErrors(errors);
    // return errors;
  }

  const temporadas = ["Verano", "Invierno", "Primavera", "Otoño"];
  const dificultades = [1, 2, 3, 4, 5];

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    validate({ ...input, [event.target.name]: event.target.value });
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

  // function handleChangePais(selectedOption) {
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     countries: selectedOption.map((option) => option.value),
  //   }));
  // }
  const handleSelect = (e) => {
    if (input.countries.length === 10) {
      window.alert("Your new activity only can have 10 countries");
    } else if (input.countries.includes(e.target.value)) {
      window.alert("You can't choose the same country more than once");
    } else {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  };
  const handleRemove = (e) => {
    setInput({
      ...input,
      countries: input.countries.filter((pais) => pais !== e.target.value),
    });
  };
  return (
    <div className={style.conteiner}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.conetedorInput}>
          <label className={style.label}>Nombre</label>
          <input
            className={style.input}
            required="true"
            onChange={handleChange}
            value={input.value}
            name="nombre"
            style={{ textTransform: "capitalize" }}
          />
          <span>{errors.nombre}</span>
        </div>

        <label className={style.label}>Dificultad</label>
        <div className={style.conetedorInputDifi}>
          <br />
          {dificultades.map((difi) => (
            <div className={style.contenedorTemporadas} key={difi}>
              <input
                className={style.inputTemporada}
                type="radio"
                name="dificultad"
                value={difi}
                checked={input.dificultad.includes(difi)}
                onChange={handleChange}
              />
              <label className={style.labelOpcion}>{difi}</label>
            </div>
          ))}
        </div>

        <div className={style.conetedorInput}>
          <label className={style.label}>Duracion</label>
          <input
            type="time"
            className={style.inputTime}
            required="true"
            onChange={handleChange}
            value={input.value}
            name="duracion"
          />
        </div>
        <div className={style.conetedorInputTemp}>
          <label className={style.labelTemp}>Temporada</label>
          <br />
          {temporadas.map((temporada) => (
            <div className={style.contenedorTemporadas} key={temporada}>
              <input
                className={style.inputTemporada}
                type="radio"
                name="temporada"
                value={temporada}
                checked={input.temporada.includes(temporada)}
                onChange={handleChange}
              />
              <label className={style.labelOpcion}>{temporada}</label>
            </div>
          ))}
        </div>
        <div className={style.conetedorInput}>
          <label className={style.label}>Paises</label>
          <select
            className={style.selectPaises}
            name=""
            id=""
            onChange={handleSelect}
          >
            {paises.map((pais) => {
              return (
                <option
                  className={style.option}
                  key={pais.id}
                  value={pais.nombre}
                >
                  {pais.nombre}
                </option>
              );
            })}
          </select>
          <div>
            {input.countries?.map((pais, index) => {
              return (
                <div key={index}>
                  <div className={style.selectedCountry}>
                    <span>{pais}</span>
                    <button
                      className={style.button}
                      value={pais}
                      type="button"
                      onClick={handleRemove}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <Select
            className={style.input}
            required="true"
            onChange={handleChangePais}
            options={paises.map((temp) => ({
              label: temp.nombre,
              value: temp.nombre,
            }))}
            isMulti
            defaultValue={[]}
          /> */}
        </div>

        <button className={style.submit} type="submit">
          Crear
        </button>
      </form>
    </div>
  );
}
