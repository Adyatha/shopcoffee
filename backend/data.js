import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Adya",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "SaiRoshan",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: "Black Coffee",
      slug: "black-coffee",
      category: "without-milk",
      image: "/images/BlackCoffee.png",
      price: 100,
      rating: 4,
      countInStock: 20,
      numReviews: 10,
      description: "beverage made from roasted coffee beans",
    },
    {
      //_id: "2",
      name: "Espresso",
      slug: "espresso",
      category: "without-milk",
      image: "/images/espresso.png",
      price: 120,
      rating: 4.2,
      countInStock: 0,
      numReviews: 10,
      description:
        "concentrated form of coffee served in small, strong shots and is the base for many coffee drinks",
    },
    {
      //_id: "3",
      name: "Flat White",
      slug: "flat-white",
      category: "with-milk",
      image: "/images/FlatWhite.png",
      price: 250,
      rating: 4.5,
      countInStock: 10,
      numReviews: 10,
      description:
        "espresso-based coffee drink accompanied with steamed milk and microfoam",
    },
    {
      //_id: "4",
      name: "Latte Coffee",
      slug: "latte-coffee",
      category: "without-milk",
      image: "/images/latte.png",
      price: 100,
      rating: 4,
      countInStock: 10,
      numReviews: 10,
      description:
        " milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top",
    },
  ],
};
export default data;
