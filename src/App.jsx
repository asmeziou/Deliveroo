import React, { useState, useEffect } from "react";
import "./App.css";
import { MdStar } from "react-icons/md";
import { Audio } from "react-loader-spinner";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--qzq5cmkqjv9w.code.run",
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>
      <Audio
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </span>
  ) : (
    <>
      <header>
        <div className="bloc-header-1">
          <img src="" />
        </div>
        <div className="bloc-header-2 wrapper">
          <div>
            <h2>{data.restaurant.name}</h2>
            <p className="description">
              {data.restaurant.description.slice(0, 200)}
            </p>
          </div>
          {data.restaurant.picture && (
            <img src={data.restaurant.picture} alt="header image" />
          )}
        </div>
      </header>
      <main>
        <div className="content wrapper">
          <div className="menu">
            {data.categories
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
                              const newMeals = [...meals];
                              newMeals.push(meal);
                              setMeals(newMeals);
                            }}
                          >
                            <div className="details-item">
                              <div>
                                <h4>{meal.title}</h4>
                                <p>{meal.description.slice(0, 50)}</p>
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
                            {meal.picture && <img src={meal.picture} />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="card"></div>
        </div>
      </main>
    </>
  );
};

export default App;
