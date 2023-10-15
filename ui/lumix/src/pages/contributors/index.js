import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import a custom CSS file for styling

const Contributors = () => {
  // Define an array of contributors with their names and GitHub profiles
  const contributors = [
    { name: "Jasleen Sondhi", github: "https://github.com/jasleen101010" },
    { name: "Aditya Kumar", github: "https://github.com/adityaK87" },
    { name: "Sarthak Sharma", github: "https://github.com/SuperALKALINEdroiD" },

    // Add your name if you are raising your PR
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-1">
              <Link to="/" className="text-white text-decoration-none">
                <h1>Lumix</h1>
              </Link>
            </div>
            <div className="col-md-11 text-end">
              <Link
                to="/contributors"
                className="text-white text-decoration-none"
              >
                <h5>Contributors of Lumix</h5>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Founder Section */}
      <section className="container mt-4 text-left">
        <h2>Meet the Maintainer</h2>
        <p>
          Hey there, I'm Gurkeerat, and you might know me as "keerat666" on
          GitHub. Coding is not just my passion; it's my way of life. 🌟
        </p>
        <p>
          I'm on an exciting journey of transitioning into the world of open
          source because I genuinely believe that coding should be within
          everyone's reach. It's a powerful tool for change, innovation, and
          self-expression, and I'm committed to making it accessible to all who
          want to pick it up.
        </p>
        <p>
          Lumix is a project close to my heart, and it reflects this vision.
          It's a platform where creativity meets code, and together, we're
          building an outstanding UI library for all. Feel free to connect with
          me anytime; I'm here to help and collaborate. You can reach me at{" "}
          <a href="mailto:gurkeeratsondhi@gmail.com">
            gurkeeratsondhi@gmail.com
          </a>
          . And, of course, check out my GitHub profile:{" "}
          <a href="https://github.com/keerat666">keerat666</a>.
        </p>
      </section>

      {/* Thank Contributors Section */}
      <section className="container mt-4 text-left contributors-list">
        <h2>Our Remarkable Contributors</h2>
        <p>
          I am deeply thankful to the individuals below whose exceptional
          contributions have been the driving force behind the Lumix project:
        </p>
        <ul>
          {contributors.map((contributor, index) => (
            <li key={index}>
              <a
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contributor.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Thank You Note */}
      <section className="container mt-4 text-left">
        <h2>A Heartfelt Gratitude 💖</h2>
        <p>
          Lumix is a testament to the extraordinary efforts of our contributors.
          Their dedication 🌟, creativity 🎨, and unwavering support 🤝 have
          transformed our vision into reality. I extend our deepest thanks to
          these incredible individuals 🙌 who have helped shape Lumix into an
          outstanding UI library. Special appreciation goes to HacktoberFest 🎃
          for sparking the inspiration behind this incredible journey 🚀.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2 mt-auto">
        &copy; Lumix - A HacktoberFest 2023 innovation!
      </footer>
    </div>
  );
};

export default Contributors;
