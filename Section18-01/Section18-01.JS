// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng trên
// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền). 
// Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”
// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm cao nhất và in ra toàn bộ thông tin của học sinh đó

// Bài 1: 
// let people_if = {
//     name:"Nguyen Van A",
//     age:20,
//     adress:"HCM",
//     phone:"0123456789",
// }

// console.log(people_if.name);
// console.log(people_if.age);
// console.log(people_if.adress);
// console.log(people_if.phone);


// Bài 2: 
let student_list = [
    {
        id:1,
        name:"Nguyen Van A",
        gender:"Nam",
        age:20,
        mark:8,
    }
]

for(let i=0;i<2;i++){
let newname = prompt("nhap ten cua hoc sinh");
let newgender = prompt("nhap gioi tinh cua hoc sinh");
let newage = +prompt("nhap tuoi cua hoc sinh");
let newmark = prompt("nhap so diem cua hoc sinh");

let newStudent={
    id : student_list[student_list.length-1].id+1,
    name : newname,
    gender:newgender,
    age: newage,
    mark:newmark, 
}
student_list.push(newStudent);
}

for(let j=0 ; j<student_list.length;j++){
    console.log(`${j+1}.${student_list[j].name}:${student_list[j].mark}`);
}


let mark_max = 0;
for(let k=0 ; k<student_list.length;k++){
    if(student_list[k].mark >= mark_max){
        mark_max = student_list[k].mark;
    }else{mark_max = mark_max;}
}
console.log(mark_max);

