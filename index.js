// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2015", result: "W"},
    {year: "2016", result: "L"}

  ];

function findWin (element) {

 return element.result === "W";
};
/* 
function superbowlWin (element) {

    let winningRecord = record.find ((element) => findWin (element));
     return winningRecord.year 
    };
*/
    function superbowlWin (record){
let winningRecord = record.find(({result}) => result === "W");

return(winningRecord.year); }