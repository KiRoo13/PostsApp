import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="wrapper-app">
        <header className="header">
          <div className="conteiner">
            <div className="header-content">
              <div className="header-content__logo">
                <img src="./img/logo.png" alt="logo" />
              </div>
              <nav className="header-content__nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/post">Post</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="conteiner">
            <Outlet />
          </div>
        </main>
        <footer className="footer">
          <div className="conteiner">
            <div className="footer-content">FOOTER</div>
          </div>
        </footer>
      </div>
    </>
  );
};
