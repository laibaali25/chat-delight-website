document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message)
         {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } 
    else 
    {
        alert('Please fill out all fields.');
    }

// Email validation: must follow a standard email format

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) 
    {
    alert('Please enter a valid email address.');
    return;
}
   
document.getElementById('contact-form').reset();
});
