function login() {
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    
    if(username && password){
      errorMsg.textContent = 'Login successful!';
      errorMsg.style.color = 'green';
      window.location.href = 'home.html'
    } else {
      errorMsg.textContent = 'Enter Required fields';
      errorMsg.style.color = 'red';
    }
  }