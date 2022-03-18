import background from './images/back.png';
import git from './images/git.png';
import linkedin from './images/link.png';
import devpost from './images/dev.png';
import instagram from './images/ig.png';

const Banner = () => {
    var items = ['High School Student', 'Developer', 'Engineer'];
    var item = items[Math.floor(Math.random() * items.length)];
    return (
        <section class = "banner">
            <section class = "bottomWaves">
                <div class = "bottom wave1"></div>
                <div class = "bottom wave2"></div>
                <div class = "bottom wave3"></div>
                <div class = "bottom wave4"></div>
                <div class = "top wave1"></div>
                <div class = "top wave2"></div>
                <div class = "top wave3"></div>
                <div class = "top wave4"></div>
            </section>
            <div class = "content">
                <h1>Mostafa Hussein</h1>
                <h3>{item}</h3>
            </div>
            <div class = "links">
                <div class = "git">
                    <a href = "https://github.com/MostafaH04" target = "_blank">
                        <img src = {git}/>
                        <p>Github</p>
                    </a>
                </div>
                <div class = "ig">
                    <a href = "https://www.instagram.com/durpy._.banana" target = "_blank">
                        <img src = {instagram}/>
                        <p>Instagram</p>
                    </a>
                </div>
                <div class = "link">
                    <a href = "https://www.linkedin.com/in/mostafa-hussein-04" target = "_blank">
                        <img src = {linkedin}/>
                        <p>Linkedin</p>
                    </a>
                </div>
                <div class = "dev">
                    <a href = "https://devpost.com/MostafaH04" target = "_blank">
                        <img src = {devpost}/>
                        <p>Devpost</p>  
                    </a>
                </div>
            </div>
            <div class = "nav">
                <a href = "#aboutme">About Me</a>
                <a href = "https://drive.google.com/file/d/1a3I1CHtxwZnfcyMbPvrXwMktkEdkgcpv/view?usp=sharing" target = "_blank">Resume</a>
                <a href = "#portfolio">Portfolio</a>
                <a href = "#contact">Contact Me</a>
            </div>
        </section>
    );
};

export default Banner;