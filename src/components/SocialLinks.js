import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import { constants, openInNewTab } from '../constants/constants';

function SocialLinks({ facebook, instagram, youtube, whatsapp, twitter, linkedin }) {
    return (
        <div className='icons' style={{ zIndex: 1 }}>
            <div className='icn-socialmedia' onClick={() => openInNewTab(facebook)}><FontAwesomeIcon className='facebook' icon={faFacebook} /></div>
            <div className='icn-socialmedia' onClick={() => openInNewTab(instagram)}><FontAwesomeIcon className='instagram' icon={faInstagram} /></div>
            <div className='icn-socialmedia' onClick={() => openInNewTab(youtube)}><FontAwesomeIcon className='youtube' icon={faYoutube} /></div>
            <div className='icn-socialmedia' onClick={() => openInNewTab(whatsapp)}><FontAwesomeIcon className='whatsapp' icon={faWhatsapp} /></div>
            <div className='icn-socialmedia' onClick={() => openInNewTab(twitter)}><FontAwesomeIcon className='twitter' icon={faTwitter} /></div>
            <div className='icn-socialmedia' onClick={() => openInNewTab(linkedin)}><FontAwesomeIcon className='linkedin' icon={faLinkedin} /></div>
            <div className='icn-socialmedia' style={{ padding: "10px 0 0 0 ", margin: 0, position: "relative", width: '50px', justifyContent: "center", height: '0' }}>{constants.FOLLOW}</div>
            <div className='icn-socialmedia' style={{ padding: "0 0 10px 0", margin: 0, position: "relative", width: '40px', justifyContent: "center" }}>{constants.US}</div>
        </div>
    )
};

SocialLinks.defaultProps = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/?hl=en',
    youtube: 'https://www.youtube.com/',
    whatsapp: 'https://web.whatsapp.com/',
    twitter: 'https://twitter.com/?lang=en-in',
    linkedin: 'https://in.linkedin.com/'
};

export default SocialLinks;