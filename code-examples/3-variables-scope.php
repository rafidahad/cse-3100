<?php
//Variables declared outside a function are global
// but cannot be accessed directly inside functions unless declared as global or accessed through $GLOBALS
$x = 5; // global scope

function test() {

  //When a variable is declared as static inside a function, its value is preserved between function calls.
  static $count = 0;
  $count++;

  //Variables declared inside a function are local and only accessible inside that function.
  $y = 5; // local scope
  echo "<p>Variable y inside function is: $y</p>";
  echo "Static variable: $count";

  global $x; // global is used to access global variables from inside a function
  echo "<p>Accessing global variable x inside function: $x</p>";

  $GLOBALS['x'] = 5 + 5; // special array that holds all global variables
}

test();

echo "<p>Variable x outside function is: $x</p>";

$globalCounter = 0;

function complexCounter() {
  global $globalCounter;
  static $staticCounter = 0;
  $local = 1;

  $globalCounter++;
  $staticCounter++;
  $local++;

  echo "Global: $globalCounter | Static: $staticCounter | Local: $local <br>";
}

complexCounter();
complexCounter();
complexCounter();