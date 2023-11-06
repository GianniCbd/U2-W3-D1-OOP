class User {
  constructor(name, surname, age, location) {
    this.name = name;
    this.lastname = surname;
    this.age = age;
    this.location = location;
  }

  ToCompare(userTwo) {
    if (userOne.age < userTwo.age) {
      return userOne.name + " è più giovane di " + userTwo.name;
    } else {
      return userOne.name + " è più vecchio di " + userTwo.name;
    }
  }
}

const userOne = new User("Mario", "Rossi", 43, "Perugia");
const userTwo = new User("Gianni", "Cabiddu", 34, "Cagliari");

const isTheSame = userOne.ToCompare(userTwo);

console.log(isTheSame);

// -------------------------

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(animal) {
    if (this.ownerName === animal.ownerName) {
      return "scusi ha lo stesso padrone di MaMorde";
    } else {
      return "scusi non ha lo stesso padrone di Mamorde";
    }
  }
}

const animalOne = new Pet("Scusi", "Gianni", "dog", "Labrador");
const animalTwo = new Pet("MaMorde", "Gianni", "dog", "Pitbull");

const same = animalOne.sameOwner(animalTwo);
console.log(same);

// -------

const pet = document.getElementById("pet");
const animalList = document.getElementById("animaList");

const pet1 = [];

pet.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
});
