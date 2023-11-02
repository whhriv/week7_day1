// Question 3 - Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than 10 then resolve it and console log "Big word".

// If the length of the string is less than 10 then reject it and console log "Small String"

function moreThanTen(string){
    return new Promise( (resolve, reject) => {

            if (string.length > 10){
                resolve("Big Word")
            } else {
                reject('Small String')
            }
        });
    } 

let string1 = "this is a big word"
let string2 = "abc"

moreThanTen(string2)
    .then ((result) => {
        console.log(result);

    })
    .catch((err) => {
        console.log(err)
    })

// function moreThanTenPromise() {
//    return  new Promise((resolve, reject) => {
//     let a = string.length()
//     if (a > 10){
//         resolve('BIG WORD')
//     } else {
//         reject('small word')
//     }
    
// })
// }
// moreThanTen.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })

// moreThanTen('Cruel Summer')
//     .then(string => {
//         console.log(`${song.title} is playing`)
//         return song.artist
//     }).then( artist => console.log('oh my fosh', artist, 'I love you'))
//     .catch(err => console.warn(err))
// .finally( ()=> console.log('thanks for searching our database'))

// function moreThanTen(string){
//     // console.log(`Searching for ${songName} in the database...`)
//      return new Promise( (resolve, reject) => {
//          // mimic downloading a song - songs with less than 5 chars don't exist
//          setTimeout( () => {
//              if (string.length > 10){
//                  resolve({ string `Big word` })
//              } else {
//                  reject('Small String')
//              }
//          }, 0)
//      } )
//  }