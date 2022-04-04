    import React from 'react';

  import useLocalStorage from 'use-local-storage';
  import "./index.css"
  function App() {


  
    
    return (
      <div className="app" >
        <div className='login'>
          <h1>login</h1>
              <div className='container'>
                <div className='top'>
                  <i class='fab fa-google'></i>
                    <i class='fab fa-facebook-square'></i>
                    <i class='fab fa-linkedin'></i>
                    <i class='fab fa-twitter-square'></i>
                    <i class='fab fa-apple'></i>
                  </div>
                  <p  className='divider'> <span>or</span> </p>
                  <form>
                  <label>E-mail</label>
                  <input type="email" placeholder='Enter your email'></input>
                  <label>Password</label>
                  <input type="password" placeholder='Enter you password'></input>
                  <div className='remember'>
                  <input type="checkbox" checked="checked"/>
                  <p>Remember Me</p>
                  </div>
                  <button>Log in </button>
                  </form>
                  <div className='botton'>
                  
                  <p>Forget your password </p>
                  <a href='/'> Reset Password</a>            
                  </div>
                  <p className='create'>Creact Account</p>                
            </div>
            <div className='theme-toggle'>
            <h2> Light Theme</h2>
            <i  className='fas fa-toggle-on'></i>
            </div>
        </div>
      </div>
    );
  }

  export default App;
