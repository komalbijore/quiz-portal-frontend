import { Link } from "react-router-dom";
const Navbar = () => {
  console.log("Navbar");
  return (
    <nav>
      <div className="flex justify-between bg-blue-950 p-3 m-3 text-white text-[18px]">
        <h1>Quiz Portal</h1>
        <div className="flex gap-5 ">
          <ul className="flex gap-10 ">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
