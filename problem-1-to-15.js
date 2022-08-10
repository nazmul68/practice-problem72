//******  practice problem 1 ******//
// const gaveTk = 1000;
// const expense = 700;
// const returnTk = gaveTk - expense;
// // console.log('The shopkeeper will return tk:' , returnTk);


//******  practice problem 2 ******//
// const bioMark = 91;
// const mathMark = 72;
// const chemMark = 62;
// const phyMark= 70;
// const banMark = 81;
// const totalMarks = bioMark + mathMark + chemMark + phyMark + banMark ;
// const average = totalMarks/5;
// // console.log(average);
// // console.log(parseInt(average));


//******  practice problem 3 ******//
// const str1 = 'I am going to be ';
// const str2 = 'an awesome web developer';
// // const combinedStr = str1 + str2;
// const combinedStr = str1.concat(str2); /*good practice*/
// // console.log(combinedStr);



//******  practice problem 4 ******//
// const number = 119;
// const dividedBy = 5;
// const remainder = number % dividedBy;
// console.log('The remainder is:' ,remainder);



//******  practice problem 5 ******//
// var price = 33  /* use semicoln end of a number */
// var name - sabana  /* must use equal sign between variable & its value , also use quotation sign('') when write an string */

// var boxName  = 'Cocola; /* string should be written inside quotation mark , otherwise it would not consider as string */

// var 88_price = 34;  /* dont use number at the starting of a variable */

// var enum = -1;  /* dont use javascript reseved word as a variable name , here (enum) is reserved word of javasrcipt . So must concern about it my friend */

// var _&box'78 = 'Monika'; /* dont use underscore or dollar sign at the starting of a variable name & dont use inverted comma (') inside variable name;

// var home-address = 'mirpur'; /* dont use dash sign (-) inside variable name */



//******  practice problem 6 ******//
// const fruitsArr = ['Apple', 'Banana', 'Orange'];
// console.log( "banana's index is:",fruitsArr.indexOf('Banana'));
// const ansArr = (fruitsArr.splice(1,1,"Mango"));
// console.log(fruitsArr);



//******  practice problem 7 ******//
// const result = 40;

// if(result >= 0 && result <40 ){
//     console.log('Your result is fail');
// }
// else if(result>=40 && result<50){
//     console.log('Your result is D');
// }
// else if(result>=50 && result<60){
//     console.log('Your result is C');
// }
// else if(result>=60 && result<80){
//     console.log('Your result is B');
// }
// else if(result>=80 && result<=100){
//     console.log('Your result is A');
// }
// else{
//     console.log('something went wrong try again later');
// }



//******  practice problem 8 ******//
// const num1 = 1003;
// const num2 = 7009;
// const num3 = 4005;
// if(num1>num2 && num1>num3){
//     console.log('Largest number is:' ,num1)
// }
// else if(num2>num1 && num2>num3){
//     console.log('Largest number is:' ,num2)
// }
// else{
//     console.log('Largest number is:' ,num3)
// }




//******  practice problem 9 ******//
// const side1 = 9;
// const side2 = 14;
// const side3 = 9;
// if(side1 === side2 || side1 === side3 || side2 === side3){
//     console.log('Yes this triangle is an Isosceles');
// }
// else{
//     console.log('No this triangle is not an Isosceles');
// }




//******  practice problem 10 ******//
// const gotNumber = 60;
// if(gotNumber<50){
//     console.log('The result is Fail');
// }
// else if (gotNumber>=50 && gotNumber<60){
//     console.log('Your result is D');
// }
// else if (gotNumber>=60 && gotNumber<70){
//     console.log('Your result is C');
// }
// else if (gotNumber>=70 && gotNumber<80){
//     console.log('Your result is B');
// }
// else if (gotNumber>=80 && gotNumber<90){
//     console.log('Your result is A');
// }
// else if (gotNumber>=90){
//     console.log('Your result is A+');
// }
// else('Your resul in not found');




//******  practice problem 11 ******//
// let signal = 'yellowv';
// if(signal === 'green'){
//     console.log('You should cross the road.')
// }
// else if(signal === 'yellow'){
//     console.log('You should stop cross the road.')
// }
// else if(signal === 'red'){
//     console.log('This zone is danger now.')
// }
// else{
//     console.log("Please input 'green' or 'yellow' or 'red'.")
// }




//******  practice problem 12 ******//
// let dailyRoutine = ['1.Unlock module before 8pm', '2.Watch videos ontime', '3.Take notes while watching videos', '4.Practice after complete watching videos', '5.if dont understand something'];

// for(let j = 1 ; j <=10 ; j++){
//     console.log(j);

//         /** nested for loop start **/
//      for(let i = 0; i < dailyRoutine.length; i++ ){
//        let dailyTask = dailyRoutine[i];
//        console.log(dailyTask);
//        if(dailyTask == dailyRoutine[4]){
//         console.log('>> Go to support session.');
//        }
//      }
//       /** nested for loop start **/
      
// }




//******  practice problem 13 ******//
// let dailyRoutine = ['1.Unlock module before 8pm', '2.Watch videos ontime', '3.Take notes while watching videos', '4.Practice after complete watching videos', '5. If dont understand something'];

// let j = 1;
// while(j <= 10){
//     console.log(j);
//     j++;

//     /**nested while loop start**/
//     let i = 0;
//     while(i < dailyRoutine.length){
//         let dailyTask = dailyRoutine[i];
//         console.log(dailyTask);
//         i++;
//         if(dailyTask === dailyRoutine[4]){
//             console.log('>> Go to support session.')
//         }   
//      } 
//      /**nested while loop end**/

// }




//******  practice problem 14 ******//
// let dailyRoutine = ['1.Unlock module before 8pm', '2.Watch videos ontime', '3.Take notes while watching videos', '4.Practice after complete watching videos', '5. If dont understand something'];

// let j = 10;
// while(j >= 1){
//     console.log(j);
//     j--;
//     /**nested while loop start**/
//     let i = 0;
//     while(i < dailyRoutine.length){
//         let dailyTask = dailyRoutine[i];
//         console.log(dailyTask);
//         if(dailyTask === dailyRoutine[4]){
//             console.log('>> Go to support session.')
//         }
//         i++;
//     }
//     /**nested while loop end**/

// }




//******  practice problem 15 ******//

// let dailyRoutine = ['1.Unlock module before 8pm', '2.Watch videos ontime', '3.Take notes while watching videos', '4.Practice after complete watching videos', '5. If dont understand something'];

// for( let j = 10; j >= 1 ; j--){
//     console.log(j);

//     /**nested loop start**/
//     for(let i = 0 ; i < dailyRoutine.length; i++ ){
//        let dailyTask = dailyRoutine[i];
//         console.log(dailyTask);
//         if(dailyTask === dailyRoutine[4]){
//             console.log('>> Go to support session.');
//         }
//     }
//     /**nested loop end**/

// }

