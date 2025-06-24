 function updateLocation() {
    const newLoc = prompt("Enter new delivery location:");
    if (newLoc) {
      document.querySelector(".location span:first-child").textContent =
        "Delivering to " + newLoc;
    }
  }
 // Smooth scroll to top
   document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

   const footerLinks = document.querySelectorAll('.footer-column a');
  footerLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Footer link clicked: ${link.textContent}`);
      // You could send this data to an analytics platform here
    });
  });