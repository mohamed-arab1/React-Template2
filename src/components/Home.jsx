import React from 'react';
import styled from 'styled-components';
import "../Styles/Home.css"

function Home() {
    return (
        <HomeSection className='home'>
            <div className="content">
                <h2>WEBSURFING</h2>
                <p>We Provide Solutions to Help You to Build or Grow Your Buisness!</p>
                <button>
                    <a href="#about">learn more</a>
                </button>
            </div>
        </HomeSection>
    )
}

const HomeSection = styled.div`
    width: calc(100% - 18rem);
    height: 100vh;
    background-color: #231842;
    margin-left: 18rem;
    display: flex;
    align-items: center;


    .content{
        padding: 0 4rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 3rem;

        h2{
            color: white;
            font-size: 2.5rem;
        }
        p{
            color: rgba(255, 255, 255, 0.55);
            font-size: 1.8rem;
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
            text-transform: uppercase;

            a{
                text-decoration: none;
                color: white;
                cursor: pointer;
            }
            &:hover{
                background-color: #ffffff36;
            }
        }
    }
@media screen and (max-width: 1080px){
    width: 100%;
    margin: 0;
}
@media screen and (max-width: 576px){
    .content{
        padding: 0 2rem;
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1.5rem;
        }
    }
}
`

export default Home;