// let matrix = [
//   [1, 2, 3],
//   [1, 8, 2],
//   [1, 4, 4]
// ];

// let result = [];

// for (let i = 0; i < matrix.length; i++) {
//   console.log("=====================================")
//   console.log(`მოქმედებები მასივზე : ${matrix[i]}`);
//   let a = matrix[i][0];
//   let b = matrix[i][1];
//   let c = matrix[i][2];
//   let d = b ** 2 - 4 * a * c;
//   if (d == 0) {
//     console.log(-b / (2 * a));
//     result.push([-b / (2 * a)]);
//   } else if (d > 0) {
//     let x1 = (-b - Math.sqrt(d)) / (2 * a);
//     let x2 = (-b + Math.sqrt(d)) / (2 * a);
//     console.log(x1, x2);
//     result.push([x1, x2]);
//   } else {
//     console.log("ფესვები არ გააჩნია");
//     result.push([]);
//   }
// }

//console.log(result);

/*
  1)10
  2)13
  3)15
  4)16
  5)20
*/

let firstArray = getArrayWithRandmoNumbers(10);
let secondArray = getArrayWithRandmoNumbers(20);

// fillArrayWithRandomNumbers(firstArray, 10);
// fillArrayWithRandomNumbers(secondArray, 13);

// console.log(firstArray, secondArray)

function fillArrayWithRandomNumbers(array, count) {
  for (let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * 100));
  }
}

function getArrayWithRandmoNumbers(count) {
  let tempArray = [];
  for (let i = 0; i < count; i++) {
    tempArray.push(Math.round(Math.random() * 100));
  }
  return tempArray;
}

/*
  შექმენით ფუნქცია რომელიც პარამეტრის სახით ღებულობს რაოდეონბას და
  დააბრუნეთ ამ რაოდენობის რენდომული ფერი მასივში მოთავსებული
*/

function getArrayWithRandomColors(count) {
  let tempArray = [];
  for (let i = 0; i < count; i++) {
    tempArray.push(getRandomRGBColor());
  }
  return tempArray;
}

function getRandomRGBColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

/*
  1)შექმენით ფუნქცია , რომელსაც გადაეცემა 3 პარამეტრი , კვდრატული განტოლების ფესვები
    თუ გააჩნია 1 ამონახსნი პირდაპირ რიცხვი
    თუ გააჩნია 2 ამონახსნი მაშინ მასივში 2 რიცხვი
    თუ არ გააჩნია მაშინ სტრინგის სახით არ გააჩNია
  2)არსებულ მატრიცაში გამოიტანეთ ფესვები 1 ფუნქციის გამოყენებით
  3)ფუნქციას გადაეცით არჩევანი სტრინგის ან რიცხვის საშუალებით
    მიღებული არჩევანით გამოიტანეთ შემდგომი ნაწილი:
    თუ მომხარებელმა გადასცა ფუნქციას 1 იანი მაშინ შემოაყვანინეთ კმ-ს ნიშნული და დააბრუნეთ რამდენი მილი იქნება ამ კმ ს საშუალებით
    იგივე ოღონდ საპირისპიროდ
    არასწორ გადაცამაზე დააბრუნეთ "error"
*/

// 1

// let array = [];
// function disc(a, b, c) {
//   let d = b * b - 4 * a * c;
//   if (d > 0) {
//     let x1 = (-b - Math.sqrt(d)) / (2 * a);
//     let x2 = (-b + Math.sqrt(d)) / (2 * a);
//     array.push("x1= ", x1, "x2= ", x2);
//     console.log(array);
//   } else if (d === 0) {
//     let x = -b / (2 * a);
//     // return x;
//     console.log("x =", x);
//   } else if (d < 0) {
//     console.log("დისკრიმინანტი ნაკლებია ნულზე");
//   }
// }
// disc(1, 2, 1);
// // disc(1, 2, 1);

// 2

function matrix_dics(count) {
  let array_test = [];
  for (let i = 0; i < count; i++) {
    array_test.push(Math.round(Math.random() * 100));
  }
  let a = array_test[0];
  let b = array_test[1];
  let c = array_test[2];
  let d = b * b - 4 * a * c;
  if (d > 0) {
    let x1 = (-b - Math.sqrt(d)) / (2 * a);
    let x2 = (-b + Math.sqrt(d)) / (2 * a);
    console.log("x1 = ", x1, "x2 = ", x2);
  } else if (d === 0) {
    let x = -b / (2 * a);
    console.log(`ამონახნს აქვს მხოლოდ ერთი ფესვი რომელიც არის ${x}`);
  } else if (d < 0) {
    console.log("დისკრიმინანტი ნაკლებია ნულზე");
  } else if (count === 2) {
    let a = array_test[0];
    let b = array_test[1];
    let d = b * b;
    if (d > 0) {
      let x = (-b - Math.sqrt(d)) / (2 * a);
      console.log("x = ", x);
    } else if (d == 0) {
      let x = -b / (2 * a);
      console.log("ამონახსნს მხოლოდ ერთი ფესვი აქვს რომელიც არის ", x);
    } else if (d < 0) {
      console.log("დისკრიმინანტი ნულზე ნაკლები არის");
    }
  }
  if (count <= 1) {
    console.log(
      "მხოლოდ ერთი ან ერთზე ნაკლები წევრით კვადრატული განტოლება ვერ შედგება. თუ შეიძლება დაამატეთ კიდევ ერთი ან ორი წევრი"
    );
  }
  console.log(array_test);
  if (count === 6) {
    let a = array_test[3];
    let b = array_test[4];
    let c = array_test[5];
    let d = b * b - 4 * a * c;
    if (d > 0) {
      let x1 = (-b - Math.sqrt(d)) / (2 * a);
      let x2 = (-b + Math.sqrt(d)) / (2 * a);
      console.log("x1= ", x1, "x2= ", x2);
    } else if (d === 0) {
      let x = -b / (2 * a);
      console.log(`ამონახნს აქვს მხოლოდ ერთი ფესვი რომელიც ტოლია ${x}`);
    } else if (d < 0) {
      console.log("დისკრიმინანტი ნაკლებია ნულზე");
    }
    console.log(array_test);
  }
}

matrix_dics(6);

// 3

// function kilometer(distance) {
//   if (distance == 1 || distance == "ერთი") {
//     let kilometer1 = 1.6;
//     let mile2 = 0.6;
//     console.log(
//       "ერთი მილი არის ",
//       kilometer1,
//       "კილომეტრი ხოლო ერთი კილომეტრი არის",
//       mile2,
//       "mili"
//     );
//   } else {
//     console.log("Error");
//   }
// }

// kilometer(3);
