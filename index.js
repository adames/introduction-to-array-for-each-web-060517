// Add your doToElementsInArray() function here:

function doToElementsInArray(array, change) {
  array.forEach(change);
};
// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = element + "!!!";
};
