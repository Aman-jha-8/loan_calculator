import displaytResult from './sc.js'
import { showError } from './script.js';

function calculateLoan(){

    const loanAmount = Number.parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = Number.parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = Number.parseFloat(document.getElementById("loanTermInput").value);


    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        showError('Please enter Valid Numbers for all fields');
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displaytResult(monthlyPayment,totalInterest);

}

export { calculateLoan };

