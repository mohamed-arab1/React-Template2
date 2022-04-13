import React from 'react';
import styled from 'styled-components';

function Navbar() {
    return (
        <NavBarSection>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">WELCOME</a>
                    </li>
                    <li>
                        <a href="#about">WHO WE ARE</a>
                    </li>
                    <li>
                        <a href="#what">WHAT WE DO</a>
                    </li>
                    <li>
                        <a href="#contact">GET IN TOUCH</a>
                    </li>
                </ul>
            </div>
        </NavBarSection>
    )
}

const NavBarSection = styled.div`
    background: #312450;
    width: 18rem;
    height: 100vh;
    position: fixed;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .links{
        width: 100%;
        ul{
            list-style: none;
            padding: 0 2.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            li{
                margin-bottom: 3rem;
                position: relative;
                width: 100%;
                text-align: end;
                a{
                    width: 100%;
                    color: rgba(255, 255, 255, 0.35);
                    text-decoration: none;
                    font-size: 0.8rem;
                    transition: 0.5s ease-in-out;
                    
                    &:hover{
                        color: white;
                    }
                    &::before{
                        border-radius: 0.2em;
                        bottom: -0.5rem;
                        content: '';
                        height: 0.2em;
                        position: absolute;
                        right: 0;
                        width: 100%;
                        background-image: linear-gradient(to right, #5e42a6, #b74e91);
                    }
                }
            }
            
        }
    }

@media screen and (max-width: 1080px){
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    overflow-y: hidden;
    .links{
        width: 100%;
        ul{
            flex-direction: row;
            li{
                margin: 0;
                text-align: center;
                a{
                    width: 100%;
                    &::before{
                        bottom: -1.3rem;
                        width: 75%;
                        right: 0.8rem;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 737px){
    display: none;
}
`

export default Navbar