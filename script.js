document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("guestForm")
    const input = document.getElementById("guestName")
    const guestList = document.getElementById("guestList")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = input.value.trim();

        if (!name) return;

        if (guestList.children.length >=10){
            alert("Guest list is full. Maximum of 10 guests allowed.");
            return;
        }
        const li = document.createElement("li");

        const rsvp = document.createElement("span")
        rsvp.textContent = "Not Attending";
        rsvp.classList.add("rsvp");
        rsvp.style.fontStyle = "italic";
        rsvp.style.color = "gray";

        rsvp.addEventListener("click", () => {
            rsvp.textContent =
              rsvp.textContent === "Attending" ? "Not Attending" : "Attending";
            rsvp.style.color = 
              rsvp.textContent === "Attending" ? "green" : "gray";
        })
        const nameSpan = document.createElement("span");
        nameSpan.textContent = name;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove");

        removeBtn.addEventListener("click", () => {
            li.remove();
        });

        li.append(nameSpan, rsvp, removeBtn);
        guestList.appendChild(li);

        input.value = "";
    })
})