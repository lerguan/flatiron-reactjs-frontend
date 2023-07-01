import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "rgba(3, 70, 55, 0.26)",
  };

  return (
    <div>
      <NavLink
        to="/houses"
        style={linkStyles}
        activeStyle={{
          background: "rgb(143, 172, 162)",
        }}
      >
        My Favorites
      </NavLink>
      <NavLink
        to="/new"
        style={linkStyles}
        activeStyle={{
          background: "rgb(143, 172, 162)",
        }}
      >
        Create New
      </NavLink>
      <NavLink
        to="/housesearchlink"
        style={linkStyles}
        activeStyle={{
          background: "rgb(143, 172, 162)",
        }}
      >
        Addition Info
      </NavLink>
    </div>
  );
}

export default NavBar;
