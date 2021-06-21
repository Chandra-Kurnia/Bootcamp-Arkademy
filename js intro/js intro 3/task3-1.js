const animals = keyword => {
  return new Promise((resolve, reject) => {
    const seaAnimals = [
      "Octopus",
      "Crab",
      "Dolphin",
      "Shark",
      "Clown Fish",
      "Shrimp",
      "Sea Turtle",
      "JellyFish",
      "StarFish",
      "SeaHorse",
    ];

    let animal = seaAnimals.filter( animal => animal.match(keyword) )
    if(animal.length > 0){
        resolve(animal);
    }else{
        reject(`${keyword} bukan hewan laut`)
    }
  });
};

animals('')
.then((result)=> {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})