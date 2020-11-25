interface person {
  name: string;
  age: number;
}

const tom: person = {
  name: 'Tom',
  age: 25,
};

// if (tom.age === 25) {
//   console.log(tom.name + 'is 25 years old.');
// }
// // console.log(sss);

const Sum = (a: number, b: number): number => {
  // const a22 = '222';
  return a + b + 7;
};

export default Sum;
