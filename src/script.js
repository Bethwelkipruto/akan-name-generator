const form = document.getElementById("akanForm");
const result = document.getElementById("result");

const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // JavaScript months are 0-indexed
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    
    const birthDate = new Date(year, month, day);

    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month ||
        birthDate.getDate() !== day
    ) {
        result.textContent = "Invalid date. Please check and try again.";
        result.style.color = "red";
        return;
    }

    const dayIndex = birthDate.getDay(); 
    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

    result.innerHTML = `You were born on a <strong>${days[dayIndex]}</strong>. Your Akan name is <strong>${akanName}</strong>.`;
    result.style.color = "green";
});
