
var inputName
const testform = document.getElementById('testform')
var format =     {
    "_id": "5fab824d98a43daa5c99d269",
    "lat": 14.0353155,
    "lng": 100.727394,
    "name": "หอประชุมมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
    "alias": [
        "a",
        "b",
        "3",
        "4"
    ],
    "updatedAt": "2020-11-11T06:34:45.626Z",
    "createdAt": "2020-11-11T06:18:53.707Z"
}

if(testform) {
    testform.addEventListener("submit" , (e) => {

        

    })
}

function getvalueapi() {
    
    fetch('https://quiet-harbor-07073.herokuapp.com/getmap')
        .then(res => res.json())
        .then(res => {
            
            document.getElementById("tryid").innerText = res
        })
        
}

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    format.name = inputVal
    
    // Displaying the value
    console.log(JSON.stringify(format))
}

function init(e) {
    
    

}


   

