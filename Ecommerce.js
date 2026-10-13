function fidgetspinner(array, brand) {
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
}
//Filter what products are shown with button clicks

// filter with arrow function
const filter = spinners.filter((s) => s.category);
