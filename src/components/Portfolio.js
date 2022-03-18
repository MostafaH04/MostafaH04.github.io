import React, { useState } from 'react';
import lines from './images/lines4.svg';

function Portfolio() {
    const [currentPage, setCurrentPage] = useState(0);


    function software(){
        setCurrentPage(0);
    }
    function electrical(){
        setCurrentPage(1);
    }
    function hardware(){
        setCurrentPage(2);
    }

    let cardStyle = {
        backgroundColor: "white",
        borderRadius: "25px",
        margin: "50px",
        padding: "25px",
        textAlign: "left",
        color: "#0f3c73"
    }
    
    let divStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    }

    const projects = [
        [
            "Software",
            [
                {
                    title: "Guber",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954085502049476688/guber.png?width=1341&height=670",
                    desc: "Final project for the ICS4U0 course. A webapp made to provide more community cleanups and volunteering oppurtunities.",
                    link: "https://github.com/SiddharthN16/Guber/wiki"
                },
                {
                    title: "Magic Mouse",
                    image: "https://raw.githubusercontent.com/MostafaH04/MagicMouse-HTN2021/master/magicmouse.png",
                    desc: "Submission for Hack the North 2020++. Uses computer vision to allow for mouse control using hand movements.",
                    link: "https://devpost.com/software/magic-mouse"
                },
                {
                    title: "Monkey Host",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErnlNRHhZ-Em-nyeGRi0xc414S2tvQ4JcbcPp7wekLmgHhgXHRwus7SUvAKyeme4idSM&usqp=CAU",
                    desc: "Submission for BananaHacks. A discord bot combined with computer vision and hardware sensors to help host events while maintaing saftey measures.",
                    link: "https://devpost.com/software/monkey-host"
                },
                {
                    title: "Online Chess",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954095313679966238/unknown.png?width=645&height=671",
                    desc: "An an online chess application using pygame and firebase.",
                    link: "https://github.com/MostafaH04/Chess"
                },
                {
                    title: "Batikha OS",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954096191287738388/unknown.png?width=1137&height=671",
                    desc: "A replica of the MacOS UI, dubbed 'Batikha OS'. Made using processing for ICS2O0.",
                    link: "https://github.com/MostafaH04/BatikhaOS"
                },
                {
                    title: "PyBlock-3D",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954098374938886215/unknown.png?width=1145&height=671",
                    desc: "A game made using pygame to simulate 3D rendering in python and to replicate the game minecraft to some extent",
                    link: "https://github.com/MostafaH04/3d-block-game"
                },
                {
                    title: "Mask-On",
                    image: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/513/930/datas/medium.png",
                    desc: "Sumbission for Neighborhood Hacks. A computer vision solution for stores to ensure guests are wearing a mask upon entering.",
                    link: "https://devpost.com/software/mask-on-a1ndpb"
                },
                {
                    title: "Work Flow",
                    link: "https://devpost.com/software/time-flow",
                    desc: "Sumbission for JAMHacks V. An application to measure productivity in terms of time on a computer.",
                    image: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/542/279/datas/medium.png"
                }
            ]
        ],
        [
            "Electrical",
            [
                {
                    title: "Adder",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954110579096834058/unknown.png?width=921&height=671",
                    desc: "A 4 bit adder using 2 4-bit latch chips (74HC75) to store input, and a 4 bit adder chip (74HC283).",
                    link: "https://www.tinkercad.com/things/8jcnBbAUohb-copy-of-adder/editel?sharecode=bcwPGmi99soLrAtr4eT8KY1vZLGHGjjJYbRUkHRrNpA"
                },
                {
                    title: "Fibonacci's Sequence",
                    desc: "After loading 1 and 1 into the 4-bit latchs (75HC75), then setting the input to 0, this circuit can count till 21 in fibonaci's sequence or up to 5 bits of info.",
                    link: "https://www.tinkercad.com/things/jyySCVgTl1N-copy-of-fibonaccis-sequence/editel?sharecode=SlSWuLGY1r-CTD76f5klwa0bXCT7u8pnPkeLNpW38nw",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954111886373306438/unknown.png?width=875&height=671"
                },
                {
                    title: "Hand LEDs",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954121172793045022/184384776_944556336378446_5544735145185888494_n.png",
                    desc: "Using python serial communication along with computer vision to count number of raised fingers, which triggers the number of leds on.",
                    link: "https://github.com/MostafaH04/HandLEDS"
                },
                {
                    title: "555 Timer motor",
                    image: "https://github.com/MostafaH04/555-Timer-controlling-a-motor/blob/main/In-Person%20Circuit.png?raw=true",
                    desc: "Using a 555 timer to control the movement of a motor, causing it to oscilate.",
                    link: "https://github.com/MostafaH04/555-Timer-controlling-a-motor"
                },
                {
                    title: "Sound Vision",
                    desc: "Project for University of Waterloo Design for All program. Which uses an ultrasonic sensor and a servo to help those visually impaired or people working in the dark.",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954130569963380786/unknown.png",
                    link: "https://github.com/MostafaH04/ESQ-Sound-Vision"
                }
            ]
        ],
        [
            "Designs",
            [
                {
                    title: "Sound Vision",
                    desc: "A holder that was 3d printed for the Ultrasonic sensor used in that project. (Main project under electrical)",
                    link: "https://www.tinkercad.com/things/g8qMyMfyxb8-sound-vision",
                    image: "https://media.discordapp.net/attachments/388874244102160385/954134698395828234/unknown.png?width=906&height=671"
                },
                {
                    title: "Rocket Wing",
                    desc: "A design for a wing of a bottled water rocket for the grade 9 technology course. After being printed, it had the lightest weight yet for that class.",
                    link: "https://www.tinkercad.com/things/7QLrGIzzu4H-rocket-wing",
                    image: "https://cdn.discordapp.com/attachments/388874244102160385/954136398607298570/unknown.png"
                }
            ]
        ]
    ]

    return (
    <div id = "portfolio">
        <div class = "nav" style = {{paddingTop: "30px", paddingBottom: "40px"}}>
            <a href = "#software" onClick={software}>Software</a>
            <a href = "#electrical" onClick={electrical}>Electrical</a>
            <a href = "#Designs" onClick={hardware}>Designs</a>
        </div>
        <div id = "projects">
            <h1 style = {{color: "white", fontSize: "42px"}}>{projects[currentPage][0]}</h1>
            <div style = {divStyle}>
                {projects[currentPage][1].map((page) => (
                <div style = {cardStyle}>
                    <h2>{page.title}</h2>
                    <img style = {{width: "250px", height: "150px", objectFit: "cover" , backgroundColor: "rgb(100, 100, 100)", borderRadius: "10px", marginTop: "10px", marginBottom: "10px"}}src={(page.image)}/>
                    <p style = {{width: "250px"}}>{page.desc}</p>
                    <a href = {page.link} target = "_blank">View</a>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
