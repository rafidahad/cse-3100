<?php
echo "<h2>PHP Functions and Parameter Behavior</h2>";

echo "<h3>Function with Type Hint</h3>";
function addNumbers(int $a, int $b): int {
  return $a + $b;
}
echo "addNumbers(5, 5) = " . addNumbers(5, 5) . "<br>";

echo "<h3>Modify Array (Pass by Value)</h3>";
function modifyArrayByValue($array) {
  foreach ($array as $key => $value) {
    $array[$key] = $value * 2;
  }
  return $array;
}

$data = [1, 2, 3];
$newData = modifyArrayByValue($data);

echo "Original array:<br>";
print_r($data);
echo "<br>Modified array:<br>";
print_r($newData);

echo "<h3>Modify Array (Pass by Reference)</h3>";
function modifyArrayByReference(&$array) {
  foreach ($array as $key => $value) {
    $array[$key] = $value * 2;
  }
  return $array;
}

$data = [1, 2, 3];
$newData = modifyArrayByReference($data);

echo "Original array:<br>";
print_r($data);
echo "<br>Modified array:<br>";
print_r($newData);

