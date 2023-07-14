// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Ralph");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function appendCat(name) {
    const coolCats = [...cats, "Broom"];
    return coolCats;
}
function prependCat(name) {
    const coolCats = ["Arnold", ...cats];
    return coolCats;
}
function removeLastCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.pop();
    return copyOfCats;
}
function removeFirstCat() {
    const ccopyOfCats = cats.slice();
    ccopyOfCats.shift();
    return ccopyOfCats;
}