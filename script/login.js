function logedin(){
    return `
    <div class="sidebarnavbar">
      <div id="signup"><h1>SIGN IN</h1></div>
      <div id="login">
        <div class="name">
          <label for="">Email address</label>
          <input type="text"   id="email">
      </div>

      <div class="name">
          <label for="">Password</label>
          <input  id="password" type="password">
      </div>

      <p id="error"></p>
      <div id="sub5" class="name">
         <h1>LOGIN</h1>
      </div>

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
    <div id="notac">
      <i class="far fa-user" id="noticon"></i>
      <p>No account yet?</p>
      <p>Welcome to Kimaye! Help us with a few details before you begin enjoying our safe and tasty fruits.</p>
    </div>
    <div id="sub1" class="name">
      <h1>Creaet Account</h1>
   </div>
      </div>
    </div> `
}
export default logedin