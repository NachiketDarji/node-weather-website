
console.log("MY JavaScript")

function fun(){
    const location = document.getElementById('location').value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        const p1 = document.getElementById('p1')
        if(data.error)
        {
            p1.textContent = data.error;
        }
        else{
        
        p1.textContent = data.latitude + ' ' + data.longitude;
        }
    })
})
}