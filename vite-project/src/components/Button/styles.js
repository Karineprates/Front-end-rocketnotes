import styled from "styled-components";

export const Container = styled.button `
width: 100%;
background-color: ${({theme}) => theme.COLORS.ORANGE };
color: ${({theme}) => theme.COLORS.BACKGROUND_800 };

height: 56px;
border: 0;
border-radius: 10px;
margin-top: 16px;
font-weight: 500;
padding: 0 16px;

&:disabled{
  opacity: 0.5;
  
}
`;
