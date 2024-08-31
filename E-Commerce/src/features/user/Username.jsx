import { Link } from "react-router-dom";

function Username() {
  return (
    <div className="flex items-center">
      <p className="mr-8 font-medium text-[#F5F5F5]">Hey, "Samir"</p>
      <Link to="/me" className="rounded-full bg-red-400 px-6 py-6"></Link>
    </div>
  );
}

export default Username;
