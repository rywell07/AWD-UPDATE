function animateInput(element) {
    element.classList.add('input-animation');
    element.style.color = '#333'; 
  
    setTimeout(function() {
        element.classList.remove('input-animation');
        element.style.color = ''; 
    }, 500); 
}

document.addEventListener('DOMContentLoaded', function () {
    const formElements = document.querySelectorAll('#signup-form input');
    
    formElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });

        element.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });

    const signupButton = document.querySelector('button');
    signupButton.addEventListener('click', function() {
        signupButton.disabled = true;
        alert('Signed Up Successfully');
    });
});

