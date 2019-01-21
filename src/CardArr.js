const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace', 'Joker' ];
const suitArr = ['Hearts', 'Diamonds', 'Spades', 'Clubs',  ];

const builder = (arr1, arr2) => { 
    const Cards = [];
    for(const num of arr1){
        for(const suit of arr2){
            const cardObj = {number:num, suit:suit}
            Cards.push(cardObj);
        }
    }
    return Cards;
}

let CardArr = builder(numArr, suitArr);

export default CardArr;

