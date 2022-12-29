document.onkeydown = function (cc) {
    if(cc.which == 85){
        return false;
    }
}

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
}, false);

document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});

a = myheader.innerHTML = `
    <div class="navbar">
        <span class="logo">
            <img src="Extras/Logo/DC.png" width="100rem" height="100rem" alt="logo" class="logo-image">
            <a href="index.html" class="logo-name"><text class="dharmesh">Dharmesh</text>Chowdhary</a>
        </span>
        <span class="links">
            <ul>
                <li><a href="1.0 Portfolio.html">Portfolio</a></li>
                <li><a href="2.0 Community.html">Community</a></li>
                <li><a href="3.0 Connect.html">Connect</a></li>
            </ul>
        </span>
        <span class="dark-mode">
            <img src="#" alt="dark-mode" class="dark-mode">Dark
        </span>
    </div>
`;

b = myfooter.innerHTML = `
    <hr>
    <div class="footer">
        <div class="social-links footer-innerdivs">
            <h1>Social</h1>
            <ul>
        <!--    <li><a href="#" target="blank">Instagram</a></li>
                <li><a href="#" target="blank">Twitter</a></li>    -->
                <li><a href="https://www.linkedin.com/in/dharmesh-chowdhary/" target="blank">LinkedIn</a></li>
                <li><a href="https://github.com/dharmeshchowdhary" target="blank">GitHub</a></li>
        <!--    <li><a href="#" target="blank">WhatsApp</a></li>
                <li><a href="#" target="blank">e-mail</a></li>    -->
            </ul>
        </div>
        <div class="other-links footer-innerdivs">
            <h1>Other links</h1>
            <ul>
                <!-- <li><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeB57Kt8XaDfTEoF6ZoI66-1HNgFRNLpHaxMyNqxE58wlEMjg/viewform?embedded=true" width="640" height="1625" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></li> -->
                <li><a href="https://forms.gle/2A3Vsq1YBTF1uimH7" target="blank">Start-up</a></li>
            </ul>
        </div>
    </div>
    <div class="info">
        <h2>Made with ❤ by Dharmesh Chowdhary</h2>
        <text>Using HTML, CSS, JavaScript</text>
        <text>Owner of the project and the code</text>
    </div>
    <hr>
`;