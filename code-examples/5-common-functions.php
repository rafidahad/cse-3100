<?php

// Basic string functions in PHP

// Returns the number of characters in the string (including spaces)
echo strlen("Hello world!") . "<br>"; // 12

// Returns the number of words in the string
echo str_word_count("Hello world!") . "<br>"; // 2

// Finds the position of the first occurrence of a substring
echo strpos("Hello world!", "world") . "<br>"; // 6 (0-based index)

$x = "Hello World!";

// Converts the string to uppercase
echo strtoupper($x) . "<br>"; // HELLO WORLD!

// Replaces "World" with "Dolly"
echo str_replace("World", "Dolly", $x) . "<br>"; // Hello Dolly!

// Reverses the string
echo strrev($x) . "<br>"; // !dlroW olleH

// Removes whitespace (or other characters) from the beginning and end
echo trim("   $x   ") . "<br>"; // "Hello World!" (whitespace removed)

// Splits a string into an array using a space as the delimiter
$y = explode(" ", $x);

// Displays the array
echo "<pre>";
print_r($y); // Array ( [0] => Hello [1] => World! )
echo "</pre>";

// Type checking: is_numeric() returns true if variable is a number or numeric string
$x = 5985;
var_dump(is_numeric($x)); // bool(true)
echo "<br>";

// Extra: check if a string is numeric
$z = "123abc";
var_dump(is_numeric($z)); // bool(false) — contains letters