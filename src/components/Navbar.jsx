import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Coffee</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center gap-5 px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/user">user</NavLink>
          </li>
          {user && <li>{user.email}</li>}
          {user ? (
            <li>
              <button onClick={() => logOutUser()} className="btn btn-sm">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
