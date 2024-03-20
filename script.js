document.addEventListener("DOMContentLoaded", function() {
    const enrollButtons = document.querySelectorAll('.course button');
    
    enrollButtons.forEach(button => {
      button.addEventListener('click', function() {
        enrollCourse(this.parentNode);
      });
    });
    
    function enrollCourse(courseElement) {
      const courseName = courseElement.querySelector('h3').textContent;
      // Here you can add further logic like sending an AJAX request to enroll the user in the course
      alert(`You have successfully enrolled in ${courseName}!`);
    }
  });
  