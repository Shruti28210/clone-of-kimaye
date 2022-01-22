function createac(){
    return `
    <div id="signup"><h1>SIGN IN</h1></div>
    <div id="login">
        <div id="fb">
            <div>
               <a href=""><p>Signin with Facebook</p></a>
            </div>
        </div>
    
        <div id="gl">
            <div>
                <a href=""><p>Google Signup</p></a>
            </div>
        </div>
        <div class="name">
            <label for="">First Name</label>
            <input type="text"   id="name1">
        </div>
      <div class="name">
        <label for="">Last Name</label>
        <input type="text"  id="lastname1">
    </div>
    <div class="name">
        <label for="">Email address</label>
        <input type="text"   id="email1">
    </div>

    <div class="name">
        <label for="">Password</label>
        <input  id="password1" type="password">
    </div>

    <p id="error"></p>
    <div id="subreg" class="name">
       <h1>REGISTER</h1>
    </div>
  <div id="notac">
    <i class="far fa-user" id="noticon"></i>
    <p>No account yet?</p>sublogin
    <p>Welcome to Kimaye! Help us with a few details before you begin enjoying our safe and tasty fruits.</p>
  </div>

<button id="signin">LOG IN</button>
    </div>`
}
export default createac

