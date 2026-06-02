const Total = ({ meals }) => {
  let total = 0;

  meals.map((meal) => {
    total += meal.price * meal.nombre;
  });

  return (
    <div>
      <p>Sous Total: {total} €</p>
      <p>Frais Livraison: 2.50 €</p>
      <p>Toatal: {total + 2.5} €</p>
    </div>
  );
};
export default Total;
