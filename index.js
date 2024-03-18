const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday");
const ResultEl = document.getElementById("result")


function calculateAge(){
const birthdayValue = birthdayEl.value;
if(birthdayValue === ""){
    alert("Please, enter your birthday")
} else {
    const age = getAge(birthdayValue)
    ResultEl.innerText = `Your age is ${age} ${age > 1 ? "year" : "year"} Old`;
}

}




function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
     let age = currentDate.getFullYear() - birthdayDate.getFullYear();
     const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){ 
        age--;
    }
    return age;
}


btnEl.addEventListener("click", calculateAge)


 // Update clock every second
  setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);

  // Simulate fetching weather data
  setTimeout(() => {
    document.getElementById('weather').textContent = 'Sunny';
  }, 2000);

  // Simulate fetching temperature data
  setTimeout(() => {
    document.getElementById('temperature').textContent = '25°C';
  }, 4000);