import React from 'react';
import styled from 'styled-components';
import {AiFillLock} from "react-icons/ai";
import {BsCodeSlash} from "react-icons/bs";
import {FaCog} from "react-icons/fa";
import {AiOutlineDesktop} from "react-icons/ai";
import {GiCutDiamond} from "react-icons/gi";
import {FiLink} from "react-icons/fi";

function WhatWeDo() {
    const data = [
        {
            icon: AiFillLock,
            title: "Aliquam sed nullam",
            text: "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        },
        {
            icon: BsCodeSlash,
            title: "Lorem ipsum amet",
            text: "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        },
        {
            icon: AiOutlineDesktop,
            title: "Sed erat ullam corper",
            text: "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        },
        {
            icon: FaCog,
            title: "Veroeros quis lorem",
            text: "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        },
        {
            icon: GiCutDiamond,
            title: "Aliquam urna dapibus",
            text: "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        },
        {
            icon: FiLink,
            title: "Urna quis bibendum",
            text: "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        },
    ];
    return (
        <WhatWeDoSection id='what'>
            <div className="text-content">
                <h2>What we do.</h2>
                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
            </div>
            <div className="container">
                {
                data.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="icons">
                            <div className="icon">
                                <card.icon />
                            </div>
                        </div>
                        <div className="text">
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </div>
                        </div>
                    ))
                }
            </div>
            <div className="button">
                <button>learn more</button>
            </div>
        </WhatWeDoSection>
    )
}

const WhatWeDoSection = styled.div`
    width: calc(100%-18rem);
    min-height: 100vh;
    margin-left: 18rem;
    background-color: #b74e91;

    .text-content{
        padding: 3.5rem 2.5rem;

        h2{
            color: white;
            font-size: 2.2rem;
        }
        p{
            color: #ffffff8c;
            font-size: 1.3rem;
            margin-top: 2rem;
            line-height: 2rem;
        }
    }
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 2.5rem;
        

        .card{
            border: 1px solid rgba(255, 255, 255, 0.15);
            display: flex;
            padding: 2rem;
            background-color: #bb5797;
            .icons{
                .icon{
                    width:50px;
                    height: 50px;
                    background-color: white;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg{
                        font-size: 1.5rem;
                        color: #b74e91 ;
                    }
                }
            }
            .text{
                margin: 1rem 0 2rem 1rem;
                h2{
                    color: white;
                    font-size: 1.7rem;
                    margin-bottom: 1rem;
                }
                p{
                    color: #dcafcf;
                    font-size: 1.3rem;
                    line-height: 2rem;
                }
            }
        }
    }
    .button{
        button{
            width: 12rem;
            height: 3rem;
            margin: 2.5rem;
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
@media screen and (max-width: 1080px){
    width: 100%;
    margin: 0;
}
@media screen and (max-width: 991px){
    .container{
        grid-template-columns: repeat(1, 1fr);
    }
}
@media screen and (max-width: 576px){
    .text-content{
        padding: 1rem;
        h2{
            font-size: 1.7rem;
        }
        p{
            font-size: 1.1rem;
            line-height: 1.3rem;
            margin-top: 0.5rem;
        }
    }
    .container{
        margin: 0 1.5rem;
        .card{
            padding: 0;
            .icons{
                .icon{
                    margin: 0.5rem 0 0 0.5rem;
                    width:35px;
                    height: 35px;
                    svg{
                        font-size: 1.2rem;
                    }
                }
            }
            .text{
                margin: 1rem;
                h2{
                    font-size: 1.4rem;
                }
                p{
                    font-size: 1.1rem;
                    line-height: 1.3rem;
                }
            }
        }
    }
    .button{
        button{
            margin: 2rem;
        }
    }
}
`

export default WhatWeDo;