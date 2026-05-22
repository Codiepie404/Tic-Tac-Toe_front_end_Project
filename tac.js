
let boxes = document.querySelectorAll(".box")
let newGameBtn = document.querySelector("#new-btn")
let resetGameBtn = document.querySelector("#reset-btn")

let turn0 = true

const winPattern = [
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.innerText = turn0 ? "O" : "X"
        turn0 = !turn0
        box.disabled = true
        checkWinner()
    })
})

const disableBoxes = () => boxes.forEach((box) => box.disabled = true)

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false
        box.innerText = ""
    })
}

const resetBoard = () => {
    turn0 = true
    enableBoxes()
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            alert(`Congratulations Player ${pos1val} wins!`)
            disableBoxes()
            return
        }
    }
}

newGameBtn.addEventListener('click', resetBoard)
resetGameBtn.addEventListener('click', resetBoard)