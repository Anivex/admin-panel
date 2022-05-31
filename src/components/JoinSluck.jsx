import React from 'react'
import { darkThemeColor, hoverEffect , themeColor} from '../utils'
import styled from "styled-components"
import { FaSlack} from 'react-icons/fa'

function JoinSluck() {
  return (
    <JoinChannel>
        <CardContent flex={true} >
            <Slack>
                <SlackLogo>
                    <FaSlack />
                </SlackLogo>
                <SlackText>
                    <SlackHead>Engage with cleints</SlackHead>
                    <SlackFoot>Engage with cleints</SlackFoot>
                </SlackText>
            </Slack>
            <SlackJoin>Join Now</SlackJoin>
        </CardContent>
    </JoinChannel>
  )
}

const JoinChannel = styled.div`
    background-color: ${darkThemeColor};
    height: 50%;
    margin-top: 6.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    transition: 0.4 ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width:1080px) {
        width:80%;
        margin-top:2rem;
        margin-bottom:2rem;
        height: max-content; 
    }
`;
const CardContent = styled.div`
    margin: 1rem;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    @media screen and (min-width: 320px) and (max-width:1080px) {
        flex-direction:column;
        gap:1rem;   
    }
`;
const Slack = styled.div`
    display:flex;
`;
const SlackLogo = styled.div`
    margin-right: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        color:white;
        height:3rem;
        width:3rem;
    }
`;
const SlackText = styled.div`
    color: white;
`;
const SlackHead = styled.h2`
    font-weight:500;
`;
const SlackFoot = styled.h5`
    color: #e4e4e4;
    font-weight: normal;
`;
const SlackJoin = styled.button`
    background-color:${themeColor};
    border:none;
    outline:none;
    padding: 1rem 2rem;
    color: white;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight:bold;
`;


export default JoinSluck