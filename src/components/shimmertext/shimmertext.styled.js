import styled from 'styled-components';

export const StyledShimmerText = styled.h3`
    font-weight: 200;
    font-size: 3em;
    margin: 0 auto;
    padding: 0 140px 0 0;
    margin-bottom: 0;
    text-align: right;
    color: rgba(255, 255, 255, 0.1);

    background: -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff));
    background: -moz-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff));
    background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff));
    -webkit-background-size: 125px 100%;
    -moz-background-size: 125px 100%;
    background-size: 125px 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;

    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #222;

    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
`;