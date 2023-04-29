const navbars = document.getElementById('nav');
navbars.innerHTML = `<header class="header">
<div class="header-top">
    <div class="container">
        <div class="countdown-text">
            <div class="dev">
                <span class="span skewBg">News : </span>
                <span class="span" style="color: white;display:flex">
                    <marquee behavior="scroll" direction="right" width="50%" loop="infinite" onmouseover="this.stop()" onmouseout="this.start()" style="display:flex">
                      <a id="news"></a>
                    </marquee>
                </span>
            </div>
        </div>
    </div>
</div>
<div class="header-bottom skewBg" data-header>
    <div class="container">
        <a href="/" class="logo">Rivana <sup style="font-size: small;">Blog</sup></a>
        <nav class="navbar" data-navbar>
            <ul class="navbar-list">

                <li class="navbar-item">
                    <a href="/" class="navbar-link skewBg" data-nav-link>Home</a>
                </li>

                <li class="navbar-item">
                    <a href="/blog" class="navbar-link skewBg" data-nav-link>Blog</a>
                </li>
                <li class="navbar-item">
                    <a href="/porto" class="navbar-link skewBg" data-nav-link>Contact</a>
                </li>
            </ul>
        </nav>
        <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <ion-icon name="menu-outline" class="menu"></ion-icon>
            <ion-icon name="close-outline" class="close"></ion-icon>
        </button>
    </div>
</div>
</header>`;


const footers = document.getElementById('kaki');
footers.innerHTML = `<div class="footer-top">
    <div class="container">
        <div class="footer-brand">
            <a href="#" class="logo">Rivana</a>
            <p class="footer-text">
                berbagi pendapat dan pengetahuan tentang programming
            </p>
            <ul class="contact-list">
                <li class="contact-item">
                    <div class="contact-icon">
                        <ion-icon name="location"></ion-icon>
                    </div>
                    <address class="item-text">
                        Nationality : Indonesia
                    </address>
                </li>
                <li class="contact-item">
                    <div class="contact-icon">
                        <ion-icon name="headset"></ion-icon>
                    </div>
                    <a href="tel:+241245654235" class="item-text">Phone : +62 853 XXXX XXX2</a>
                </li>
                <li class="contact-item">
                    <div class="contact-icon">
                        <ion-icon name="mail-open"></ion-icon>
                    </div>
                    <a href="mailto:raihanrivana08@gmail.com" class="item-text">Email :
                        raihanrivana08@gmail.com</a>
                </li>
            </ul>
        </div>
        <ul class="footer-list">
            <li>
                <p class="footer-list-title">Products</p>
            </li>
            <li>
                <a href="https://rivana.netlify.app/lp3i-mobile" class="footer-link">LP3i Mobile</a>
            </li>
            <li>
            </li>
            <li>
                <a href="https://skullcybersecurity.com" class="footer-link">SCS</a>
            </li>
        </ul>
        <ul class="footer-list">
            <li>
                <p class="footer-list-title">Other</p>
            </li>
            <li>
                <a href="#" class="footer-link">-</a>
            </li>
        </ul>
        <div class="footer-wrapper">
            <div class="footer-newsletter">
                <p class="footer-list-title">Newsletter Sign Up</p>
                <form action="" class="footer-newsletter">
                    <input type="email" name="email_address" aria-label="email" placeholder="Enter your email"
                        required class="email-field">
                    <button type="submit" class="footer-btn" aria-label="submit">
                        <ion-icon name="rocket"></ion-icon>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <div class="container">
        <p class="copyright">
            &copy; 2021 Rivana. All Right Reserved by <a href="#" class="copyright-link">Ordinaldev</a>
        </p>
    </div>
</div>
`;
