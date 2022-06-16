// code your solution here
function saturdayFun(msg='roller-skate'){
    return `This Saturday, I want to ${msg}!`
}
saturdayFun('This Saturday, I want to roller-skate!');

function mondayWork(info='go to the office'){
    return `This Monday, I will ${info}.`

}
mondayWork()

const wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }