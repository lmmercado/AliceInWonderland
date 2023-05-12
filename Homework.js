let guests = [
  {
    firstName: "Alice",
    lastName: "Mercado",
    species: "Human",
  },

  {
    firstName: "White",
    lastName: "Rabbit",
    species: "Rabbit",
  },

  {
    firstName: "Queen",
    lastName: "of Hearts",
    species: "Human",
  },

  {
    firstName: "King",
    lastName: "of Hearts",
    species: "Human",
  },

  {
    firstName: "Cheshire",
    lastName: "Kitty",
    species: "Cat",
  },

  {
    firstName: "Duchess",
    lastName: "The Dutch",
    species: "Human",
  },

  {
    firstName: "Caterpillar",
    lastName: "Bug",
    species: "Insect",
  },

  {
    firstName: "Mad",
    lastName: "Hatter",
    species: "Human",
  },

  {
    firstName: "March",
    lastName: "Hare",
    species: "Bunny",
  },

  {
    firstName: "Dormouse",
    lastName: "Mousy",
    species: "Mouse",
  },
];

let teaPartyTable = {};

for (let i = 0; i < guests.length; i++) {
  let guest = guests[i];

  smallDessertOptions = [
    "Chocoflan",
    "Flan",
    "Tres Leches",
    "Churro",
    "Pan Dulce",
    "Chocolate Cake",
    "Banana Bread",
    "Bread Pudding",
    "Peach Cobler",
    "Chocolate Croisant",
  ];

  smallDessert =
    smallDessertOptions[Math.floor(smallDessertOptions.length * Math.random())];

  teaGuestParty = {};

  teaGuestParty.firstName = guest.firstName;

  teaGuestParty.lastName = guest.lastName;

  teaGuestParty.species = guest.species;

  teaGuestParty.teaCup = true;

  teaGuestParty.teaPlate = true;

  teaGuestParty.smallDessert = `${smallDessert}`;

  teaPartyTable[guest.firstName] = teaGuestParty;
}

for (let guest in teaPartyTable) {
  console.log(`First Name: ${teaPartyTable[guest].firstName}`);

  console.log(`Last Name: ${teaPartyTable[guest].lastName}`);

  console.log(`Species: ${teaPartyTable[guest].species}`);

  console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);

  console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);

  console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);

  console.log();
}
