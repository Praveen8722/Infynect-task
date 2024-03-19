function register() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    
    if(fullname && email && password){
      errorMsg.textContent = 'Registration successful!';
      errorMsg.style.color = 'green';
      window.location.href = 'home.html'
    } else {
      errorMsg.textContent = 'Enter Required fields';
      errorMsg.style.color = 'red';
    }
  }