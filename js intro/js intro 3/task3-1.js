const animals = (keyword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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

      if ((keyword == "") | (typeof keyword !== "string")) {
        reject("Keyword anda tidak benar");
      } else {
        lowAnimals = seaAnimals.map((item) => item.toLowerCase());
        lowKeyword = keyword.toLowerCase();
        let animals = lowAnimals.filter((animal) => animal.match(lowKeyword));
        if (animals.length > 0) {
          resolve(animals);
        } else {
          reject(`${keyword} bukan hewan laut`);
        }
      }
    },2000);
  });
};

//then catch
console.log("Sinkron 1");
animals("Octopus")
  .then((result) => {
    console.log("Then catch : " + result);
  })
  .catch((err) => {
    console.log(err);
  });


console.log("Sinkron 2");
//try catch
const getAnimal = async () => {
  try {
    //menangkap resolve
    const animal = await animals("Octopus");
    console.log("Try Catch : " + animal);
  } catch (err) {
    //menangkap reject
    console.log(err);
  }
};

getAnimal();
console.log("Sinkron 3");
