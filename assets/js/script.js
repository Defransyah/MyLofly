const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }  


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  

  function toggleGallery() {
    const gallery = document.getElementById('gallerySection');
    gallery.classList.toggle('hidden');
  
    if (!gallery.classList.contains('hidden')) {
      // Scroll ke galeri setelah ditampilkan
      setTimeout(() => {
        gallery.scrollIntoView({ behavior: 'smooth' });
      }, 200); // jeda dikit biar animasinya muncul dulu
    }
  }
  
  

faders.forEach(fadeEl => observer.observe(fadeEl));
