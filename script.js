const allBtn = document.getElementsByClassName("all-btn");
let seatBooked = 0;
const economy = "Economy";
const fixedPrice = 550;
let totalPrice = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (seatBooked < 4 && !btn.classList.contains("booked")) {
            // Selected Seats Count
            console.log(btn.classList)
            btn.classList.add("booked");
            seatBooked++;
            btn.style.backgroundColor = "#1DD100";

            // Total price count
            totalPrice = seatBooked * fixedPrice;
            // console.log(totalPrice);
            
            const calculatedTotalPrice = document.getElementById("total-Price").innerText;
            const transferPrice = parseInt(calculatedTotalPrice)
            document.getElementById("total-Price").innerText = transferPrice +parseInt(totalPrice) ;
            
            // Grand total

            


            // Seat List
            const seatNo = btn.textContent.trim();
            const selectedContainer = document.getElementById("selected-container");
            const li = document.createElement("li");
            const seat = document.createElement("p");
            seat.innerText = seatNo;
            const Bogi = document.createElement("p");
            Bogi.innerText = economy;
            const price = document.createElement("p");
            price.innerText = fixedPrice;

            li.appendChild(seat);
            li.appendChild(Bogi);
            li.appendChild(price);
            selectedContainer.appendChild(li);

        } else if (seatBooked >= 4) {
            alert("You cannot select more than 4 seats!");
        }

        

        setInnerText("totalTicket", seatBooked);
        setInnerText("seatsLeft", 40 -seatBooked);
        setInnerText("total-Price",totalPrice);
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
