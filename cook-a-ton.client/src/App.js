import React from "react";
import RecipeList from "./components/recipe-list/recipe-list";
import SideBar from "./components/side-bar/side-bar";
import "./App.css";

const App = () => {
  return (
    <div className="main-window">
      <SideBar />
      <RecipeList />
    </div>
  );
};

export default App;
