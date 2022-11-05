
function login(){
    return ` <div id="para">
    <h1>Login</h1>
    <form action="">
        <div>
            <input type="text" placeholder="Enter username" id="username2">
        </div>
        <div>
            <input type="password" placeholder="Enter Password" id="password2" >
        </div>

        <div>
        <button id="submit2">Login</button>
        </div>
    </form>

</div>`
}

function signup(){
    return ` <div id="para">
    <h1>SignUp</h1>
    <form action="">
    <div>
        <input type="text" placeholder="Enter your name" id="name">
     </div>
        <div>
            <input type="text" placeholder="Enter username" id="username">
        </div>
        <div>
            <input type="text" placeholder="Enter Password" id="password">
        </div>

        <div>
        <button id="submit">Sign up</button>
        </div>
    </form>

</div>` 
    

}


export {login,signup} ;