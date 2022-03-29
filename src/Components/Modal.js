import React from 'react'
import "./Modalstyle.css"
const Modal = ({setIsModalOpen}) => {
  return (
    <>
    
  <div className='modal'>
       


  <button onClick={()=>{setIsModalOpen(false)}}>x</button>
  
        <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="index.html" class="sign-in-form" name="contact">
            <h2 class="title">Login</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" required="true" />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" required="true" />
            </div>
            <input type="submit" value="Login" class="btn solid loginbutton" />

            <p class="social-text">Or Login with social platform</p>

            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="index.html" class="sign-up-form" name="contact">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" required="true" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required="true" />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" required="true" />
            </div>
            <input
              type="submit"
              value="Sign up"
              class="btn solid registerbutton"
            />

            <p class="social-text">Or Sign up with social platform</p>

            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>SignUp Yourself For Better Experince.</p>
            <button class="btn transparent" id="sign-up-btn">Sign up</button>
          </div>
          <img src="rocket.svg" class="image" />
        </div>

        <div class="panel right-panel">
          <div class="content">
            <h3></h3>
            <p>Already Have An Account</p>
            <button class="btn transparent" id="sign-in-btn">Log In</button>
          </div>
          <img src="desk.svg" class="image" />
        </div>
      </div>
    </div>
        </div></>
  )
}

export default Modal