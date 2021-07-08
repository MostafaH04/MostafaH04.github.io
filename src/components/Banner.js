import background from './images/back.png';
import git from './images/git.png';
import linkedin from './images/link.png';
import devpost from './images/dev.png';
import instagram from './images/ig.png';

const Banner = () => {
    return (
        <section class = "banner">
            <img src = {background}/>
            <div class = "content">
                <h1>Mostafa Hussein</h1>
                <h3>High School Student</h3>
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
                <p>About Me</p>
                <p>Resume</p>
                <p>Portfolio</p>
                <p>Contact Me</p>
            </div>
        </section>
    );
};

export default Banner;