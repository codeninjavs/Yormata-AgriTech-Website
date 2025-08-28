///nav Hamburger


      const hamburger = document.getElementById('hamburger-menu');
        const nav = document.querySelector('header nav');
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        // Optional: close menu on link click (mobile)
        document.querySelectorAll('header nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            });
        });





// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Contact form submit handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! We will contact you soon.');
      form.reset();
    });
  }
});


 
new Swiper('.home-partner-swiper', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 2500,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          freeMode: true,
          freeModeMomentum: false,
          breakpoints: {
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 5 }
          }
  });



  $(document).ready(function(){
			/* by default hide all radio_content div elements except first element */
			$(".content .radio_content").hide();
			$(".content .radio_content:first-child").show();

			/* when any radio element is clicked, Get the attribute value of that clicked radio element and show the radio_content div element which matches the attribute value and hide the remaining tab content div elements */
			$(".radio_wrap").click(function(){
			  var current_raido = $(this).attr("data-radio");
			  $(".content .radio_content").hide();
			  $("."+current_raido).show();
			})
		});