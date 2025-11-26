
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.from = fromLocation;
    this.to = toLocation;
    this.distance = distance;
  }
  calculateFare() {
    if (!this.distance || this.distance < 0) throw new Error("Invalid distance");
    return this.distance * 10;
  }
}

try {
  const trip = new Trip("Delhi", "Agra", 200);
  console.log("Fare:", trip.calculateFare());
  const trip2 = new Trip("Delhi", "Agra", -10);
  console.log(trip2.calculateFare());
} catch (e) {
  console.log("Error:", e.message);
}
