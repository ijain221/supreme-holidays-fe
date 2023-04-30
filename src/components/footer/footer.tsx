
import { Box, styled } from "@mui/material"
import React from "react"

interface FooterProps {
    isAbout : boolean
}

const FooterWrapper = styled(Box)({
    height: '2rem',
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'centre',
    borderTop: '1px solid black',
    bottom : '0',
    width : '100%'
})

const FooterData = styled('p')({
   fontSize: '0.75rem',
   marginLeft: '45%',
})
const Footer: React.FC<FooterProps> = ({isAbout}) => {
    return <> <FooterWrapper sx={{position : isAbout?'fixed':''}}>
        <FooterData>
            © {(new Date().getFullYear())} Supreme Holidays | Made by <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/ishankj4/'>Ishank Jain</a>
        </FooterData>
    </FooterWrapper>
    </>
}

export default Footer