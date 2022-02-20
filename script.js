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
