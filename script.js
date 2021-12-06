function swap(){
  var obj1 = document.getElementById('nums1').value;
  var obj2 = document.getElementById('selected').value;

  var temp = obj1;
  obj1 = obj2;
  obj2 = temp;
  
  // Save the swapped values to the input element.
  document.getElementById('nums1').value = obj1;
  document.getElementById('selected').value = obj2;
}
