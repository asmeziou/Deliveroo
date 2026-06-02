import { MdStar } from "react-icons/md";
import React, { useState } from "react";
import Basket from "./basket";
import Total from "./Total";
const Main = ({ categories }) => {
  const [meals, setMeals] = useState([]);

  return (
    <main>
      <div className="content wrapper">
        <div className="menu">
          {categories
            .filter((categorie) => categorie.meals.length > 0)
            .map((categorie) => {
              return (
                <div key={categorie.id}>
                  <h3>{categorie.name}</h3>
                  <div className="meals">
                    {categorie.meals.map((meal) => {
                      return (
                        <div
                          className="item-menu"
                          key={meal.id}
                          onClick={() => {
                            setMeals((prev) => {
                              const indexMeal = prev.findIndex(
                                (element) => element.id === meal.id,
                              );

                              if (indexMeal !== -1) {
                                return prev.map((element) =>
                                  element.id === meal.id
                                    ? { ...element, nombre: element.nombre + 1 }
                                    : element,
                                );
                              }

                              return [...prev, { ...meal, nombre: 1 }];
                            });
                          }}
                        >
                          <div className="details-item">
                            <div>
                              <h4>{meal.title}</h4>
                              <p>{meal.description}</p>
                            </div>
                            <div>
                              <p>{meal.price} €</p>
                              {meal.popular === true && (
                                <p className="popular">
                                  <MdStar className="star" />
                                  Populaire
                                </p>
                              )}
                            </div>
                          </div>
                          {meal.picture && (
                            <img src={meal.picture} alt={meal.title} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
        <Basket meals={meals} setMeals={setMeals} />
      </div>
    </main>
  );
};
export default Main;
