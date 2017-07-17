

 function milDriven(preMil,curMil){
  let milesDriven = curMil -  preMil;
  console.log("Previous Miles:"+preMil);
  console.log("Current Miles:"+curMil);
  console.log("Mile driven: "+ milesDriven);

}
function galUsed(preGal,curGal){
  let gallonsUsed = curGal - preGal;
  console.log("Previous Callons:"+preGal);
  console.log("Current Gallons:"+curGal);
  console.log("Tolal Gallons Used :"+gallonsUsed);

}
function calMPG(galUsed,milDriven){
  let MPG = milDriven/galUsed;
  console.log("MPG is :"+ MPG);

}
milDriven(45687,46987);
galUsed(16,18);
calMPG(16,456);

// class MPG{
//    currentOdomiter:number;
//    previourOdomiter:number;
//    gallonsUsed:number;
//
//
//    milesDriven(co,po,gu){
//     let calMPG = (this.currentOdomiter - this.previourOdomiter)/this.gallonsUsed;
//     console.log('Miles Driven = '+ calMPG);
//     return calMPG;
//
//    }
//
// };
// let milesPerGallons = new MPG();
// milesPerGallons.currentOdomiter = 45879;
// milesPerGallons.previourOdomiter = 46178;
// milesPerGallons.gallonsUsed = 17.23;
// milesPerGallons.milesDriven;
