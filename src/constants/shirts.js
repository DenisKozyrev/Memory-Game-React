const cardShirts = {
  YODA: "yoda",
  VADER: "vader",
  R2D2: "r2d2"
};

const cardShirtsImg = new Map();
cardShirtsImg.set(cardShirts.YODA, { className: "yoda", image: 'assets/img/yoda-img.png' });
cardShirtsImg.set(cardShirts.VADER, { className: "vader", image: 'assets/img/darth-vader-img.png' });
cardShirtsImg.set(cardShirts.R2D2, { className: "r2d2", image: 'assets/img/r2d2-img.png' });

export { cardShirts, cardShirtsImg };
