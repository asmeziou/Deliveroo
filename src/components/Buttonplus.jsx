const Buttonplus = ({ setMeals, meal }) => {
  return (
    <button
      onClick={() => {
        setMeals((prev) =>
          prev.map((element) =>
            element.id === meal.id
              ? { ...element, nombre: element.nombre + 1 }
              : element,
          ),
        );
      }}
    >
      +
    </button>
  );
};
export default Buttonplus;
