function fun(){
    const location = document.getElementById('location').value
    fetch('/weather?address='+location).then((response)=>{
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