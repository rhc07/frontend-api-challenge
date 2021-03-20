let postPeep = document.getElementById("post-peep")

let listOfPeeps = document.getElementById("list-of-peeps"); 
        fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(res => res.json())
        .then(peeps => { 
            for(let i = 0; i < 50; i++ ){
            peeps.forEach(peep =>  {
                listOfPeeps.innerHTML += `<h3>Chitter Post</h3>
                <p> ${peep.body} </p>
                <h4> ${peep.user.handle} </h4>` 
             }) 
            }
        })





// postPeep.addEventListener('click', eventClick => {
//     let listOfPeeps = document.getElementById("list-of-peeps");    
// })