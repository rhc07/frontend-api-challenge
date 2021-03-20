let postPeep = document.getElementById("post-peep")

let listOfPeeps = document.getElementById("list-of-peeps"); 
        fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(res => res.json())
        .then(peeps => { 
            peeps.forEach(peep =>  {
                listOfPeeps.innerHTML += `<h3>Chitter Post:</h3>
                <p><i> "${peep.body}" </i></p>
                <h6> @${peep.user.handle} </h6>` 
             }) 
        })





// postPeep.addEventListener('click', eventClick => {
//     let listOfPeeps = document.getElementById("list-of-peeps");    
// })