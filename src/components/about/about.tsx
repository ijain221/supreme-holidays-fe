import { Box, Typography } from "@mui/material"
import React from "react"
import styled from "@emotion/styled"

const StyledLink = styled.a`
text-decoration: none;
color : inherit;
`

export default function About(){
    return <>
        <Box sx={{marginTop: '4%'}}>
        <Typography align="center" variant="h4">Supreme Holidays Delhi<br/></Typography>
        <Typography align="center" variant="body1" color="text.secondary">B - 3 Block, Block C, Yamuna Vihar, Shahdara, New Delhi, Delhi 110053</Typography>
        <Typography align="center" variant="body1" color="text.secondary">Phone: <StyledLink href="tel:+918219365668">+918219365668</StyledLink>, <StyledLink href="tel:+919654740897">+919654740897</StyledLink>, <StyledLink href="tel:+919910891055">+919910891055</StyledLink></Typography>
        </Box>
        <Box sx={{marginTop: '2%',marginLeft: '28%',marginBottom: '2%'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8623924369053!2d77.26659471129726!3d28.693762681195462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc22dfae837%3A0x621cd8200238d927!2sSupreme%20Holidays%20Delhi!5e0!3m2!1sen!2sin!4v1682852131484!5m2!1sen!2sin" width="800" height="500" 
        style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    </>
}