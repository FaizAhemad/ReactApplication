import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { constants } from '../constants/constants';

function Footer() {
    const { DEVELOPED_BY } = constants;
    return (
        <Navbar className='footer mainFooter' bg="dark" variant="dark" style={{ zIndex: 1, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>

            <div className="navFooterVerticalRow navAccessibility" style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                <div className="navFooterLinkCol navAccessibility">
                    <ul>
                        <div className="navFooterColHead" style={{ color: 'white' }}>Get to Know Us</div>

                        <li className="nav_first">
                            <a href="https://www.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer" className="nav_a">About Us</a>
                        </li>
                        <li>
                            <a href="https://amazon.jobs" className="nav_a">Careers</a>
                        </li>
                        <li>
                            <a href="https://press.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer" className="nav_a">Press Releases</a>
                        </li>
                        <li>
                            <a href="/gp/browse.html?node=8872558031&amp;ref_=footer_cares" className="nav_a">Amazon Cares</a>
                        </li>
                        <li>
                            <a href="/gp/browse.html?node=4594605031&amp;ref_=footer_smile" className="nav_a">Gift a Smile</a>
                        </li>
                        <li className="nav_last ">
                            <a href="https://www.amazon.science" className="nav_a">Amazon Science</a>
                        </li>
                    </ul>
                </div>

                <div className="navFooterColSpacerInner navAccessibility"></div>
                <div className="navFooterLinkCol navAccessibility">
                    <ul>
                        <div className="navFooterColHead" style={{ color: 'white' }}>Make Money with Us</div>

                        <li className="nav_first">
                            <a href="/b/?node=2838698031&amp;ld=AZINSOANavDesktopFooter&amp;ref_=nav_footer_sell" className="nav_a">Sell on Amazon</a>
                        </li>
                        <li>
                            <a href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT" className="nav_a">Sell under Amazon Accelerator</a>
                        </li>
                        <li>
                            <a href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&amp;ref=AZIN_Footer_V1" className="nav_a">Amazon Global Selling</a>
                        </li>
                        <li>
                            <a href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&amp;utm_medium=footer&amp;utm_source=GW&amp;ref_=footer_assoc" className="nav_a">Become an Affiliate</a>
                        </li>
                        <li>
                            <a href="http://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter" className="nav_a">Fulfilment by Amazon</a>
                        </li>
                        <li>
                            <a href="https://advertising.amazon.in/?ref=Amz.in" className="nav_a">Advertise Your Products</a>
                        </li>
                        <li className="nav_last ">
                            <a href="https://www.amazonpay.in/merchant" className="nav_a">Amazon Pay on Merchants</a>
                        </li>
                    </ul>
                </div>
                <div className="navFooterColSpacerInner navAccessibility"></div>
                <div className="navFooterLinkCol navAccessibility">
                    <ul>
                        <div className="navFooterColHead" style={{ color: 'white' }}>Let Us Help You</div>
                        <li className="nav_first">
                            <a href="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid" className="nav_a">COVID-19 and Amazon</a>
                        </li>
                        <li>
                            <a href="/gp/css/homepage.html?ref_=footer_ya" className="nav_a">Your Account</a>
                        </li>
                        <li>
                            <a href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4" className="nav_a">Returns Centre</a>
                        </li>
                        <li>
                            <a href="/gp/help/customer/display.html?nodeId=201083470&amp;ref_=footer_swc" className="nav_a">100% Purchase Protection</a>
                        </li>
                        <li>
                            <a href="/gp/browse.html?node=6967393031&amp;ref_=footer_mobapp" className="nav_a">Amazon App Download</a>
                        </li>
                        <li>
                            <a href="/gp/BIT/theamazonapp/ref=footer_assistant_download_copy" className="nav_a">Amazon Assistant Download</a>
                        </li>
                        <li className="nav_last ">
                            <a href="/gp/help/customer/display.html?nodeId=200507590&amp;ref_=footer_gw_m_b_he" className="nav_a">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
            <Navbar.Text style={{ padding: "5px", border: '1px solid grey' }}>
                {DEVELOPED_BY}<a href="#login" style={{ textDecoration: 'none' }}>fshaikh@lockstep.io</a>
            </Navbar.Text>
        </Navbar>
    )
};

const mapStateToProps = (store) => {
    return {
        isSidebarVisible: store.sidebarReducer.isSideBarVisible
    }
};

export default connect(mapStateToProps)(Footer);