import style from "./recipe.module.css";
export interface RecipeData {
  label: string;
  calories: number;
  image: string;
  ingredients: { text: string }[];
}

const Recipe = ({ label, calories, image, ingredients }: RecipeData) => {
  return (
    <div className={style.recipe}>
      Recipes
      <h1 className="display-4 p-3">{label}</h1>
      <ul>
        {ingredients.map((ingredients, index) => (
          <li className="lead" key={index}>
            {ingredients.text}
          </li>
        ))}
      </ul>
      <p>Calories: {Math.floor(calories)}g</p>
      <img className={style.image} src={image} alt="Cannot Display" />
    </div>
  );
};

export default Recipe;
