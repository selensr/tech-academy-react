import React, { useEffect, useState } from "react";
import "./App.css";
//import Button from "./components/Button";

const ListItem = (props) => {
  const { item } = props;

  return <div style={{ margin: "10px" }}>{item}</div>;
};

function App() {
  const [count, setCount] = React.useState(0);

  const fruitData = ["elma", "armut", "portakal"];

  function handleClick() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    console.log("hello");
    return console.log("bye");
  }, []);

  return (
    <>
      <div>
        <p>count: {count} times</p>
        <button onClick={handleClick}>Click</button>
      </div>

      {fruitData.length > 0 &&
        fruitData.map((element) => {
          return <ListItem item={element} />;
        })}
    </>
  );
}

export default App;

//CLASS COMPONENT örneği

// class App extends React.Compnent {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = { counter: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ counter: this.state.counter + 1})
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <p>count: {count} times</p>
//           <button onClick={handleClick}>Click</button>
//         </div>

//         {fruitData.length > 0 &&
//           fruitData.map((element) => {
//             return <ListItem item={element} />;
//           })}
//       </>
//     );

//   }

// }

// export default App;

//SWITCH CASE örneği

// import React, { useState } from "react";
// import "./App.css";
// import Button from "./components/Button";

// function App() {
//   const [color, setColor] = useState("orange");
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     switch (count) {
//       case 0:
//         setColor("pink");
//         setCount((count) => count + 1);
//         break;
//       case 1:
//         setColor("green");
//         setCount((count) => count + 1);
//         break;
//       case 2:
//         setColor("blue");
//         setCount((count) => count + 1);
//         break;
//       case 3:
//         setColor("orange");
//         setCount(0);
//         break;
//       default:
//         setColor("orange");
//         setCount(0);
//     }
//   };

//   return <Button currentColor={color} handleClick={handleClick} />;
// }

// export default App;
