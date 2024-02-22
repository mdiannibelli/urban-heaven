import { useEffect, useState } from "react";
import NavBar from "./Navigation/NavBar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./Sidebar/SideBar";

/* db */
import db from './db/data'
import Card from "./components/Card";

export default function App() {
  /* products */
  const [products, setProducts] = useState([]);
  /* selected category */
  const [selected, setSelected] = useState(null);
  /* input filter */
  const [query, setQuery] = useState("");

  /* filter products per input  */
  const filteredItems = db.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  /* console.log(filteredProducts) */


  /* FUNCTIONS */
  /* handle input */
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  /* radio filter */
  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  /* buttons filter */
  const handleClick = (e) => {
    setSelected(e.target.value);
  }

  /* filtered data */
  const filteredData = (db, selected, query) => {
    let filteredProducts = db;

    /* input filter */
    if (query) {
      filteredProducts = filteredItems;
    }

    /* selected filter */
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, newPrice, company, title}) => 
        category === selected || 
        color === selected || 
        newPrice === selected ||
        company === selected ||
        title === selected
      )
    }
      return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
        <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        />
      ));
  };

  const result = filteredData(db, selected, query)

                                                      
   return (
    <>
    <NavBar query={query} handleInputChange={handleInputChange}/>
    <SideBar handleChange={handleChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </>
  );
}
