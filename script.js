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
const formatMsg = (obj) => {
  let inhale = obj.inhale;
  let hold = obj.hold;
  let exhale = obj.exhale;
  let boxCycle = obj.boxCycle;

  //inhale for 5 then hold for 2 then exhale for 3 then hold for 6 , then repeat for 4 box cycle
  let msg =
    "Inhale for 4 then hold for 4 then exhale for 4 then hold for 4 , then repeat for 4 box cycle";
  if (hold === 0) {
    msg = `Inhale for ${inhale},\nexhale for ${exhale},\ninhale for ${inhale},\nexhale for ${exhale},\nthen repeat for ${boxCycle} box cycle.`;
  } else {
    msg = `Inhale for ${inhale},\nhold for ${hold},\nexhale for ${inhale},\nhold for ${hold},\nthen repeat for ${boxCycle} box cycle.`;
  }

  return msg;
};

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
