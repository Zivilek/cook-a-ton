import React from 'react';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeListHeader from './components/RecipeList/RecipeListHeader/RecipeListHeader';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import './App.css';

import ImagesViewer from './components/ImagesViewer/ImagesViewer';

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
