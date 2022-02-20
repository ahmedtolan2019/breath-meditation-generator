//user name
let user = "Ahmed Tolan";

//data source
const dataSource = {
  hold: [true, false],
  duration: [3, 4, 5, 6, 7],
  boxCycle: [1, 2, 3, 4, 5, 6, 7],
};

//function that randomly select from an array
const randomSelect = (arr) => {
  let arrLen = arr.length;
  let randomIndex = Math.floor(Math.random() * arrLen);
  return arr[randomIndex];
};

//format meditation message input => arr-> [inhale, hold, exhale, boxcycles]

//main program -- generator

const generator = () => {
  //iterate throw data store
  let randoms = {
    inhale: 0,
    hold: 0,
    exhale: 0,
    boxCycle: 0,
  };
  randoms.inhale = randomSelect(dataSource.duration);
  randoms.hold = randomSelect(dataSource.hold)
    ? randomSelect(dataSource.duration)
    : 0;
  randoms.exhale = randomSelect(dataSource.duration);
  randoms.boxCycle = randomSelect(dataSource.boxCycle);

  let msg = formatMsg(randoms);
  console.log(msg);
};

console.log(`\nWelcome ${user}, let us meditate!\n`);
generator();
