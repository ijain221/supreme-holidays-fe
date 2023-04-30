import { Box } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"
const StyledBox = styled(Box)({
    height: '15rem', 
    width: '10rem', 
    marginLeft: '5rem',
    borderradius: '16px',
    position: 'relative',
    '&:hover': {
        transform: "scale(1.02)",
        boxShadow: "0 6px 8px 0 rgba(0,0,0,0.2)"
     }
})

const StyledText = styled(Box)({
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Dancing Script, cursive',
    color: 'white',
    fontSize: '1.4rem',
    lineHeight: '13',
    letterSpacing: '0.84px',
    textDecorationLine: 'none',
    zIndex: '1'
})

const RowContainer = styled(Box)({
    display: 'flex',
    flexFlow: 'row nowrap',
    marginLeft: '13%'
})

export default function Packages(){
    const handlePackageSelection = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const country = (event.target as HTMLInputElement).getAttribute('data-country');

        alert('Country Selected is ' + country)
      }
    return <>
       <RowContainer sx={{marginTop: '3rem'}}>
           <StyledBox onClick={handlePackageSelection}><img alt="bali" src='bali2.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="bali">Bali</StyledText></StyledBox>
           <StyledBox onClick={handlePackageSelection}><img alt="turkey" src='turkey.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="turkey">Turkey</StyledText></StyledBox>
           <StyledBox onClick={handlePackageSelection}><img alt="europe" src='europe.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="europe">Europe</StyledText></StyledBox>
           <StyledBox onClick={handlePackageSelection}><img alt="dubai" src='dubai.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="dubai">Dubai</StyledText></StyledBox>
           <StyledBox onClick={handlePackageSelection}><img alt="vietnam" src='vietnam.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="vietnam">Vietnam</StyledText></StyledBox>
       </RowContainer>
       <RowContainer sx={{marginTop: '1.5rem'}}>
            <StyledBox onClick={handlePackageSelection}><img alt="thailand" src='thailand.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="thailand">Thailand</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="maldives" src='maldives.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="maldives">Maldives</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="srilanka" src='srilanka.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="srilanka">Sri Lanka</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="saudiarabia" src='saudiarabia.jpeg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="saudiarabia">Saudi Arabia</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="singapore" src='singapore.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="singapore">Singapore</StyledText></StyledBox>
       </RowContainer>
       <RowContainer sx={{ marginTop: '1.5rem', marginBottom: '2rem'}}>
            <StyledBox onClick={handlePackageSelection}><img alt="malaysia" src='malaysia.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="malaysia">Malaysia</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="baku" src='baku.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="baku">Baku</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="hongkong" src='hongkong.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText data-country="hongkong">Hong Kong</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="mauritius" src='mauritius.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText  data-country="mauritius">Mauritius</StyledText></StyledBox>
            <StyledBox onClick={handlePackageSelection}><img alt="cruises" src='cruises.jpg' height={240} width={160} style={{zIndex: '-1', position: 'absolute', opacity: '1', objectFit: 'cover'}}/><StyledText  data-country="cruises">Cruises</StyledText></StyledBox>
       </RowContainer>
    </>
}