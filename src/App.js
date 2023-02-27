
function App() {
  return (
    <>
    <header class="header">
  <nav class="nav">
    <ul class="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="home" class="section section-home">
    <h1>Welcome to My Portfolio</h1>
    <p>This is where I showcase my skills and experience.</p>
  </section>
  <section id="about" class="section section-about">
    <h2>About Me</h2>
    <p>Here's some information about me and my background.</p>
  </section>
  <section id="portfolio" class="section section-portfolio">
    <h2>My Portfolio</h2>
    <ul>
      <li><a href="#">Project 1</a></li>
      <li><a href="#">Project 2</a></li>
      <li><a href="#">Project 3</a></li>
    </ul>
  </section>
  {/* <section id="contact" class="section section-contact"> */}
    <h2>Contact Me</h2>
    {/* <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <input type="submit" value="Submit">
    </form> */}
  {/* </section> */}
</main>

<footer class="footer">
  <p>&copy; 2023 My Portfolio</p>
</footer>
    </>
  );
}

export default App;
