
const menu = {
  burger: 120,
  pizza: 200,
  fries: 80
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error("Invalid item: " + item);
      return menu[item];
    });
    const total = prices.reduce((acc, p) => acc + p, 0);
    return total;
  } catch (err) {
    console.log("Error:", err.message);
  }
}

console.log(calculateBill(["burger", "pizza"]));
console.log(calculateBill(["burger", "juice"]));
