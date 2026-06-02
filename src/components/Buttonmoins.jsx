const Buttonmoins = ({ meal, setMeals }) => {
  return (
    <button
      onClick={() => {
        setMeals((prev) =>
          prev
            .map((element) =>
              element.id === meal.id
                ? { ...element, nombre: element.nombre - 1 }
                : element,
            )
            .filter((element) => element.nombre > 0),
        );
      }}
    >
      -
    </button>
  );
};
export default Buttonmoins;
