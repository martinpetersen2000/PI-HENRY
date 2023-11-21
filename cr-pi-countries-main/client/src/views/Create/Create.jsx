import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";
import flechaAtras from "../../components/Searchbar/flechaatras.svg";
import style from "./Create.module.css";

export default function Create() {
  return (
    <div>
      <Link to="/home">
        <button className={style.flechaAtras}>
          <img src={flechaAtras} alt="" />
        </button>
      </Link>
      <h2 className={style.crea}>Crea tu actividad!</h2>
      <Form />
    </div>
  );
}
