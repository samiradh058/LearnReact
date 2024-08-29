import { Link } from "react-router-dom";

function Username() {
  return (
    <div className="flex">
      <p className="mr-8">Hey Samir</p>
      <Link to="/me">Me</Link>
    </div>
  );
}

export default Username;
