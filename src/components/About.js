import personal from './images/personal.png';
import drip from './images/goop3.svg';

function About() {
    const secStyle = {
        padding: "50px",
        paddingTop: "150px",
        paddingBottom:"80px",
        backgroundImage: `url(${drip})`,
        backgroundRepeat: "repeat-x",
    }
    const flexCont = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap"
    }
    const titleStyle = {
        color: "rgb(52, 121, 250)",
        fontSize: "42px"
    }
    const textStyle = {
        fontSize: "18px",
        width: "40vw",
        fontWeight: "600",
        marginTop: "10px",
        lineHeight: "28px",
        letterSpacing: "2.5px"
    }
    const imgStyle = {
        borderRadius: "50%",
        width: "350px"
    }
    const btnSec ={
        marginTop: "10px",
        marginBottom: "20px",
        flexDirection: "column",
        fontWeight: "700",
        fontSize: "18px"
    }
    return (
    <div id = "aboutme" style={secStyle}>
        <div style={flexCont}>
            <div>
                <h1 style={titleStyle}>Hey👋</h1>
                <h3 style={textStyle}>I am Mostafa Hussein! An incoming first year Mechatronics Engineering student at the University of Waterloo with a passion for science and technology. I enjoy programming and electronics, and hope to pursue a career in robotics in the future. Currently, I am looking for new challenges to improve my skills and grow my network. Particularly focusing on web development and machine learning at the moment. Learn more about me by scrolling through my website!</h3>
                <div style = {btnSec}>
                <br />
                    <a href = "https://drive.google.com/file/d/1a3I1CHtxwZnfcyMbPvrXwMktkEdkgcpv/view?usp=sharing" target = "_blank" class = "btns">Resume</a><br /><br /><br />
                    <a href = "#contact" class = "btns">Contact Me</a>
                </div>
            </div>
            <div >
                <img style={imgStyle} src = {personal} />
            </div>
        </div>
        <div>

        </div>
    </div>
  );
}

export default About;
