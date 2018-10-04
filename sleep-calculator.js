const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
      return 6;
    } else if (day === 'wednesday') {
      return 5;
      } else if (day === 'thursday') {
          return 6;
        } else if (day === 'friday') {
            return 4;
          } else if (day === 'saturday') {
              return 8;
            } else if (day === 'sunday') {
                return 9;
              }

};

const getActualSleepHours = () =>
8 + 6 + 5 + 6 + 4 + 8 + 9;

console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => {
  return idealHours * 7;
};

console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log("You have 0 sleep debt");
  } else if (actualSleepHours < idealSleepHours) {
    var under = idealSleepHours - actualSleepHours;
 		return "You need " + under + " more hours of sleep";
  } else if (actualSleepHours > idealSleepHours) {
    var over = actualSleepHours - idealSleepHours;
    return "You slept too much by " + over + " many hours";
  } else {
    return "error";
  }

}

console.log(calculateSleepDebt());
