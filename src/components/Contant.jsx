import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiOutlineTwitter, AiFillYoutube  } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

function Contant() {
    return (
        <CotntactSection id='contact'>
            <div className="header">
                <h2>Get in touch</h2>
                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
            </div>
            <div className="container">
                <div className="content">
                    <div className="inputs">
                        <div className="input1">
                            <h3>Name</h3>
                            <input type="text" />
                        </div>
                        <div className="input2">
                            <h3>Email</h3>
                            <input type="email" />
                        </div>
                    </div>
                    <div className="text">
                        <h3>Message</h3>
                        <textarea></textarea>
                    </div>
                    <div className="buttons">
                        <button>Send Message</button>
                    </div>
                </div>
                <div className="information-side">
                    <div className="address">
                        <h3>Address</h3>
                        <span>El-Giza-Egypt</span>
                    </div>
                    <div className="email">
                        <h3>Email</h3>
                        <a href='#'>marab2411@gmail.com</a>
                    </div>
                    <div className="phone">
                        <h3>Phone</h3>
                        <span>+20 1099444563</span>
                    </div>
                    <div className="Social">
                        <h3>Social</h3>
                        <ul>
                            <li>
                                <BsFacebook />
                            </li>
                            <li>
                                <AiOutlineTwitter />
                            </li>
                            <li>
                                <AiFillYoutube />
                            </li>
                            <li>
                                <BsGithub />
                            </li>
                            <li>
                                <GrLinkedinOption />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </CotntactSection>
    )
}

const CotntactSection = styled.div`
    width: calc(100% - 18rem);
    min-height: 100vh;
    background-color: #231842;
    margin-left: 18rem;

    .header{
        padding: 3.5rem 2.5rem 2.5rem 2.5rem;
        color: white;
        h2{
            font-size: 2.2rem;
        }
        p{
            margin-top: 1rem;
            font-size: 1.3rem;
            color: #9690a4;
        }
    }
    .container{
            display: flex;
            justify-content: center;
            margin: 0 2.5rem;
            .content{
                width: 65%;
                border-right: 2.5px solid #372d53;
                .inputs{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    .input1,
                    .input2{
                        width: 50%;
                        h3{
                            color: white;
                            margin-bottom: 1rem;
                            font-size: 1.5rem;
                        }
                        input{
                            width: 90%;
                            padding: 0.7rem 0.5rem;
                            background-color: #2e244c;
                            outline: none;
                            color: white;
                            border: 1px solid #40365b;
                            border-radius: 0.25rem;
                        }
                    }
                }
                .text{
                    width: 100%;
                    margin-top: 2rem;
                    h3{
                        color: white;
                        margin-bottom: 1rem;
                    }
                    textarea{
                        width: 95%;
                        height: 10rem;
                        padding: 0.7rem 0.5rem;
                        background-color: #2e244c;
                        outline: none;
                        color: white;
                        border: 1px solid #40365b;
                        border-radius: 0.25rem;
                    }
                }
                .buttons{
                    margin-top: 2.5rem;
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
            .information-side{
                margin-left: 1.5rem;
                margin-top: 1.5rem;
                h3{
                    color: white;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    }
                .address{
                    margin-bottom: 1.5rem;
                    span{
                        color: #9690a4;
                        line-height: 1.7rem;
                    }
                }
                .email{
                    margin-bottom: 1.5rem;
                    a{
                        color: #9690a4;
                        text-decoration: none;
                        border-bottom: 1px dotted #9690a4;
                        transition: 0.5s ease-in-out;
                        &:hover{
                            color: white;
                            border: none;
                        }
                    }
                }
                .phone{
                    margin-bottom: 1.5rem;
                    span{
                        color: #9690a4;
                    }
                }
                .Social{
                    ul{
                        list-style: none;
                        display: flex;
                        gap:0.5rem;
                        li{
                            svg{
                                margin-top: 0.5rem; 
                                color: #9690a4;
                                font-size: 1.2rem;
                                cursor: pointer;
                                transition: 0.5s ease-in-out;
                                &:hover{
                                    color: white;
                                }
                            }
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
        flex-direction: column;
        .content{
            width: 100%;
            border-right: none;
            padding-bottom: 1rem;
            border-bottom: 2.5px solid #372d53;
        }
        .information-side{
            margin: 1.5rem;
        }
    }
}
@media screen and (max-width: 576px){
    .content{
        .inputs{
            flex-direction: column;
            .input1,
            .input2{
                width: 100% !important;
                input{
                    width: 100% !important;
                }
            }
        }
        .text{
            textarea{
                width: 100% !important;
            }
        }
    }
}
`

export default Contant;