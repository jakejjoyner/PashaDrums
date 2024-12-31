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

const icons = document.querySelector('#fade-in');
const observer = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting) {
    icons.classList.toggle( 'animation' );
    console.log("in view");
  }
  else {
    icons.classList.toggle( 'animation' );
    console.log("out of view");
  }
}
// {threshold: 5}
);
observer.observe(icons);