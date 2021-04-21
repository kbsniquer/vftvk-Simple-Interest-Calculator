// function to calc interest
function compute()
{
    // Declare variables for form values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validate entry for principal
    if (principal <= 0) {
        alert("Enter a positive number!");
        return false;
        principal.focus(); 
    }

    // Declare variable to calculate interest
    var interest = principal * years * rate / 100;

    // Variable to convert num of years to actual year
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>$"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>$"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

}
    
// function to update the rate on the range selector
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=(rateval+"%");
}