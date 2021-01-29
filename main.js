const calendarButton = document.querySelector(".btn-start");
const calendarButtonReset = document.querySelector(".btn-reset");
const calendarContainer = document.querySelector(".container");


const calendarDay = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";
}

const createCalendar = () =>{
    for(let i = 0; i < calendarDay; i++){
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = `door${i+1}`;
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        
        calendarDoor.appendChild(calendarDoorText);


        courseNumber = i + 1;
        let coursePath = `./courses/image${courseNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null, coursePath));
       
    }
}
const resetCalendar = () =>{
    const resetDoor = document.querySelectorAll('.image');
    resetDoor.forEach(i => i.remove())
    // for(let i = 0; i <=resetDoor.length; i++){
    //    resetDoor[i].remove();     error nodelist to array
    }
       



calendarButton.addEventListener("click", createCalendar);
calendarButtonReset.addEventListener("click", resetCalendar);