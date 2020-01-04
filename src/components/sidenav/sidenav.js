import React from 'react';
import styled from 'styled-components';
import ShimmerText from '../shimmertext';
import { StyledSidenav } from './sidenav.styled';
import { Link, useLocation } from 'react-router-dom';

const StyledLink = ({children, className, active, ...rest}) => (
    <Link className={className} {...rest}>{children}</Link>
)

const PlainLink = styled(StyledLink)`
    text-decoration: none;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${props => props.active ? props.distance : 0}px);

    &:hover{
        text-decoration: none;
        cursor: pointer;
        transform: translateX(${props => props.distance}px);
    }
`;

function Sidenav(){
    const { pathname } = useLocation();
    const homepageLink = '/';
    const projectsLink = '/projects';
    const workLink = '/work';

    return (
        <StyledSidenav>
            <PlainLink 
                to={homepageLink}
                distance={180}
                active={ homepageLink===pathname }
            >
                <ShimmerText>Homepage</ShimmerText>
            </PlainLink>
            <PlainLink 
                to={projectsLink}
                distance={120}
                active={ projectsLink===pathname }
            >
                <ShimmerText>Projects</ShimmerText>
            </PlainLink>
            <PlainLink 
                to={workLink}
                distance={70} 
                active={ workLink===pathname }
            >
                <ShimmerText>Work</ShimmerText>
            </PlainLink>
        </StyledSidenav>
    );
}

export default Sidenav;