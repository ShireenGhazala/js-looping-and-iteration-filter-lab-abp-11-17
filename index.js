// drivers.filter(findMatching(driver,name){
// let driver=driver.toUpperCase();
// let name=name.toUpperCase();
// if (driver===name){
  // return true};
// });

function findMatching(drivers,name){

  let MatchingDrivers= drivers.filter(function(driver){
    if (driver.toUpperCase()===name.toUpperCase()){
      return true;
    } else {
      return false;
    }
  });
}
