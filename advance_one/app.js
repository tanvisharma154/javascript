const students = [
    {name:"tanvi",marks:90},
    {name:"madhav",marks:42},
    {name:"alish",marks:85}
];
const topper = students.filter(student =>student.marks >=80);
console.log(topper);