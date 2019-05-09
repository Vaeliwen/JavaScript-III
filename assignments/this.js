/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in global scope, the 'this' keyword will utilize the console object it's given.
* 2. For implicit binding, this serves as an object for the function, in the format of 'this.function'.
* 3. For new binding, this is a specific instance of an object for the purposes of the constructor function's usage.
* 4. For explicit binding, this is explicitly stated as something other than what it would otherwise be, by either the .call or .apply function.
*
* write out a code example of each explanation above
*/

// Principle 1

function dabOnTheHaters(dabber) {
    console.log(this);
    return dabber;
};

//dabOnTheHaters('Zachary')

// code example for Window Binding

// Principle 2

const myWarrior = {
    warrior: 'Aerik',
    warriorsGreeting: function(name) {
        console.log(`Hail, ${name}.  I am the mighty warrior ${this.warrior}.`);
        console.log(this);
    }
};

myWarrior.warriorsGreeting('Zachary')

// code example for Implicit Binding

// Principle 3

function hearts(coolThing) {
    this.heart = 'I <3 ';
    this.coolThing = coolThing;
    this.lessThanThreeU = function() {
        console.log(this.heart + this.coolThing + '!');
        console.log(this);
    };
};

const wrestling = new hearts('wrestling');
const videoGames = new hearts('video games')

wrestling.lessThanThreeU();
videoGames.lessThanThreeU();

// code example for New Binding

// Principle 4

wrestling.lessThanThreeU.call(videoGames);
videoGames.lessThanThreeU.apply(wrestling);

// code example for Explicit Binding