// DEPENDENCIES ===========================
// connect to container to append time block
let timeBlockContainer = $(".container");
// connect to the save button for each individual time block

// STARTING DATA ==========================
let descriptions = [];
let timeCondition = "future";
let timeCurrent = [9, 10, 11, 12, 1, 2, 3, 4, 5];

// FUNCTIONS ==============================
// Run when the page loads
function init() {
  displayTimeBlocks();

  // Retrieve stored data
  let storedText = localStorage.getItem("textAreaVals");
  console.log(descriptions);
  console.log(typeof storedText);
}

// display 12 rows of time blocks
function displayTimeBlocks() {
  for (let i = 0; i < 9; i++) {
    let divTag = $('<div class="row time-block">');
    divTag.html(`<div class="hour col-md-1">${timeCurrent[i]}:00</div>
      <textarea class="description col-md-10 ${timeCondition}" id="saveBtn-${i}" placeholder="Description"></textarea>
      <button class="col-md-1 btn saveBtn" id="saveBtn" value="${i}">Save</button>`);
    timeBlockContainer.append(divTag);
  }
}

// something to save the data within the time block
// something to change the color of the text areas depending on the time of day

// INITIALIZE =============================
init();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// USER INTERACTIONS ======================
// Listen for when save button is clicked to save value in textarea
$("button").on("click", function () {
  let saveBtnVal = $(this).val();
  let currentTextVal = $(`#saveBtn-${saveBtnVal}`).val();
  descriptions.push(currentTextVal);
  console.log(typeof descriptions);
  localStorage.setItem("textAreaVals", descriptions);
});

console.log(moment.format("H"));

// console.log(currentTextVal);
// console.log(descriptions[saveBtnVal]);
// let currentTextID = "#" + $(`#saveBtn-${currentBtnVal}`).attr("id");
// console.log($(`#saveBtn-${currentBtnVal}`).attr("id"));
// console.log("The value of this text area is " + $(this).val());
// console.log("The value of this text area is " + $(this).attr("id"))
