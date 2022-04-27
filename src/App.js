import './App.css';
import React from 'react';
import Page from './page'
import axios from 'axios';


const catURL = "https://plankdesign.com/wp-json/plank/v1/fed-test/categories";

function App() {
  const [categorie, setCategorie] = React.useState(null);
  React.useEffect(() => {
    axios.get(catURL).then((response) => {
      setCategorie(response.data);
    });
  }, []);
  
  if (!categorie) return null;

  return (
    <>
      <Page categorie={categorie} />
    </>
  );
}

export default App;
