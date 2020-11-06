import React from "react";
import RecipeList from "./components/recipe-list/recipe-list";
import RecipeListHeader from "./components/recipe-list/RecipeListHeader/RecipeListHeader";
import SideBar from "./components/side-bar/side-bar";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-window">
        <SideBar />
        <div className="recipe-container">
          <RecipeListHeader />
          <RecipeList />
        </div>
      </div>
    </div>
  );
};

export default App;
