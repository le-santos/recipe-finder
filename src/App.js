import React from "react";
import Layout from "./Components/Layout/Layout";
import RecipeFinderMain from "./Containers/RecipeFinderMain";

function App() {
  return (
    <div className="App">
      <Layout>
        <RecipeFinderMain />
      </Layout>
    </div>
  );
}

export default App;
