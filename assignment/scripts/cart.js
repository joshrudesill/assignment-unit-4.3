console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (!isFull()) {
    basket.push(item);
    return true;
  }
  return false;
}
function listItems() {
  for (item of basket) {
    console.log(item);
  }
}
function empty() {
  basket.splice(0, basket.length);
}
function isFull() {
  return basket.length < 5 ? false : true;
}
function removeItem(item) {
  let index = basket.indexOf(item);
  if (index !== -1) {
    return basket.splice(index, 1)[0];
  }
  return null;
}
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
