import {useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {connect} from 'react-redux';
import {
  constants,
  defaultScrollPosition,
  footerHeaderAndListVariables,
} from '../constants/constants';

function Footer({isPageNotFoundPage, isLoginPage, ...props}) {
  const {DEVELOPED_BY} = constants;
  const {
    GET_TO_KNOW_US,
    ABOUT_US,
    PRESS_RELEASES,
    OUR_CARES,
    GIFT_A_SMILE,
    MAKE_MONEY_WITH_US,
    SELL_ON_THIS_WEBSITE,
    SELL_UNDER_OUR_ACCELERATOR,
    OUR_GLOBAL_SELLING,
    BECOME_AN_AFFILIATE,
    FULFILMENT_BY_US,
    ADVERTISE_YOUR_PRODUCT,
    LET_US_HELP_YOU,
    COVID_19_AND_US,
    YOUR_ACCOUNT,
    RETURNS_CENTER,
    HUNDERED_PERCENT_PURCHACE_PROTECTION,
    APP_DOWNLOAD,
    ASSISTANT_DOWNLOAD,
    HELP,
    BACK_TO_TOP,
  } = footerHeaderAndListVariables;
  return (
    <Navbar
      className="footer mainFooter"
      bg="dark"
      variant="dark"
      style={{
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingTop: '0',
      }}
    >
      <div
        style={{
          height: '60px',
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span
          id="footerBackToTop"
          onClick={() =>
            isPageNotFoundPage
              ? defaultScrollPosition(0, 160)
              : isLoginPage
              ? defaultScrollPosition(0, 80)
              : defaultScrollPosition()
          }
        >
          {BACK_TO_TOP}
        </span>
      </div>
      <div
        className="navFooterVerticalRow navAccessibility"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          paddingTop: '40px',
        }}
      >
        <div className="navFooterLinkCol navAccessibility">
          <ul>
            <div
              className="heading"
              style={{color: 'white', fontWeight: '600'}}
            >
              {ABOUT_US}
            </div>
            <li>
              <a
                href="https://www.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer"
                className="nav_a"
              >
                {ABOUT_US}
              </a>
            </li>
            <li>
              <a href="https://amazon.jobs" className="nav_a">
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://press.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer"
                className="nav_a"
              >
                {PRESS_RELEASES}
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=8872558031&amp;ref_=footer_cares"
                className="nav_a"
              >
                {OUR_CARES}
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=4594605031&amp;ref_=footer_smile"
                className="nav_a"
              >
                {GIFT_A_SMILE}
              </a>
            </li>
          </ul>
        </div>

        <div className="navFooterColSpacerInner navAccessibility" />
        <div className="navFooterLinkCol navAccessibility">
          <ul>
            <div
              className="heading"
              style={{color: 'white', fontWeight: '600'}}
            >
              {MAKE_MONEY_WITH_US}
            </div>

            <li className="nav_first">
              <a
                href="/b/?node=2838698031&amp;ld=AZINSOANavDesktopFooter&amp;ref_=nav_footer_sell"
                className="nav_a"
              >
                {SELL_ON_THIS_WEBSITE}
              </a>
            </li>
            <li>
              <a
                href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT"
                className="nav_a"
              >
                {SELL_UNDER_OUR_ACCELERATOR}
              </a>
            </li>
            <li>
              <a
                href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&amp;ref=AZIN_Footer_V1"
                className="nav_a"
              >
                {OUR_GLOBAL_SELLING}
              </a>
            </li>
            <li>
              <a
                href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&amp;utm_medium=footer&amp;utm_source=GW&amp;ref_=footer_assoc"
                className="nav_a"
              >
                {BECOME_AN_AFFILIATE}
              </a>
            </li>
            <li>
              <a
                href="http://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter"
                className="nav_a"
              >
                {FULFILMENT_BY_US}
              </a>
            </li>
            <li>
              <a
                href="https://advertising.amazon.in/?ref=Amz.in"
                className="nav_a"
              >
                {ADVERTISE_YOUR_PRODUCT}
              </a>
            </li>
          </ul>
        </div>
        <div className="navFooterColSpacerInner navAccessibility" />
        <div className="navFooterLinkCol navAccessibility">
          <ul>
            <div
              className="heading"
              style={{color: 'white', fontWeight: '600'}}
            >
              {LET_US_HELP_YOU}
            </div>
            <li className="nav_first">
              <a
                href="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid"
                className="nav_a"
              >
                {COVID_19_AND_US}
              </a>
            </li>
            <li>
              <a href="/gp/css/homepage.html?ref_=footer_ya" className="nav_a">
                {YOUR_ACCOUNT}
              </a>
            </li>
            <li>
              <a
                href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
                className="nav_a"
              >
                {RETURNS_CENTER}
              </a>
            </li>
            <li>
              <a
                href="/gp/help/customer/display.html?nodeId=201083470&amp;ref_=footer_swc"
                className="nav_a"
              >
                {HUNDERED_PERCENT_PURCHACE_PROTECTION}
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=6967393031&amp;ref_=footer_mobapp"
                className="nav_a"
              >
                {APP_DOWNLOAD}
              </a>
            </li>
            <li>
              <a
                href="/gp/BIT/theamazonapp/ref=footer_assistant_download_copy"
                className="nav_a"
              >
                {ASSISTANT_DOWNLOAD}
              </a>
            </li>
            <li className="nav_last ">
              <a
                href="/gp/help/customer/display.html?nodeId=200507590&amp;ref_=footer_gw_m_b_he"
                className="nav_a"
              >
                {HELP}
              </a>
            </li>
          </ul>
        </div>
        <div
          className="navFooterLinkCol navAccessibility"
          style={{
            padding: '0px 10px',
            position: 'relative',
            width: '600px',
            height: '200px',
          }}
        >
          <iframe
            srcDoc='<div style="width:90%;display:flex;justify-content:center;align-items:center;color:white;height:90%;position:absolute;overflow:hidden;">Please check you internet connection to see google map.</div>'
            onLoad={e => {
              e.currentTarget.removeAttribute('srcDoc');
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.27546838618!2d75.92077211384!3d17.63710750019947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da1f58f519a3%3A0x576f0371dd6db275!2sSB%20Vihar%2C%20Anand%20Nagar%2C%20Solapur%2C%20Maharashtra%20413224!5e0!3m2!1sen!2sin!4v1658342409315!5m2!1sen!2sin"
            style={{
              border: 0,
              width: '100%',
              position: 'relative',
              height: '100%',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div style={{display: 'flex', width: '100%', paddingLeft: '30px'}}>
        <Navbar.Text
          style={{
            padding: '5px',
            border: '1px solid grey',
            alignSelf: 'flex-start',
          }}
        >
          {DEVELOPED_BY}
          <a href="#login" style={{textDecoration: 'none'}}>
            fshaikh@lockstep.io
          </a>
        </Navbar.Text>
      </div>
    </Navbar>
  );
}

const mapStateToProps = store => {
  return {
    isSidebarVisible: store.sidebarReducer.isSideBarVisible,
    isPageNotFoundPage: store.generalReducer.isPageNotFoundComponent,
    isLoginPage: store.generalReducer.isLoginComponent,
  };
};

export default connect(mapStateToProps, null)(Footer);
