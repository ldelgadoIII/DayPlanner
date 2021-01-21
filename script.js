// DEPENDENCIES ===========================
// connect to container to append time block
let timeBlockContainer = $(".container");
// connect to the save button for each individual time block

// STARTING DATA ==========================
// An array to save data objects for time-blocks
let timeBlocks = [];
let timeCondition = "present";

// FUNCTIONS ==============================
// display time blocks

let divTag = $('<div class="row time-block">');
divTag.html(`<div class="hour col-md-1">9:00</div>
<textarea class="description col-md-10 ${timeCondition}">Description</textarea>
<button class="col-md-1 btn saveBtn">Save</button>`);
timeBlockContainer.append(divTag);

// something to save the data within the time block
// something to change the color of the text areas depending on the time of day

// INITIALIZE =============================
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
