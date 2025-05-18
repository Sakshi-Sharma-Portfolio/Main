:root {
    --primary: #4361ee;
    --primary-dark: #3a56d4;
    --secondary: #3f37c9;
    --accent: #4895ef;
    --dark: #1e1e24;
    --light: #f8f9fa;
    --gray: #6c757d;
    --light-gray: #e9ecef;
    --success: #4cc9f0;
    --warning: #f72585;
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Playfair Display', serif;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    color: var(--dark);
    line-height: 1.6;
    background-color: var(--light);
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: var(--font-secondary);
    font-weight: 700;
    line-height: 1.2;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    height: auto;
}

ul {
    list-style: none;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 80px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 2.5rem;
    color: var(--dark);
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
}

.section-header .section-subtitle {
    color: var(--gray);
    font-size: 1.1rem;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 500;
    transition: var(--transition);
    text-align: center;
    cursor: pointer;
}

.btn-primary {
    background: var(--primary);
    color: white;
    border: 2px solid var(--primary);
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    background: white;
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: var(--transition);
}

.navbar.scrolled {
    padding: 15px 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-links a {
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links a:hover {
    color: var(--primary);
}

.btn-nav {
    padding: 10px 20px;
    background: var(--primary);
    color: white;
    border-radius: 50px;
    font-weight: 500;
    transition: var(--transition);
}

.btn-nav:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background: var(--dark);
    margin: 5px 0;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    position: relative;
    overflow: hidden;
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-content {
    flex: 1;
    max-width: 600px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--dark);
    line-height: 1.2;
}

.hero .subtitle {
    font-size: 1.2rem;
    color: var(--gray);
    margin-bottom: 30px;
}

.hero-btns {
    display: flex;
    gap: 20px;
}

.hero-image {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
}

.image-wrapper {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 20px;
    background: white;
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="50" height="50" x="0" y="0" fill="%234361ee" opacity="0.1"></rect><rect width="50" height="50" x="50" y="50" fill="%234361ee" opacity="0.1"></rect></svg>');
    background-size: 50px 50px;
    opacity: 0.5;
}

.glow {
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(67, 97, 238, 0.3) 0%, transparent 70%);
    animation: glow-animation 8s infinite alternate;
}

@keyframes glow-animation {
    0% {
        transform: translate(-25%, -25%);
    }
    100% {
        transform: translate(-75%, -75%);
    }
}

/* About Section */
.about-content {
    display: flex;
    gap: 50px;
    align-items: center;
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    color: var(--dark);
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
}

.skill-tag {
    background: var(--light-gray);
    color: var(--dark);
    padding: 8px 15px;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition);
}

.skill-tag:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
}

.about-stats {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.stat-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.stat-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 10px;
    font-family: var(--font-secondary);
}

.stat-text {
    color: var(--gray);
    font-size: 1rem;
}

/* Articles Section */
.articles {
    background: var(--light-gray);
}

.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.article-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    padding: 30px;
}

.article-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.article-category {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 15px;
}

.article-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--dark);
}

.article-card p {
    color: var(--gray);
    margin-bottom: 20px;
}

.article-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary);
    font-weight: 500;
    transition: var(--transition);
}

.article-link i {
    margin-left: 5px;
    transition: var(--transition);
}

.article-link:hover {
    color: var(--primary-dark);
