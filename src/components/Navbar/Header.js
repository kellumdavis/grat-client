import React from "react";


 import{ Nav,
  NavLink,
  NavMenu,
  
} from "./HeaderElements";
function Navbar({toggle}) {
  console.log({toggle})
  return (
    <header>
      <Nav>
        <NavLink to="/">
          <img className="ghibli-logo" src="https://fontmeme.com/permalink/220613/4ae42a01481078cb4e4f65391a1ee585.png" alt="grattitude logo"/>
        </NavLink>
        
        <NavMenu>
          <NavLink to="/user" >
            <div>User</div>
          </NavLink>
          <NavLink to="/posts" >
            <div>Posts</div>
          </NavLink>
        </NavMenu>
      </Nav>
    </header>
  );
}

export default Navbar;
