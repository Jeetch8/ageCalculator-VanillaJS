const dob = document.getElementById("dob");
const date = new Date();
const currentDate = date.getDate();
const currentMnth = date.getMonth() + 1;
const currentYear = date.getFullYear();
const yearsDisp = document.getElementById("years");
const daysDisp = document.getElementById("days");
const monthDisp = document.getElementById("months");

if (currentDate < 10) {
  dob.setAttribute("max", `${currentYear}-${currentMnth}-0${currentDate}`);
} else {
  dob.setAttribute("max", `${currentYear}-${currentMnth}-${currentDate}`);
}

dob.addEventListener("change", (e) => {
  let selectedDate = e.target.value.split("-");
  console.log(selectedDate);
  if (currentYear < selectedDate[0]) {
    console.log(false);
  }
  yearsDisp.innerText = Math.abs(currentYear - selectedDate[0]);
  monthDisp.innerText = Math.abs(currentMnth - selectedDate[1]);
  daysDisp.innerText = Math.abs(currentDate - selectedDate[2]);
});
