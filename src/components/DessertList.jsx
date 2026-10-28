import { useState } from "react"
import dataDesserts from "../assets/desserts.json"
import DessertCard from "./DessertCard"
import "./DessertList.css";

function DessertList(){
    const [desserts, setDesserts] = useState(dataDesserts)

    const handleRemove = (index) =>{
        const stateClone = [...desserts]
        stateClone.splice(index, 1)
        setDesserts(stateClone)
    }
  
    
    return (
  <section className="desserts-section">

    <div className="desserts-heading">
      <span>THE SWEET COLLECTION</span>
      <h2>Our Recipes</h2>
      <p>A little sweetness for every occasion.</p>
    </div>

    <div className="desserts-grid">
      {desserts.map((dessert, index) => {
        return (
          <DessertCard
            key={dessert.id}
            handleRemove={handleRemove}
            dessert={dessert}
            index={index}
          />
        );
      })}
    </div>

  </section>
);
};
export default DessertList