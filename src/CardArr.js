

/*
export const CardArr =[
    {number:1, suit:'H', value: 1, img: `/CardImages/2H.jpg`},
    {number:2, suit:'D', value: 2, img: `/CardImages/2H.jpg`},
    {number:3, suit:'S', value: 3, img: `/CardImages/2H.jpg`},
];
*/

 /*
    for(const num of numArr){
        for(const suit of suitArr){
            const value= (num) => {
                if (typeof num === 'number') {
                    return num 
                } else if (num === 'A') { 
                    return 1
                } else {
                    return 10
                }

                const Cards = [];
                const cardObj = {number:num, suit:suit, value: value(num), img: `/CardImages/${num}${suit}.jpg`}
                Cards.push(cardObj);
            }
            
            
        }
    }
    

*/

const numArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
const suitArr = ['H', 'D', 'S', 'C' ];

const builder = (arr1, arr2) => { 
    let Cards = [];
    for(const num of arr1){
        for(const suit of arr2){
            const value= (num) => {
                if (typeof num === 'number') {
                    return num 
                } else if (num === 'A') { 
                    return 1
                } else {
                    return 10
                }
            }
            const cardObj = {
                number: num, 
                suit: suit, 
                value: value(num), 
                key: `${num}${suit}`,
                img: `/CardImages/${num}${suit}.jpg`
            };

            Cards.push(cardObj);
        }
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    Cards = shuffle(Cards);

    return Cards;
}

export const CardArr = builder(numArr, suitArr);


