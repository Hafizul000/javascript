function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
  let myYear = isLeapYear(2011);
  console.log(myYear);