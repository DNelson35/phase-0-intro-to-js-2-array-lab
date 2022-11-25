// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    const newArr = [...cats, `${name}`]
    return newArr
}

function prependCat(name){
    const newArr = [`${name}`, ...cats]
    return newArr
}

function removeLastCat(){
    const copy = cats.slice(0,cats.length-1)
    return copy
}

function removeFirstCat(){
    const copy = cats.slice(1,cats.length)
    return copy
}
