import React from "react";
import "./App.css";

// function HelloWorld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.myText}
//     </div>
//   );
// }

class HelloWorld extends React.Component {
  state = {
    show: true,
  };
  toggleShow = () => {
    //alert("welcome");
    this.setState({ show: !this.state.show });
  };
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.myText}
          <button onClick={this.toggleShow}>Toogle show</button>
        </div>
      );
    } else {
      return (
        <h1>
          No hay elementos
          <button onClick={this.toggleShow}>Toogle show</button>
        </h1>
      );
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <HelloWorld myText="El primero" subtitle="Primer subtitulo" />
      <HelloWorld myText="El segundo" subtitle="Segundo subtitulo" />
      <HelloWorld myText="El tercero" subtitle="Tercer subtitulo" />
    </div>
  );
}
// const App1 = () => (
//   <div>
//     This is my component: <HelloWorld />
//   </div>
// );

// class App2 extends React.Component {
//   render() {
//     return (
//       <div>
//         This is my component: <HelloWorld />
//       </div>
//     );
//   }
// }

export default App;
