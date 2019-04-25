class Student {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}

// Test code
let testStu: Student = new Student();
testStu.firstName = "First";
testStu.lastName = "Last";
testStu.dateOfBirth = new Date(1996, 11, 7);

window.onload = function(){
    let regBtn  = <HTMLElement> document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}

function registerStudent(){
    if (isValid()) {
       let nextStudent: Student = getStudent(); 
        displayStudent(nextStudent); 
    }
}

function isValid(){
    // validate all required elements
    let reqElems = document.querySelectorAll("main > input[data-required]");
    
    reqElems.forEach(element => {
        if ((<HTMLInputElement>element).value == "") {
            let span = element.nextElementSibling;
            let msg = span.getAttribute("data-msg");
            span.innerHTML = msg;
            return false;
        }
    });

    return true;
}

function getStudent(): Student{
    let fnameInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_firstName");
    let lnameInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_lastName");
    //let dobInput: HTMLInputElement = <HTMLInputElement> document.getElementById("txt_dob");
    let stu: Student = new Student();
    stu.firstName = fnameInput.value;
    stu.lastName = lnameInput.value;
    return stu;
}

function displayStudent(stu: Student){
    //<li> </li>
    let studentLI:HTMLLIElement = document.createElement("li");
    //<li>J. Doe</li>
    studentLI.innerText = stu.firstName + " " + stu.lastName;

    studentLI.onclick = function(){
        let agree = confirm("Are you sure you want delete?");
        if(agree){
            let currItem = <HTMLLIElement>this;
            currItem.remove();
        }
    }
    
    //getting <ul> and appending the new <li>
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}