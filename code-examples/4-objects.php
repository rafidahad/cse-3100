<?php

// Define a class named Car
class Car {
  // Private properties: only accessible inside the class
  private string $color;
  private string $model;

  // Constructor to initialize the object when it's created
  public function __construct(string $color, string $model) {
    $this->color = $color;
    $this->model = $model;
  }

  // Public method to get a formatted message about the car
  public function message(): string {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }

  // Getter for the color property
  public function getColor(): string {
    return $this->color;
  }

  // Getter for the model property
  public function getModel(): string {
    return $this->model;
  }

  // Bonus: A method to calculate fuel efficiency
  public function fuelEfficiency(float $distanceKm, float $litersUsed): string {
    $efficiency = $distanceKm / $litersUsed;
    return "Fuel efficiency: " . round($efficiency, 2) . " km/l";
  }

  // Allows the object to be used in a string context
  public function __toString(): string {
    return $this->message();
  }
}

// Create a new Car object
$myCar = new Car("red", "Volvo");

// Display object info using var_dump (for debugging purposes)
echo "<pre>";
var_dump($myCar);
echo "</pre>";

// Call the message method
echo "<p>" . $myCar->message() . "</p>";

// Accessing specific details using getters
echo "<p>Color: " . $myCar->getColor() . "</p>";
echo "<p>Model: " . $myCar->getModel() . "</p>";

// Use the custom method to calculate fuel efficiency
echo "<p>" . $myCar->fuelEfficiency(300, 25) . "</p>";

// Thanks to __toString(), we can echo the object directly
echo "<p>$myCar</p>";