var Student = /** @class */ (function () {
    function Student(fName, lName, dob) {
        this.firstName = fName;
        this.lastName = lName;
        this.dateOfBirth = dob;
    }
    return Student;
}());
// Test code
var testStu = new Student("f", "l", new Date(2019, 4, 18));
window.onload = function () {
    var regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    var newStudent = getStudent();
    displayStudent(newStudent);
}
function getStudent() {
    var fnameInput = document.getElementById("txt_firstName");
    var lnameInput = document.getElementById("txt_lasstName");
    //let dobInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_dob");
    var stu = new Student(fnameInput.value, lnameInput.value, new Date());
    return testStu;
}
function displayStudent(stu) {
}
