// DEPENDENCIES ===========================
// connect to container to append time block
let timeBlockContainer = $(".container");
// connect to the save button for each individual time block

// STARTING DATA ==========================
let descriptions = [];
let timeCondition = "future";
let timeCurrent = [9, 10, 11, 12, 1, 2, 3, 4, 5];
let timeMilitary = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// FUNCTIONS ==============================
// Run when the page loads
function init() {
  displayTimeBlocks();

  // Retrieve stored data
  let storedText = JSON.parse(localStorage.getItem("textAreaVals"));
  console.log(descriptions);
  console.log(storedText[1]);
}

// Display 12 rows of time blocks
function displayTimeBlocks() {
  // Change the color of the textarea depending on the time of day
  for (let i = 0; i < 9; i++) {
    if (Number(moment().format("H")) === timeMilitary[i]) {
      timeCondition = "present";
    } else if (Number(moment().format("H")) > timeMilitary[i]) {
      timeCondition = "past";
    } else {
      timeCondition = "future";
    }

    let divTag = $('<div class="row time-block">');
    divTag.html(`<div class="hour col-md-1">${timeCurrent[i]}:00</div>
      <textarea class="description col-md-10 ${timeCondition}" id="saveBtn-${i}" placeholder="Description"></textarea>
      <button class="col-md-1 btn saveBtn" id="saveBtn" value="${i}">Save</button>`);
    timeBlockContainer.append(divTag);
  }
}

// INITIALIZE =============================
init();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// USER INTERACTIONS ======================
// Listen for when save button is clicked to save value in textarea
$("button").on("click", function () {
  let saveBtnVal = $(this).val();
  let currentTextVal = $(`#saveBtn-${saveBtnVal}`).val();
  descriptions[saveBtnVal] = currentTextVal;
  console.log(typeof descriptions);

  // save items pushed into description array into local storage
  localStorage.setItem("textAreaVals", JSON.stringify(descriptions));
  console.log("This is line 57 ", localStorage.getItem("textAreaVals"));
});
