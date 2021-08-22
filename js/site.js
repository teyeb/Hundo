
/**
 * Get the values from the page
 * This is the controller function
 */
function getValues(){

    //get values from the page
    let startValue = document.getElementById("startValueInput").value;
    let endValue = document.getElementById("endValueInput").value;

    //alert(startValue+" : "+endValue)
    
    try{
        startValue = parseInt(startValue);
        endValue = parseInt(endValue);

        if(!Number.isInteger(startValue)|| !Number.isInteger(endValue)){
            return document.getElementById("results").innerHTML = 
            `<tr><strong class="alarm">Only integers are permissible<br><br></strong></tr>`;
        }
        // call generate numbers
        let values = generateNumbers(startValue,endValue);
        //console.log(values)
         //call displayNumbers

        displayNumbers(values);
    }
    catch(error){
        document.getElementById("results").innerHTML = 
        `<tr><strong>Only integers are permissible<br><br>${error.message}</strong></tr>`;
    }
    
}


/**
 * Generate Numbers from the start to end values
 * This is the logic function
 */
function generateNumbers(start, end){
    let values = [];

    for(let i=start; i<=end;i++){
        values.push(i);
    } 
    return values;
}

/**
 * Displays even numbers as bold
 * This is the view function
 */
function displayNumbers(values){

    let table = document.getElementById("results"); 
        table.innerHTML = "";

   values.map(
       item =>{            
           return item%2===0?table.innerHTML += `<tr><td><strong>${item}</strong></td></tr>`
           :
           table.innerHTML += `<tr><td>${item}</td></tr>`
       }
   )
}