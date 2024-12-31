// import './style.css';

document.querySelector('#header').innerHTML = `
    <div id="logo-container">
      <a href="/">
        <h2 id="logo" class="julius-sans-one-regular">Pasha Drums</h2>
      </a>
    </div>
    <div id="nav">
      <ul id="nav-list">
        <li><a href="/" class="inter-regular" class="home">Home</a></li>
        <li><a href="/events/" class="inter-regular" class="events">Events</a></li>
        <li><a href="/media/" class="inter-regular" class="media">Media</a></li>
        <li><a href="/bio/" class="inter-regular" class="bio">Bio</a></li>
      </ul>
    </div>
`

const observer = new IntersectionObserver(entries => {
  let delay = 0;
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      setTimeout(() => {
      entry.target.classList.toggle( 'animation' );
      console.log("in view");
      }, delay);
      delay += 200;
      // observer.unobserve(entry.target);
    }
    else {
      if(entry.target.classList.contains('animation')) {
        entry.target.classList.toggle( 'animation' );
      }
      console.log("out of view");
      // observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
// observe the elements to be animated
const icons = document.querySelectorAll('#fade-in').forEach(el => {
  observer.observe(el);
});