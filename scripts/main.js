var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// Test code
var testStu = new Student();
testStu.firstName = "First";
testStu.lastName = "Last";
testStu.dateOfBirth = new Date(1996, 11, 7);
window.onload = function () {
    var regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    if (isValid()) {
        var nextStudent = getStudent();
        displayStudent(nextStudent);
    }
}
function isValid() {
    // validate all required elements
    var reqElems = document.querySelectorAll("main > input[data-required]");
    reqElems.forEach(function (element) {
        if (element.value == "") {
            var span = element.nextElementSibling;
            var msg = span.getAttribute("data-msg");
            span.innerHTML = msg;
            return false;
        }
    });
    return true;
}
function getStudent() {
    var fnameInput = document.getElementById("txt_firstName");
    var lnameInput = document.getElementById("txt_lastName");
    //let dobInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_dob");
    var stu = new Student();
    stu.firstName = fnameInput.value;
    stu.lastName = lnameInput.value;
    return stu;
}
function displayStudent(stu) {
    //<li> </li>
    var studentLI = document.createElement("li");
    //<li>J. Doe</li>
    studentLI.innerText = stu.firstName + " " + stu.lastName;
    studentLI.onclick = function () {
        var agree = confirm("Are you sure you want delete?");
        if (agree) {
            var currItem = this;
            currItem.remove();
        }
    };
    //getting <ul> and appending the new <li>
    var list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}
