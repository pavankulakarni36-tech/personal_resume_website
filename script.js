
/* =================================
   WELCOME MESSAGE
================================= */

function welcomeMessage() {

    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    }
    else if (hour < 17) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Evening!";
    }

    alert(
        greeting +
        "\nWelcome to My Personal Resume Website!"
    );
}


/* =================================
   DISPLAY CURRENT DATE
================================= */

function displayDate() {

    let today = new Date();

    let date = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    let dateElement = document.getElementById("currentDate");

    if (dateElement) {
        dateElement.textContent = date;
    }
}


/* =================================
   PRINT RESUME OR BIODATA
================================= */

function printDocument() {
    window.print();
}


/* =================================
   PAGE LOADING
================================= */

document.addEventListener("DOMContentLoaded", function() {

    displayDate();

    console.log("Personal Resume Website Loaded Successfully!");

});
