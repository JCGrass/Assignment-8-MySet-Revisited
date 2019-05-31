<!DOCTYPE html>
<html>
<body>

let test_set = new MySet(),
  compare_set = new MySet([1,2,1,3]);
test_set.add(1);
test_set.add(2);
test_set.add(1);
test_set.add(3);

if ( ! test_set.isEqual(compare_set) ) {
  console.log("Repeated adds fail");
}
