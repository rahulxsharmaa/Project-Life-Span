let name = document.getElementById('personName');
let age = document.getElementById('age');
let gender = document.getElementsByName('gender');
let smoke = document.getElementsByName('smoke');
let alcohol = document.getElementsByName('alcohol');
let excerciseStatus = document.getElementById('excerciseStatus');
let junkfoodStatus = document.getElementById('junkfoodStatus');


let nameError = document.getElementById('nameError')

let submitBtn = document.getElementById('submitBtn');
let resultHeading = document.getElementById('resultHeading');
let resultPara = document.getElementById('resultPara');



personName.addEventListener("blur", function (event) {
    if (event.target.value === "") {
        nameError.textContent = "*Required";
    }
    else {
        nameError.textContent = "";
    }
});

age.addEventListener("blur", function (event) {
    if (event.target.value === "") {
        ageError.textContent = "*Required";
    }
    else {
        ageError.textContent = "";
    }
});

let totalAge = 73;
let remainingAge = totalAge - age.value;


submitBtn.onclick = function (event) {
    event.preventDefault();
    if (age.value > 100 || age.value < 1 || personName.value === "" || age.value === "") {
        resultHeading.textContent = "Please fill the form correctly"
    }
    else {
        // resultHeading.textContent="";


        //for smoking
        for (let val of smoke) {
            if (val.checked && val.value === "Yes") {
                remainingAge = remainingAge - 5;
            }


            //for alcohol
            for (let val of alcohol) {
                if (val.checked && val.value === "Yes") {
                    remainingAge = remainingAge - 7;
                }
            }

            //for excercise
            if (excerciseStatus.value === "Regularly") {
                remainingAge = remainingAge - 0
            } else if (excerciseStatus.value === "Sometimes") {
                remainingAge = remainingAge - 2;
            }
            else if (excerciseStatus.value === "Never") {
                remainingAge = remainingAge - 7;
            }


            //for eating junkfood

            if (junkfoodStatus.value === "Daily") {
                remainingAge = remainingAge - 4
            } else if (junkfoodStatus.value === "Sometimes") {
                remainingAge = remainingAge - 2
            } else if (junkfoodStatus.value === "Never") {
                remainingAge = remainingAge - 0
            }


            //final result
            
            resultHeading.textContent = `Hey ${personName.value}, According to my calculation you have ${remainingAge} left`;

        }

        if (remainingAge > 50) {
            resultPara.classList.add('greenColor');
            resultPara.textContent = "You are healthy, I will suggest you to continue your healthy lifestyle";

        }
        else if(remainingAge <= 50){
            resultPara.classList.add('redColor');
            resultPara.textContent = "You should focus on your health";
        }


        personName.value="";
        age.value="";


    }




}




