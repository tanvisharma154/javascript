function App() {
  // Food items array
  const food = [
    { name: "Pizza", price: 300 },
    { name: "Burger", price: 150 },
    { name: "Pasta", price: 250 }
  ];

  // Total bill calculate using reduce()
  const totalBill = food.reduce((total, item) => {
    return total + item.price;
  }, 0);

  // Find most expensive item
  const mostExpensive = food.reduce((prev, curr) => {
    return prev.price > curr.price ? prev : curr;
  });

  // Get items whose price is less than 200
  const under200 = food.filter((item) => {
    return item.price < 200;
  });

  return (
    <div>
      <h1>Menu</h1>

      {/* Print all menu items */}
      {food.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      {/* Display total bill */}
      <h2>Total Bill: ₹{totalBill}</h2>

      {/* Display most expensive item */}
      <h2>Most Expensive Item: {mostExpensive.name}</h2>

      <h2>Under ₹200 Items:</h2>

      {/* Print items under ₹200 */}
      {under200.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}
    </div>
  );
}

export default App;