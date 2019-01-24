// find a way to output the string "I am a rockstar ninja unicorn JS dev" from this array.

// You will need to reverse the order of the strings in the array and then join them together into a single string.

let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]
// let hyperReverse = hyperbole.reverse();
// let hyperString = hyperReverse.join(" ");
// console.log(hyperString);

// note to self: you can chain array methods! NOTE that you have to have the () on the inner ones

// let ninja = hyperbole.reverse().join(" ");
// console.log(ninja);

// note to self: reverses stack

// use the `map()` array method to convert all of the strings to uppercase

let upper = hyperbole.map(
    el => el.toUpperCase()).reverse().join(" ");

console.log(upper)

// note to self: quokka doesn't parse fetch ('fetch is not defined')
    fetch("https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/naienko/events")
.then(events => events.json())
.then(parsedEvents => {
    //console.log(parsedEvents);
    // note to self: may have to search parsedevents for the right event
    document.querySelector("nav").innerHTML = parsedEvents[0].payload.commits[0].message;
})

// I want you to put an event listener on the container div and when the font button is clicked I want the font to change
// and when the color button is clicked I want the text color to change. Make the necessary changes to the HTML to get it
// to work. You will need to make a css file with 2 classes on it!

let container = document.querySelector("#container");
let buttonReel = container.querySelectorAll("button");
buttonReel.forEach(element => {
    element.addEventListener("click", function() { 
        if (element.textContent === "color") {
            container.classList.add("color");
        } else {
            container.classList.add("larger");
        }
    })
});