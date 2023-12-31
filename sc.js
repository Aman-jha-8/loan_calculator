function displaytResult(monthlyPayment,totalInterest)
{
    const resulDiv = document.getElementById("result");

    resulDiv.innerHTML = `
        <p><strong>Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest : ${totalInterest.toFixed(2)}</strong></p>

    `;
    console.log(`monthly payment: ${monthlyPayment}\ntotal intrest: ${totalInterest}`)
}

export default displaytResult
