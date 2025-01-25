import Link from "next/link";
import "@/styles/globals.css"; // Import global CSS file

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My Next.js App - Description of the app." />
        <meta name="keywords" content="Next.js, Web Development, React, App" />
        <title>My Next.js App</title>
      </head>
      <body>
        <div>
          {/* Navbar */}
          <header>
            <nav className="nav-style">
              <ul className="nav-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer>
            <p>&copy; 2025 Your Company</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
