


let postPeep = document.getElementById("post-peep")

let peepsFeed = document.getElementById("peeps-feed"); 
        fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(res => res.json())
        .then(peeps => { 
            peeps.forEach(peep =>  {
                peepsFeed.innerHTML += `<h3>Chitter Post:</h3>
                <p><i> "${peep.body}" </i></p>
                <h6> @${peep.user.handle} </h6>` 
             }) 
        })




function grabPeepInputFromTextArea() {
    let content = document.getElementById("peep-input").value;
    return content;
}       


function signUpHandler() {
    let button = document.getElementById("create-account");
    button.addEventListener('click', clickEvent => {
        let signUpForm = document.getElementById("sign-up")
        signUpForm.innerHTML += `<form id="sign-up">
        <br>Sign Up:<br>
        <input id="first-name" type="text" placeholder="First Name"></input><br>
        <input id="last-name" type="text" placeholder="Last Name"></input><br>
        <input id="user-handle" type="text" placeholder="User Name"></input><br>
        <input id="email-address" type="text" placeholder="Email"></input><br>
        <input id="password" type="text" placeholder="password"></input><br>
        <br><input id="submit-account-details" type="submit" value="Submit"></input><br>
      </form>`
    })
}

signUpHandler();

// postPeep.addEventListener('click', eventClick => {
//     let peepsFeed = document.getElementById("peeps-feed");    
// })