import styled from 'styled-components';

export const NeumorphicCircle = styled.div`
  display: inline-block;
  margin: 1rem 2rem 2rem 3rem;
  border-radius: 50%;
  background-color: #EFEEEE;
  height: ${({height}) => height?height:'50px'};
  width: ${({width}) => width?width:'50px'};
  box-shadow: -2px -2px 4px 4px rgba(255,255,255,0.5),
              2px 2px 4px 4px rgba(209,205,199,0.5);
`;