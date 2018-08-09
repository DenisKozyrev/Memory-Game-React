const cardShirts = {
  YODA: "yoda",
  VADER: "vader",
  R2D2: "r2d2"
};

const cardShirtsImg = new Map();
cardShirtsImg.set(cardShirts.YODA, "assets/img/yoda-img.png");
cardShirtsImg.set(cardShirts.VADER, "assets/img/darth-vader-img.png");
cardShirtsImg.set(cardShirts.R2D2, "assets/img/r2d2-img.png");

export { cardShirts, cardShirtsImg };
