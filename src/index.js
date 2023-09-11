import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Box from "./components/Box";

class Main extends React.Component {
  render() {
    return (
      <div style={{ background: "grey" }}>
        <Header />
        <div style={{ marginTop: "50px" }}>
          <Box
            initialState={[
              { name: "green", value: "#65c167" },
              { name: "blue", value: "#1755f0" },
              { name: "red", value: "red" },
              { name: "black", value: "black" },
            ]}
          />
          <Box
            initialState={[
              { name: "violet", value: "violet" },
              { name: "blue", value: "#1755f0" },
              { name: "red", value: "red" },
              { name: "black", value: "black" },
            ]}
          />
        </div>
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<Main />, App);
