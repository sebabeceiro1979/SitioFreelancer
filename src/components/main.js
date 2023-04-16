import React from 'react';

function Main(props) {
  return (
    <main class="shadow mainContainer">
      {props.children}
    </main>
  );
}

export default Main;