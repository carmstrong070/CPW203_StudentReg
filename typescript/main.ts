class Student {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    constructor (fName: string, lName: string, dob: Date){
        this.firstName = fName;
        this.lastName = lName;
        this.dateOfBirth = dob;
    }

}
// Test code

let testStu: Student = new Student("f", "l", new Date(2019, 4, 18));

window.onload = function(){
    let regBtn  = <HTMLElement> document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}

function registerStudent(){
    let newStudent: Student = getStudent(); 
    displayStudent(newStudent);
}

function getStudent(): Student{
    let fnameInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_firstName");
    let lnameInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_lasstName");
    //let dobInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_dob");
    let stu: Student = new Student(fnameInput.value, lnameInput.value, new Date());

    return testStu;
}

function displayStudent(stu: Student){
    

    /*let list = document.querySelector("#roster > ul")
    list.appendChild(studentLI)*/
}