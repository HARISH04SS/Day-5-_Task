//Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getEmail() {
      return this.email;
    }
  
    setFirstName(newFirstName) {
      this.firstName = newFirstName;
    }
  
    setLastName(newLastName) {
      this.lastName = newLastName;
    }
  
    setAge(newAge) {
      this.age = newAge;
    }
  
    setGender(newGender) {
      this.gender = newGender;
    }
  
    setEmail(newEmail) {
      this.email = newEmail;
    }
  }
  const person1 = new Person("Harish", "SS", 22, "Male", "abc@guvi.com");
  console.log(person1.getFullName());
  console.log(person1.getAge()); 
  console.log(person1.getGender()); 
  console.log(person1.getEmail()); 
  
  //write a class to calculate the Uber price.
  class UberPricing {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      const fare = this.baseFare + (this.costPerMile * distanceInMiles) + (this.costPerMinute * timeInMinutes) + this.bookingFee;
      return fare;
    }
  }
  const uberX = new UberPricing(2.5, 0.35, 1.75, 1.5);
  const distance = 10;
  const time = 20; 
  const price = uberX.calculatePrice(distance, time);
  console.log("The estimated Uber price is Rs." + price.toFixed(2));
  