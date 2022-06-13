import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav`
background: #59A96A;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index:10;
`


export const NavLink = styled(Link)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 ;
 margin:  0 2rem;
 height: 100%;
 cursor: pointer;

 
 &:hover {
    transition: all 0.2s ease;
    transform: scale(1.1);
}
`



export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: 0px;


`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right: 24px;


`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border:none;
outline:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    transform: scale(1.1);
}
`