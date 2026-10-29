// One shared header and footer, including when an HTML file is opened directly.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const pages = [
    { file: 'index.html', label: 'Home' },
    { file: 'story.html', label: 'Story' },
    { file: 'quotes.html', label: 'Quotes' },
    { file: 'project.html', label: 'Project' },
    { file: 'machine.html', label: 'Machine' }
];
let navigationLinks = '';

for (const page of pages) {
    const active = page.file === currentPage ? ' aria-current="page"' : '';
    navigationLinks += `<li><a href="${page.file}"${active}>${page.label}</a></li>`;
}

document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
        <a class="logo" href="index.html" aria-label="Nezha Story Notes home">
            <img class="logo-mark" src="favicon.svg" alt="" width="32" height="32">
            <span class="logo-text">Nezha Story Notes</span>
        </a>
        <nav class="nav" aria-label="Primary">
            <ul class="nav-list">${navigationLinks}</ul>
        </nav>
    </div>`;

document.getElementById('site-footer').innerHTML = `
    <div class="footer-inner">
        <div class="footer-brand">
            <span class="footer-kicker">NEZHA STORY NOTES</span>
            <h2>A small beginning.</h2>
            <p>Created by Diancheng Jiang while learning to build for the web.</p>
        </div>
        <a class="footer-email" href="mailto:X20250059@stu.hibiuh.edu.cn">
            <span class="footer-email-label">Email me</span>
            <span class="footer-email-address">X20250059@stu.hibiuh.edu.cn</span>
            <span class="footer-email-arrow" aria-hidden="true">↗</span>
        </a>
        <div class="footer-bottom">
            <span>&copy; 2026 Diancheng Jiang</span>
        </div>
    </div>`;
