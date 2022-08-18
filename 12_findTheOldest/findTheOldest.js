const findTheOldest = (array) => {
  return array.reduce((oldest, person) => {
    const oldAge = !oldest.yearOfDeath
      ? new Date().getFullYear() - oldest.yearOfBirth
      : oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = !person.yearOfDeath
      ? new Date().getFullYear() - person.yearOfBirth
      : person.yearOfDeath - person.yearOfBirth;
    return (oldAge || 0) > personAge ? oldest : person;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
