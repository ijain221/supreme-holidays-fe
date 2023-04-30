import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';

interface HeaderProps {
    setIsHome: Function
    setIsPackages: Function
    setIsAbout: Function
    isHome: boolean,
    isAbout : boolean,
    isPackages : boolean 
}

const HeaderWrapper = styled(Box)({
    height: '4rem',
    display: 'flex',
    backgroundColor : '#fff',
    // boxShadow: '0 0 5px #aaa'
})
const HeaderLogo = styled(Box)({
    marginLeft: '0.75rem',
    marginTop: '0.25rem'
})
const HeaderOptions = styled(Box)({
    marginTop: '0.2rem',
    display: 'flex',
    
})

const HeaderOptionsItem = styled(Box)({
    marginLeft: '2rem',
    '&:hover': {
        borderBottom : '4px solid red',
        cursor: 'pointer'
     }
})

const HeaderOptionsItemHeader = styled('p')({
    fontSize: '1.17rem',
    fontWeight: 'bold',
})

const Header: React.FC<HeaderProps> = ({ setIsHome, setIsAbout, setIsPackages, isHome, isAbout, isPackages }) => {

    function homeClicked(){
        setIsHome(true)
        setIsAbout(false)
        setIsPackages(false)
    }
    function packagesClicked(){
        setIsHome(false)
        setIsAbout(false)
        setIsPackages(true)
    }
    function aboutClicked(){
        setIsHome(false)
        setIsAbout(true)
        setIsPackages(false)
    }

        return <>
            <HeaderWrapper>
                <HeaderLogo>
                    <img height={50} width={250} alt="supreme_header_logo" src='logo.png'></img>
                </HeaderLogo>
                <HeaderOptions>
                    <HeaderOptionsItem style={{borderBottom : isHome?'4px solid red':''}} onClick={homeClicked}><HeaderOptionsItemHeader>Home</HeaderOptionsItemHeader></HeaderOptionsItem>
                    <HeaderOptionsItem style={{borderBottom : isPackages?'4px solid red':''}} onClick={packagesClicked}><HeaderOptionsItemHeader>Packages</HeaderOptionsItemHeader></HeaderOptionsItem>
                    <HeaderOptionsItem style={{borderBottom : isAbout?'4px solid red':''}} onClick={aboutClicked}><HeaderOptionsItemHeader>About Supreme</HeaderOptionsItemHeader></HeaderOptionsItem>
                </HeaderOptions>
            </HeaderWrapper>
        </> 
}

export default Header