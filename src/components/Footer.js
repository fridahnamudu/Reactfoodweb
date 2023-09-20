import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <EmailIcon />

        </div>

        <p>&copy; 2023 klabu-go.com</p>
    </div>
  )
}

export default Footer