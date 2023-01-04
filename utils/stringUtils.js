// Write a funtion that atakes string and a number that repeats the string n times with space in the middle of each one

function repeatNTimesWithSpace(str, n) {
  return (str + ' ').repeat(n);
}

function capitalizeFirstLetter(str){
  return str[0].toUpperCase() + str.slice(1)
}

module.exports = {
  repeatNTimesWithSpace, 
  capitalizeFirstLetter
};
