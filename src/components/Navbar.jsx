import logo from "../images/news-logo.jpg";
import lens from "../images/search.svg";
// import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";

function Navbar({setMenu, setSearch}) {
  const navigate = useNavigate();

  const logout = async() => {
    try {
      await signOut(auth);
      navigate("/");
    } catch(err) {
      console.error(err);
    }
  };

  console.log(auth)
  return (
    <div className="grid grid-cols-3 bg-black text-white fixed">
      <div className="flex p-2">
        <img src={logo} alt="" className="h-10 " />
        {/* <h1 className="text-white text-lg">News App</h1> */}

        {auth.currentUser ? (
          <button
            onClick={logout}
            className="relative inline-flex items-center justify-start inline-block px-4 py-2 ml-1 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex">
              Sign Out
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </button>
        ) : (
          <Link
            to="/signin"
            className="relative inline-flex items-center justify-start inline-block px-4 py-2 ml-1 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex">
              Sign In
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </Link>
        )}
        {/* <button id="mbtn" className="text-white flex w-full">
          <img src={user} className="h-7" />
          Sign In
        </button> */}
      </div>

      <div className="text-white flex">
        <button onClick={() => setMenu("general")} className="font-semibold text-sm">Home</button>

        <button onClick={() => setMenu("business") }className="ml-7 font-semibold text-sm">Business</button>

        <button onClick={() => setMenu("entertainment") } className="ml-7 font-semibold text-sm">Entertainment</button>

        <button onClick={() => setMenu("health") } className="ml-7 font-semibold text-sm">Health</button>

        <button onClick={() => setMenu("science") } className="ml-7 font-semibold text-sm">Science</button>

        <button onClick={() => setMenu("sports") } className="ml-7 font-semibold text-sm">Sports</button>

        <button onClick={() => setMenu("technology") } className="ml-7 font-semibold text-sm">Technology</button>
      </div>

      
{/* Search Box */}
      <div className="ml-40 flex p-4">
        {/* <FaSearch className="h-10" /> */}
        <img src={lens} className="h-6" />
        <input onClick={(e) => setSearch(e.target.value)} className="flex bg-black" type="text"  style={{ caretColor: "white" }} placeholder="Search Here" />
      </div>
    </div>
  );
}

export default Navbar;
