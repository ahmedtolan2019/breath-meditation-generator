//user name
let user = "Ahmed Tolan"

//data source
const dataSource = {
    hold: [true, false],
    duration: [3, 4, 5, 6, 7],
    boxCycle: [1, 2, 3, 4, 5, 6, 7]
}

//function that randomly select from an array
const randomSelect = arr => {
    let arrLen = arr.length
    let randomIndex = Math.floor(Math.random() * arrLen)
    return arr[randomIndex]
}

//format meditation message input => arr-> [inhale, hold, exhale, boxcycles]
const formatMsg = obj =>{
    let inhale = obj.inhale;
    let hold = obj.hold;
    let exhale = obj.exhale;
    let boxCycle = obj.boxCycle;

    //inhale for 5 then hold for 2 then exhale for 3 then hold for 6 , then repeat for 4 box cycle
    let msg = "Inhale for 4 then hold for 4 then exhale for 4 then hold for 4 , then repeat for 4 box cycle"
    if (hold === 0 ){
        msg = `Inhale for ${inhale} then exhale for ${exhale} then inhale for ${inhale} then exhale for ${exhale} , then repeat for ${boxCycle} box cycle`
    }else{
        msg = `Inhale for ${inhale} then hold for ${hold} then exhale for ${inhale} then hold for ${hold} , then repeat for ${boxCycle} box cycle`
    }

    return msg
}
