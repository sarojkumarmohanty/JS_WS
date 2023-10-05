//this is a common js file
import { fun, x, Shape } from "./newjs.js";

var fun1 = function () {
    console.log('ha ha');
};


fun();
console.log(x);
console.log(new Shape('rectangle'));


class AgeBound extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'AgeBoundError';
    }
}


var age = 24;
if (age < 20)
    throw new AgeBound("Age is less than 20  !!!");
else
    console.log("its absolutley fine!!!");





function myError() {
    console.log('fistLine');
    throw new Error('error hela');
    console.log(('lastList'));
}

function a() {
    console.log('f');
    try {
        myError();


    } catch (e) {
        console.log(e.stack);
    }
    console.log('l');
}

a();





// class Shape {
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }
// }

// class Rectangle extends Shape {
//     #height;
//     #width;
//     constructor(name, height, width) {
//         super(name);
//         this.#height = height;
//         this.#width = width;
//     }
//     findArea() {
//         return this.#height * this.#width;
//     }
// }

// class Circle extends Shape {
//     #redious;
//     constructor(name, redious) {
//         super(name);
//         this.#redious = redious;
//     }
//     findArea() {
//         return Math.PI * this.#redious * this.#redious;
//     }
// }




// var rec = new Rectangle('rec-1', 4, 5);
// console.log('are of rectangle is ' + rec.findArea());

// var cir = new Circle('cir-1', 5);
// console.log('area of cirlce of ' + cir.findArea());





// class AccountGenerator {
//     static n = 1000;
//     static getAccountNo() {
//         return 'BA' + (this.n++);
//     }
// }


// console.log(AccountGenerator.generateAccountNo());

// console.log(AccountGenerator.generateAccountNo());








// var list = document.querySelectorAll("li");
// console.log(list);
// //list = Array.from(list);
// list.forEach(function (x, i) {
//     if (i % 2 == 0)
//         x.style.color = 'red';
//     else
//         x.style.color = 'green';
// })

// var list = document.querySelector("#uList");
// //list = Array.from(list.children);
// list = list.;
// console.log(list);

// var b = document.querySelector("#sub_btn");
// console.log(b);
// b.addEventListener('mouseover', function (e) {
//     let t = document.querySelector("#task_id");
//     console.log(t.value);
//     e.preventDefault();
//     t.value = "";
// })

// var cardArea = document.querySelector("ul");
// cardArea.addEventListener('click', function (event) {
//     let tar = event.target;
//     if (tar.className == 'abc') {
//         tar.parentElement.parentElement.remove();
//     }

//     event.preventDefault();
// })

// document.querySelector("ul").addEventListener('click', function (e) {
//     console.log("ul clicked..");
//     e.stopPropagation();

// });
// document.querySelector(".card").addEventListener('click', function (e) {
//     console.log("card clicked..");


// });
// localStorage.setItem("name", "amit");
// sessionStorage.setItem("name", "sessaionAmit");

// window.addEventListener("load", () => console.log("window loaded."));
// document.addEventListener("DOMContentLoaded", () => console.log("loaded..."));


// var buttonsList = document.querySelectorAll("button");
// console.log(buttonsList);
// buttonsList.forEach(function (x) {
//     x.style.color = "red";
// })



//document.querySelector('h1').style.color = 'red';
//$('h1').css("color", "red");

// var rollId = document.querySelector("#roll");
// var btn_submit = document.querySelector("#submit_btn");
// console.log(rollId.value);
// rollId.addEventListener("input", number_check);

// function number_check(e) {
//     if (isNaN(rollId.value.trim()) == true) {
//         rollId.classList.add("is-invalid");
//         rollId.value = rollId.value.substring(0, rollId.value.length - 1).trim();
//         rollId.focus();
//     } else
//         rollId.classList.remove("is-invalid");
// }

// $("#main_title").css("color", 'blue');
// $("button").text("click");
// $("#new_link").text("link12");
// console.log($("#new_link").attr("href", "www.google.com"));

// $("input[type='text']").on("input", function (e) {

//     console.log($(this).val());
// });

// var el = document.createElement("p");
// el.innerText = 'xyz';

// $("#mh").append(el)

// $("button").on('click', function (e) {
//     $("#mh").slideToggle();
// })







// $(document).ready(function () {
//     // Validate Username
//     $("#usercheck").hide();
//     let usernameError = true;
//     $("#usernames").keyup(function () {
//         validateUsername();
//     });

//     function validateUsername() {
//         let usernameValue = $("#usernames").val();
//         if (usernameValue.length == "") {
//             $("#usercheck").show();
//             usernameError = false;
//             return false;
//         } else if (usernameValue.length < 3 || usernameValue.length > 10) {
//             $("#usercheck").show();
//             $("#usercheck").html("**length of username must be between 3 and 10");
//             usernameError = false;
//             return false;
//         } else {
//             $("#usercheck").hide();
//         }
//     }

//     // Validate Email
//     const email = document.getElementById("email");
//     email.addEventListener("blur", () => {
//         let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//         let s = email.value;
//         if (regex.test(s)) {
//             email.classList.remove("is-invalid");
//             emailError = true;
//         } else {
//             email.classList.add("is-invalid");
//             emailError = false;
//         }
//     });

//     // Validate Password
//     $("#passcheck").hide();
//     let passwordError = true;
//     $("#password").keyup(function () {
//         validatePassword();
//     });
//     function validatePassword() {
//         let passwordValue = $("#password").val();
//         if (passwordValue.length == "") {
//             $("#passcheck").show();
//             passwordError = false;
//             return false;
//         }
//         if (passwordValue.length < 3 || passwordValue.length > 10) {
//             $("#passcheck").show();
//             $("#passcheck").html(
//                 "**length of your password must be between 3 and 10"
//             );
//             $("#passcheck").css("color", "red");
//             passwordError = false;
//             return false;
//         } else {
//             $("#passcheck").hide();
//         }
//     }

//     // Validate Confirm Password
//     $("#conpasscheck").hide();
//     let confirmPasswordError = true;
//     $("#conpassword").keyup(function () {
//         validateConfirmPassword();
//     });
//     function validateConfirmPassword() {
//         let confirmPasswordValue = $("#conpassword").val();
//         let passwordValue = $("#password").val();
//         if (passwordValue != confirmPasswordValue) {
//             $("#conpasscheck").show();
//             $("#conpasscheck").html("**Password didn't Match");
//             $("#conpasscheck").css("color", "red");
//             confirmPasswordError = false;
//             return false;
//         } else {
//             $("#conpasscheck").hide();
//         }
//     }

//     // Submit button
//     $("#submitbtn").click(function () {
//         validateUsername();
//         validatePassword();
//         validateConfirmPassword();
//         validateEmail();
//         if (
//             usernameError == true &&
//             passwordError == true &&
//             confirmPasswordError == true &&
//             emailError == true
//         ) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// });

// let text = '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


// var text = '{"firstName":"John","lastName":"Doe","dob":"2023-01-12"}';
// const obj = JSON.parse(text);
// debugger;
// console.log(obj);
// console.log(JSON.stringify(obj));


// $("button").click(function () {
//     $.ajax({
//         url: "demo_test.json",
//         success: function (result) {
//             console.log(result.name);
//         }
//     });
// });


// $("button").click(function () {
//     $.ajax({
//         url: 'demo_test.txt',
//         type: 'get',
//         // data : {userName : userName,password: password,....},
//         // contentType: 'yourConentType', // ConentType that your are sending. No contentType needed if you just posting as query string parameters.
//         success: function (response) {
//             $("#sel1").html(response);
//         },
//         error: function (error) {
//             console.log(error)
//         }
//     });
// });

// $(document).ready(function () {
//     console.log('ready..');
// })

// $(window).on('load', function () {
//     console.log('window loaded...');
// })
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('doc loaded...');
// })

// window.addEventListener('load', function () {
//     console.log('window loaded...');
// })

// $("#fm1").submit(function (e) {
//     if (($("input[type='radio']:checked").length) == 0) {
//         alert('select radio');
//         return false;
//     }

//     if (($("input[type='checkbox']:checked").length) < 2)
//         alert('select atleasst two chcek box');

//     // $(this).submit();
//     e.preventDefault();
// })

//console.log($('#fm1 div:eq(1)').css('background', 'grey'));






