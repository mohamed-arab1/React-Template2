import React from 'react';
import styled from 'styled-components';
import img1 from "../photos/pic01.jpg";
import img2 from "../photos/pic02.jpg";
import img3 from "../photos/pic03.jpg";



function About() {
    const aboutData = [
        {
            img: img1,
            title: "Sed ipsum dolor",
            text: "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
        },
        {
            img: img2,
            title: "Feugiat consequat",
            text: "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
        },
        {
            img: img3,
            title: "Ultricies aliquam",
            text: "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus."
        }
    ];
    return (
        <AboutSection id='about'>
            <div className="container">
                {
                    aboutData.map((about, index) => (
                        <div className="aboutSec" key={index}>
                            <div className="image">
                                <img src={about.img} alt={`image${index}`} />
                            </div>
                            <div className="content">
                                <h2>{about.title}</h2>
                                <p>{about.text}</p>
                                <button>learn more</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </AboutSection>
    )
}

const AboutSection = styled.div`
    min-height: 100vh;
    width: calc(100% - 18rem);
    margin-left: 18rem;

    .container{
        display: flex;
        flex-direction: column;

        .aboutSec{
            display: flex;
            .image{
                width: 30%;
                img{
                    width:100%;
                    height:100%;
                }
            }

            .content{
                width: 70%;
                background-color: #5052b5;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 3rem;
                gap: 4rem;

                h2{
                    color: white;
                    font-size: 2rem;
                }
                p{
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 1.2rem;
                    line-height: 1.7rem;
                }
                button{
                    width: 12rem;
                    height: 3rem;
                    background: transparent;
                    outline: none;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 3rem;
                    transition: 0.2s ease;
                    cursor: pointer;
                    text-transform: uppercase;

                    &:hover{
                        background-color: #ffffff36;
                        
                    }
                }
            }
        }
    }
@media screen and (max-width: 1080px){
    width: 100%;
    margin: 0;
}
@media screen and (max-width: 991px){
    .container{
        .aboutSec{
            flex-direction: column;
            .image{
                width: 100%;
                height: 360px;
                margin: 0;
                img{
                    height: 360px;
                }
            }
            .content{
                padding: 10px 15px;
                width: 100%;
                height: 380px;
                gap: 2rem;
            }
        }
    }
}
`

export default About;