import Link from "next/link";

const Navbar = () => {
  return (
    <div className={`navbar navbar-expand-lg bg-light navbar-light`}>
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="/static/image/logo.png"
              alt="logo picture"
              width={180}
            ></img>
          </a>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <Link href="/#home">
              <a className="nav-item nav-link active">Home</a>
            </Link>
            <Link href="/#about">
              <a className="nav-item nav-link">About</a>
            </Link>
            <Link href="/#service">
              <a className="nav-item nav-link">Service</a>
            </Link>
            <Link href="/#experience">
              <a className="nav-item nav-link">Experience</a>
            </Link>
            <Link href="/#portfolio">
              <a className="nav-item nav-link">Portfolio</a>
            </Link>
            <Link href="/#price">
              <a className="nav-item nav-link">Price</a>
            </Link>
            <Link href="/#review">
              <a className="nav-item nav-link">Review</a>
            </Link>
            <Link href="/#team">
              <a className="nav-item nav-link">Team</a>
            </Link>
            <Link href="/blog">
              <a className="nav-item nav-link">Blog</a>
            </Link>
            <Link href="/#contact">
              <a className="nav-item nav-link">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
