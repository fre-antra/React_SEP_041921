import React from "react";

export default function Header(props) {
    const {gotoPage} = props;

  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => gotoPage('dashboard')}>Dashboard</button>
      <button onClick={() => gotoPage('todo')}>Todos</button>
    </div>
  );
}
