var chocolateBars = ["snickers", "hundred grand kitkat",
  "skittles"];


function addElementToEndOfArray( array, element ){
  return [...array, element]

}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  return array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
