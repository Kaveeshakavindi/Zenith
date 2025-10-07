import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import Themes from "./Themes.jsx";
import CustomSound from "./CustomSound.jsx";
import SetBGMVolume from './SetBGMVolume.jsx';

export default function Footer({ volume, setVolume }) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };
  const handleProfileOpen = () => {
    setProfileOpen(true)
  };
  const handleProfileClose = () => {
    setProfileOpen(false)
  };

  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerTop">
            <h2 variant="h6" component="div"
            sx={{ flexGrow: 1,
                 display: { xs: 'none', sm: 'block' }
                 }}>Zenith</h2>
          </div>
          <div className="footerNav">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><button onClick={handleClickOpen}>Settings</button></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><button onClick={handleProfileOpen}>Profile</button></li>
            </ul>
          </div>
          <div className="socialIcons">
          <a href="bhavysarwa@gmail.com"> <FontAwesomeIcon icon={faEnvelope} style={{color: "#252627",}} /></a>
            <a href="https://github.com/bhavy1204" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{color: "#000000"}} /></a>
            <a href="https://www.linkedin.com/in/bhavy-sarva-10ba13265/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#27577c"}} /></a>
            <a href="https://x.com"><FontAwesomeIcon icon={faXTwitter} style={{color: "#000000"}} /></a>
            {/* <a href=""><FontAwesomeIcon icon={faEnvelope} style={{color: "#1e1e1f"}} /></a>
             */}
            {/* You can add any other links Here !!!*/}

            
          </div>
        </div>
        <div className="footerBottom">
          <p>Copyright © {new Date().getFullYear()} Zenith. All rights reserved.<span className="designer">Zenith Team</span></p>
        </div>
      </footer>



      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <Box>
            <Themes />
            <CustomSound />
            <SetBGMVolume setVolume={setVolume} volume={volume} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> <SaveIcon />Save</Button>
          <Button onClick={handleClose}> <CloseIcon />Close </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={profileOpen}
        onClose={handleProfileClose}
      >
        <DialogTitle>Coming Soon....</DialogTitle>
        <DialogContent>
          <Box>
            In development...
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileClose}> <SaveIcon />Save</Button>
          <Button onClick={handleProfileClose}> <CloseIcon />Close </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
