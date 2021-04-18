import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
const style = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(){
    if(this.state.theme==="dark"){
      this.setState({theme: "light"})
    }else{
      this.setState({theme: "dark"})
    }
  }
  render() {
    return (
      <>
        <button onClick={this.changeTheme}>
          Theme : {this.state.theme}
        </button>
        <Toolbar theme={this.state.theme} />
      </>
    );
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

var Button = ({ theme }) => <button style={style[theme]}>Click Me</button>;
export default App;
