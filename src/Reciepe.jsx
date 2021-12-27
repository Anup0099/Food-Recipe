import React from "react";
import style from "./recipe.module.css";
function Reciepe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1 >{title}</h1>
      <p>CALORIES={calories}</p>
      <img className={style.image} src={image} alt="" />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reciepe;
