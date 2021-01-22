// DEPENDENCIES ===========================
// connect to container to append time block
let timeBlockContainer = $(".container");
// connect to the save button for each individual time block

// STARTING DATA ==========================
let timeCondition = "future";
let timeCurrent = [9, 10, 11, 12, 1, 2, 3, 4, 5];
let timeMilitary = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let descriptions = [];

// FUNCTIONS ==============================
// Run when the page loads
function init() {
  // Retrieve stored data
  if (localStorage.getItem("textAreaVals")) {
    descriptions = JSON.parse(localStorage.getItem("textAreaVals"));
  }
  // Display planner
  displayTimeBlocks();
}

// Create rows of time blocks
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

    objectTemplate = { textArea: "" };
    descriptions.push(objectTemplate);

    let divTag = $('<div class="row time-block">');
    divTag.html(`<div class="hour col-md-1">${timeCurrent[i]}:00</div>
      <textarea class="description col-md-10 ${timeCondition}" id="saveBtn-${i}" placeholder="Nothing Scheduled">${descriptions[i].textArea}</textarea>
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
  descriptions[saveBtnVal].textArea = currentTextVal;

  // save items pushed into description array into local storage
  localStorage.setItem("textAreaVals", JSON.stringify(descriptions));
});
