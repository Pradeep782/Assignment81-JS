// implements javascript in a strict mode.
"use strict";

// creating a $ function that fetches the elements of html
const $ = (selector) => document.querySelector(selector);

// creating a function for displaying errormsg where ever it is called.
const getErrorMsg = (lbl) => {
  return `amount should be between 0 and 99`;
};

// creating a function named focusAndSelect that shifts the focus and selects the particular input.
const focusAndSelect = (selector) => {
  $(selector).focus();
  $(selector).select();
};

// calculate function for performing the calculation
const calculate = () => {
  //    storing the cents value in to the varaiable cents
  const cents = parseFloat($("#cents").value);

  //   comparing the value stored in the cents and giving the alert message if input is invalid.
  if (cents > 99) {
    //    displaying the error msg by alert and by calling the   getErrorMsg function
    alert(getErrorMsg(""));
    // focusing and selecting the cents using focusAndSelect function
    focusAndSelect("#cents");
  } else {
    //calculating the number of quaters, dimes, nickels, pennies for given cents
    $("#quarters").value = Math.floor(cents / 25);
    $("#dimes").value = Math.floor((cents % 25) / 10);
    $("#nickels").value = Math.floor(((cents % 25) % 10) / 5);
    $("#pennies").value = cents % 5;
  }
};

// when the document is ready
document.addEventListener("DOMContentLoaded", () => {
  // adding the click event listener on the calculate
  $("#calculate").addEventListener("click", calculate);
  // using focus method that brings focus on the cents
  $("#cents").focus();
});
