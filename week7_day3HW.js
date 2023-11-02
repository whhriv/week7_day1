// Question 4 - Create a base class of GameMember and 2 children classes of Dealer, Player
// both dealer and player have:
// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
// hit() : ability to add a random number [1-13] to their hand
// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
// When a Play hits they can hit as long as their total is under 21
// Use the randomNumber function provided below to gernerate a random number 1-12

let getRandomNumber = () =>Math.floor(Math.random() * 13) + 1;
getRandomNumber()


class GameMember {
    constructor() {
        this.hand = [getRandomNumber(1,13), getRandomNumber(1,13)];
    }
    hit() {
        let newCard = getRandomNumber(1,13);
        this.hand.push(newCard)
        }
    total() {
        return this.hand.reduce((total,newCard) => total + newCard, 0)
    }}
class Dealer extends GameMember {
    hit() {
        if (this.total() <= 16) {
            super.hit();
        }
    }
}
class Player extends GameMember{
    hit() {
        if (this.total() < 21) {
            super.hit();
        //     console.log(this.hand)
        // }
        // else if (this.total() <21 && this.total() >=14)
        //     super.hit()
    }}
}
let dealer = new Dealer();
let player = new Player();

console.log("dealer hand:", dealer.hand);
console.log("Player hand:", player.hand);

player.hit();
