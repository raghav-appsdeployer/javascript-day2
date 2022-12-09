// question 1
const question1 = () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};

question1();

// question2

var num1 = 3,
  num2 = 4;
const question2 = () => {
  console.log(num1 + num2);
};

question2();

// question3
const question3 = () => {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
};

question3();

// question4
const question4 = () => {
  let str = "Apple is red in color";
  console.log(str.startsWith("Apple "));
  console.log(str.endsWith("color"));
  console.log(str.includes("red"));
};
question4();

// question5
const question5 = () => {
  let str = "This house is sold for 2500000 this morning";
  const num = 20;
  let filternum = Number(str.match(/\d+/g));
  console.log(filternum);
};

question5();

// question6
const question6 = () => {
  const str = "abcdefgh";
  const arr = Array.from(str);
  arr.splice(4, 1, "r");
  let newArr = arr.toString().split(",").join("");
  console.log(newArr);
};
question6();
// question7
const question7 = () => {
  let str = "abc\t";
  console.log(str.length);
};
question7();

// question8
const question8 = () => {
  let str = "Sky is Blue";
  console.log(str);
  str = Array.from(str);
  console.log(str);
};
question8();

// question9
const question9 = () => {
    const x = prompt('enter first value')
    const y = prompt('enter second value')
    const z  = prompt('enter third value')
    const arr = [x,y,z]
    console.log(arr)
};

// question10
const question10 = () => {
  let x = [1, 2, 3, 0],
    y = [];
  for (i = 0; i < x.length; ++i) {
    if (x[i] == 0) {
      x.push(4);

      x.push(5);

      x.push(6);
    } else y.push(x[i]);
  }
  console.log(y);
};

question10();
// question11
const question11 = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const newArr = arr.filter((a) => {
    return a % 3 === 0;
  });
  console.log(newArr);
};

question11();

//question12

const question12 = () => {
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.map((a) => {
    return a * a * a;
  });
  console.log(newArr);
};
question12();

//qestion13

const question13 = () => {
  const arr = [5, 10];

  const newArr = arr.reduce((a, b) => {
    return a * a + b * b;
  });
  console.log(newArr);
};

question13();
