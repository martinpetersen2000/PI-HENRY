import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";
export default function Create() {
  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <Form />
    </div>
  );
}
