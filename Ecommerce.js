//Create a list of at least 20 items to sell
spinners = [
  { id: 1, name: "Standerd", cost: 3.99, category: "Plastic" },
  { id: 2, name: "Dual-Bar Spinner", cost: 9.99, category: "Metal" },
  { id: 3, name: "Light-Up Spinner ", cost: 5.99, category: "Glow" },
  { id: 4, name: "Glow-in-the-Dark Spinner ", cost: 6.99, category: "Glow" },
  { id: 5, name: "Aluminum Tri-Spinner ", cost: 11.99, category: "Metal" },
  { id: 6, name: "Brass Metal Spinner ", cost: 19.99, category: "Metal" },
  { id: 7, name: "Titanium EDC Spinner ", cost: 29.99, category: "Metal" },
  { id: 8, name: "Zirconium Spinner ", cost: 39.99, category: "Metal" },
  {
    id: 9,
    name: "Transformable Robot Spinner ",
    cost: 8.99,
    category: "Novelty",
  },
  { id: 10, name: "Planetary Gear Spinner", cost: 7.99, category: "Novelty" },
  {
    id: 11,
    name: "Custom-Button  Spinner ",
    cost: 4.99,
    category: "Plastic",
  },
  { id: 12, name: "Chain Spinner", cost: 9.99, category: "Novelty" },
  { id: 13, name: "Captain America Shield Spinner ", cost: 6.99 },
  { id: 14, name: "Holographic  Spinner", cost: 12.99, category: "Glow" },
  { id: 15, name: "Pop-it Spinner", cost: 3.99, category: "Plastic" },
  { id: 16, name: "Micro Spinner", cost: 4.99, category: "Plastic" },
  { id: 17, name: "Table Spinner ", cost: 11.99, category: "Novelty" },
  {
    id: 18,
    name: "Carnival Style Spinner ",
    cost: 7.99,
    category: "Plastic",
  },
  { id: 19, name: "Magnetic Haptic Spinner", cost: 15.99, category: "Metal" },
  {
    id: 20,
    name: "Suction Cup Baby Spinner ",
    cost: 2.99,
    category: "Plastic",
  },
];
//Filter what products are shown with button clicks (clicks added later!)
function Sortbycategory(category) {
  const Plastic = spinners.filter((item) => item.category === "Plastic");
  const Metal = spinners.filter((item) => item.category === "Metal");
  const Glow = spinners.filter((item) => item.category === "Glow");
  const Novelty = spinners.filter((item) => item.category === "Novelty");
  if (category === `Plastic`) return Plastic;
  else if (category === `Metal`) return Metal;
  else if (category === `Glow`) return Glow;
  else if (category === `Novelty`) return Novelty;
  else return "Product not found";
}
//Allow users to add to a cart
cart = [];

function Addcart(id, quantity) {
  // cart.push(spinners.find((smart) => smart.id === id) || null);
  const spinner = spinners.find((index) => index.id == id);

  if (!spinner) return "Product not found";

const index = cart.findIndex(item => item.id === id);
if (index)
  else cart.push({ id: id, quantity: quantity });

  Title = spinners.name;

  return `You have added the spinner ${Title}(id ${id}) to your cart with a quantity of ${quantity}`;
}
console.log(Addcart(5, 2));
// console.log(Addcart(3, 1));
//console.log(cart);
//console.log(quan);

//Remove Items from cart
function Removecart(id) {
  cart = cart.filter((hi) => hi.id !== id);
  return cart;
}

// console.log(Removecart(5));

//Provide users a total for their purchase
//*Later
//All items shown and filtered on screen
//Shopping cart with add/remove buttons and total order price
