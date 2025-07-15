let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr // we are using .textContent here to append the count string because innerText doesn't work well with spaces.
    count=0
    countEl.textContent = count
    
}
