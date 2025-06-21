<?php

//!Strict typing
// PHP does not enforce strict typing by default
// For strict type checking, use declare(strict_types=1); at the top of the file
// This will enforce type declarations in function parameters and return types
// declare(strict_types=1);


//!Variables
// Variables in PHP start with a dollar sign ($)
// Variable names must start with a letter or underscore, followed by letters, numbers, or underscores
// Variable names are case-sensitive

$x = 5; // integer
$y = true; // boolean
$z = 10.365; // float
$c = (string) 10; // type casting to string
$cars = array("Volvo","BMW","Toyota");

var_dump($x); // returns the data type and the value
echo "<br>";
var_dump($y);
echo "<br>";
var_dump($z);
echo "<br>";
var_dump($cars);
echo "<br>";
$x = $y = $z = "Fruit";
echo $x . "<br>";

//!PHP supports type juggling
// PHP uses context-aware type juggling
// In the context of an arithmetic operation, PHP converts the string to a number
// In the context of a string operation, PHP converts the number to a string

$a = "5" + 10;  // PHP converts "5" to integer and adds it
var_dump($a);   // int(15)

$d = 10 + "5"; 
var_dump($d);   

$c ="5" . 10;    
var_dump($c);

echo "<br>";


//!PHP supports type casting
// Type casting is converting a variable from one type to another
// You can cast a variable to a specific type using (type) before the variable

$x = 10.99;
$y = (int)$x;  // force float to int
var_dump($y);  // int(10)


$z = (string)true;
var_dump($z);  // string(1) "1"

//!Reassigning variables
// PHP is a dynamically typed language, meaning you can change the type of a variable at runtime

$var = 10;        // int
$var = "Apple";   // now string
$var = true;      // now boolean

//!Function with type declaration
// PHP allows you to declare the type of parameters and return types in functions

function greet(string $name): string {
    return "Hello, $name!";
}
echo greet("PHP Learner");
