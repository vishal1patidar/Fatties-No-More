import React from 'react';

const Footer = () => (
     <footer className="footer_section_avez">
        <div className="avez_movie_footer_container">
            <div className="avez_movie_footer_logo">
                    <h1 style={{ marginBottom:"1rem" }}>Fatties No More</h1>
                    <div className="avez_movie_socials">
                        <ul>
                            <li>
                            <a href="https://www.facebook.com/profile.php?id=100011433727518"><i className="bx bxl-facebook" /></a>
                            <a href="https://www.instagram.com/vishal1patidar/"><i className="bx bxl-instagram" /></a>
                            <a href="https://twitter.com/Vishal1Patidar/"><i className="bx bxl-twitter" /></a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        <div className="branding_avez_dev">
            &copy; 2023 Vishal Patidar
        </div>
    </footer>
);

export default Footer;
