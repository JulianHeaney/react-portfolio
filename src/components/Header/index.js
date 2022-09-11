import React from "react";

function Header(props) {
  return (
    <div>
    <h2>
      <a href="/">Julian Heaney</a>
    </h2>
    {props.children}
    </div>
  );
}

export default Header;