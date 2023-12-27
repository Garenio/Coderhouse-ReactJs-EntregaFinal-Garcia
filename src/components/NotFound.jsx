import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="error-page">
      <h1>Página no encontrada 😢</h1>
      <Link className="btn-primary" to={"/"}>Ir al inicio</Link>

    </div>
  );
};