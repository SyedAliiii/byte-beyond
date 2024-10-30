import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
    <div className="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        <Link aria-label="Facebook"><i className="fa-brands fa-facebook" /></Link>
        <Link aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></Link>
        <Link aria-label="Mastodon"><i className="fa-brands fa-mastodon" /></Link>
        <Link aria-label="Instagram"><i className="fa-brands fa-instagram" /></Link>
    </div>
    <hr className="footer-break" />
    <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Footer Links</h3>
        <li><Link>Site Home</Link></li>
        <li><Link>Playground</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Sitemap</Link></li>
        <li><Link>Contents</Link></li>
    </ul>
    <p className="copyright">© 2024 SDavidPrince. Demo of a footer. Some Rights Reserved</p>
    </footer>


    </>
  )
}
