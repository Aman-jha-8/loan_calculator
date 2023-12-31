import { calculateLoan } from './calculateloan.js';

function showError(message){
    const resulDiv = document.getElementById("result");
    resulDiv.innerHTML = ` <p class="error">${message}</p>`;
}

document.getElementById('calculateBtn').addEventListener("click",calculateLoan);

export { showError }
