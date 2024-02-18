const allBtn = document.getElementsByClassName("all-btn");
let seatBooked = 0;
const economy = "Economy";
const fixedPrice = 550;
let totalPrice = 0;
let grandTotal = 0;
let couponApplied = false; // Initialize couponApplied

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (seatBooked < 4 && !btn.classList.contains("booked")) {
            // Selected Seats Count
            btn.classList.add("booked");
            seatBooked++;
            btn.style.backgroundColor = "#1DD100";

            // Total price count
            totalPrice = seatBooked * fixedPrice;

            const calculatedTotalPrice = document.getElementById("total-Price").innerText;
            const transferPrice = parseInt(calculatedTotalPrice);
            document.getElementById("total-Price").innerText = transferPrice + parseInt(totalPrice);

            // Grand total
            grandTotal = totalPrice; // Initially, grand total is same as total price

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
        setInnerText("seatsLeft", 40 - seatBooked);
        setInnerText("total-Price", totalPrice);
    });
}

const cuponBtn = document.getElementById('cupon-btn');
const couponContainer = document.getElementById('coupon-container'); // Added

cuponBtn.addEventListener('click', function () {
    const cuponCode = document.getElementById('cupon-input').value;
    const totalSeats = parseInt(document.getElementById('totalTicket').innerText);

    if (totalSeats >= 4) { // Check if at least 4 seats are booked
        if (cuponCode === "NEW15") { // Fixed the coupon code comparison
            
            if (!couponApplied) {
                const createList1 = document.getElementById('create-container1');
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.innerText = "Discount Price";
                const p2 = document.createElement('p');
                const discountPrice = totalPrice * 0.15;
                console.log(discountPrice);
                p2.innerText = discountPrice;
                li.appendChild(p);
                li.appendChild(p2);
                createList1.appendChild(li);
                const grandTotalElement = document.getElementById('grand-total');
                grandTotal = totalPrice - discountPrice; // Apply discount to the total price
                grandTotalElement.innerText = grandTotal;
                document.getElementById('cupon-input').value = "";
                const cuponInput = document.getElementById('cupon-input1');
                cuponInput.classList.add('hidden');
                couponApplied = true;
                couponContainer.style.display = 'none'; // Hide coupon input div
            } else {
                alert("Coupon code already applied!");
            }
            
        } 
        
        else if(cuponCode === "Couple 20"){
            if (!couponApplied) {
                const createList1 = document.getElementById('create-container1');
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.innerText = "Discount Price";
                const p2 = document.createElement('p');
                const discountPrice = totalPrice * 0.2;
                console.log(discountPrice);
                p2.innerText = discountPrice;
                li.appendChild(p);
                li.appendChild(p2);
                createList1.appendChild(li);
                const grandTotalElement = document.getElementById('grand-total');
                grandTotal = totalPrice - discountPrice; // Apply discount to the total price
                grandTotalElement.innerText = grandTotal;
                document.getElementById('cupon-input').value = "";
                const cuponInput = document.getElementById('cupon-input1');
                cuponInput.classList.add('hidden');
                couponApplied = true;
                couponContainer.style.display = 'none'; // Hide coupon input div
            } else {
                alert("Coupon code already applied!");
            }
            
        }

        else {
            alert("Invalid Coupon Code");
            document.getElementById('cupon-input').value = "";
        }
    } else {
        alert("Buy 4 Tickets to Apply Coupon!");
    }
});

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
