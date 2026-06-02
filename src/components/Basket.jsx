import Buttonplus from "./Buttonplus";
import Buttonmoins from "./Buttonmoins";
import Total from "./Total";
const Basket = ({ meals, setMeals }) => {
  return (
    <div className="card">
      {meals.map((meal) => {
        return (
          <div key={meal.id} className="mealcard">
            <div>
              <Buttonplus setMeals={setMeals} meal={meal} />

              {meal.nombre}
              <Buttonmoins setMeals={setMeals} meal={meal} />
            </div>

            <div>{meal.title}</div>

            <div className="mealprice">
              {Number(meal.price) * Number(meal.nombre)} €
            </div>
          </div>
        );
      })}
      <Total meals={meals} />
    </div>
  );
};
export default Basket;
