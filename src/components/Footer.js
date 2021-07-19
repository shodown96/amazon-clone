import { Link } from 'react-router-dom'
import React from 'react'
import "../css/Footer.css"

function Footer() {
    const handleBackToTop =()=>{
        // window.scrollTo(0,0)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }
    return (
        <div className="footer" id="navFooter">
            <button className="back-to-top" onClick={handleBackToTop}>
                Back to Top
            </button>
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <div className="navFooterColHead">Get to Know Us</div>
                        <ul>
                            <li className="nav_first"><Link to="https://www.amazon.jobs" className="nav_a">Careers</Link></li>
                            <li><Link to="https://blog.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer" className="nav_a">Blog</Link></li>
                            <li><Link to="https://www.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer" className="nav_a">About Amazon</Link></li>
                            <li><Link to="https://www.amazon.com/ir" className="nav_a">Investor Relations</Link></li>
                            <li><Link to="/amazon-devices/b?ie=UTF8&amp;node=2102313011&amp;ref_=footer_devices" className="nav_a">Amazon Devices</Link></li>
                            <li className="nav_last"><Link to="https://www.aboutamazon.com/amazon-fulfillment-center-tours?utm_source=gateway&amp;utm_medium=footer&amp;utm_campaign=fctours" className="nav_a">Amazon Tours</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="navFooterColHead">Make Money with Us</div>
                        <ul>
                            <li className="nav_first"><Link to="/gp/redirect.html?_encoding=UTF8&amp;location=https%3A%2F%2Fsell.amazon.com%2F%3Fld%3DAZFSSOA%26ref_%3Dfooter_soa&amp;source=standards&amp;token=F8DC1C821506E40D2CFF1864EE5EC23698540D23" className="nav_a">Sell on Amazon</Link></li>
                            <li><Link to="https://sell.amazon.com/programs/amazon-business.html?ld=usb2bunifooter&amp;ref_=footer_b2b" className="nav_a">Sell on Amazon Business</Link></li>
                            <li><Link to="https://developer.amazon.com" className="nav_a">Sell Your Apps on Amazon</Link></li>
                            <li><Link to="https://affiliate-program.amazon.com/" className="nav_a">Become an Affiliate</Link></li>
                            <li><Link to="https://advertising.amazon.com/?ref=ext_amzn_ftr" className="nav_a">Advertise Your Products</Link></li>
                            <li><Link to="/gp/seller-account/mm-summary-page.html?ie=UTF8&amp;ld=AZFooterSelfPublish&amp;ref_=footer_publishing&amp;topic=200260520" className="nav_a">Self-Publish with Us</Link></li>
                            <li><Link to="http://go.thehub-amazon.com/amazon-hub-locker" className="nav_a">Host an Amazon Hub</Link></li>
                            <li className="nav_last nav_a_carat"> <Link to="/b/?_encoding=UTF8&amp;ld=AZUSSOA-seemore&amp;node=18190131011&amp;ref_=footer_seemore" className="nav_a">See More Make Money with Us &raquo;</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="navFooterColHead">Amazon Payment Products</div>
                        <ul>
                            <li className="nav_first"><Link to="/dp/B07984JN3L?_encoding=UTF8&amp;ie=UTF-8&amp;plattr=ACOMFO" className="nav_a">Amazon Business Card</Link></li>
                            <li><Link to="/b?ie=UTF8&amp;node=16218619011&amp;ref_=footer_swp" className="nav_a">Shop with Points</Link></li>
                            <li><Link to="/Reload-Your-Gift-Card-Balance/b?ie=UTF8&amp;node=10232440011&amp;ref_=footer_reload_us" className="nav_a">Reload Your Balance</Link></li>
                            <li className="nav_last"><Link to="/Currency-Converter/b?ie=UTF8&amp;node=388305011&amp;ref_=footer_tfx" className="nav_a">Amazon Currency Converter</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="navFooterColHead">Let Us Help You</div>
                        <ul>
                            <li className="nav_first"><Link to="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid" className="nav_a">Amazon and COVID-19</Link></li>
                            <li><Link to="/gp/css/homepage.html?ie=UTF8&amp;ref_=footer_ya" className="nav_a">Your Account</Link></li>
                            <li><Link to="/gp/css/order-history?ie=UTF8&amp;ref_=footer_yo" className="nav_a">Your Orders</Link></li>
                            <li><Link to="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468520&amp;ref_=footer_shiprates" className="nav_a">Shipping Rates &amp; Policies</Link></li>
                            <li><Link to="/gp/css/returns/homepage.html?ie=UTF8&amp;ref_=footer_hy_f_4" className="nav_a">Returns &amp; Replacements</Link></li>
                            <li><Link to="/hz/mycd/myx?_encoding=UTF8&amp;ref_=footer_myk" className="nav_a">Manage Your Content and Devices</Link></li>
                            <li><Link to="/gp/BIT/ref=footer_bit_v2_us_A0029?bitCampaignCode=A0029" className="nav_a">Amazon Assistant</Link></li>
                            <li className="nav_last"><Link to="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=508510&amp;ref_=footer_gw_m_b_he" className="nav_a">Help</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-logo-section">
                <Link to="/">
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" className="header__logo"/>
                </Link>
                <div className="buttons">
                    <button>English</button>
                    <button>$ USD - U.S. Dollar</button>
                    <button>United States</button>
                </div>
            </div>

            <div className="footer-links">
                <table className="navFooterMoreOnAmazon" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td className="navFooterDescItem"><Link to="https://music.amazon.com?ref=dm_aff_amz_com" className="nav_a">Amazon Music<br/> <span className="navFooterDescText">Stream millions<br/> of songs</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com" className="nav_a">Amazon Advertising<br/> <span className="navFooterDescText">Find, attract, and<br/> engage customers</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/STRING-subnav_primephotos_amazondrive/b?ie=UTF8&amp;node=15547130011&amp;ref_=us_footer_drive" className="nav_a">Amazon Drive<br/> <span className="navFooterDescText">Cloud storage<br/> from Amazon</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.6pm.com" className="nav_a">6pm<br/> <span className="navFooterDescText">Score deals<br/> on fashion brands</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.abebooks.com" className="nav_a">AbeBooks<br/> <span className="navFooterDescText">Books, art<br/> &amp; collectibles</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.acx.com/" className="nav_a">ACX <br/> <span className="navFooterDescText">Audiobook Publishing<br/> Made Easy</span></Link></td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td className="navFooterDescItem"><Link to="https://www.alexa.com" className="nav_a">Alexa<br/> <span className="navFooterDescText">Actionable Analytics<br/> for the Web</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/gp/redirect.html?_encoding=UTF8&amp;location=https%3A%2F%2Fsell.amazon.com%2F%3Fld%3DAZUSSOA-footer-aff%26ref_%3Dfooter_sell&amp;source=standards&amp;token=5C1C6935C910A355A9EFF638456512B3EE3E32AC" className="nav_a">Sell on Amazon<br/> <span className="navFooterDescText">Start a Selling Account</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/business?_encoding=UTF8&amp;ref_=footer_retail_b2b" className="nav_a">Amazon Business<br/> <span className="navFooterDescText">Everything For<br/> Your Business</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/International-Shipping-Direct/b?ie=UTF8&amp;node=230659011&amp;ref_=footer_amazonglobal" className="nav_a">AmazonGlobal<br/> <span className="navFooterDescText">Ship Orders<br/> Internationally</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/services?_encoding=UTF8&amp;ref_=footer_services" className="nav_a">Home Services<br/> <span className="navFooterDescText">Experienced Pros<br/> Happiness Guarantee</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://ignite.amazon.com/?ref=amazon_footer_ignite" className="nav_a">Amazon Ignite<br/> <span className="navFooterDescText">Sell your original<br/> Digital Educational<br/> Resources</span></Link></td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td className="navFooterDescItem"><Link to="https://rapids.amazon.com/?ref=rapids_acq_gatewayfooter" className="nav_a">Amazon Rapids<br/> <span className="navFooterDescText">Fun stories for<br/>  kids on the go</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=amazonfooter" className="nav_a">Amazon Web Services<br/> <span className="navFooterDescText">Scalable Cloud<br/> Computing Services</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.audible.com" className="nav_a">Audible<br/> <span className="navFooterDescText">Listen to Books &amp; Original<br/> Audio Performances</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.bookdepository.com" className="nav_a">Book Depository<br/> <span className="navFooterDescText">Books With Free<br/> Delivery Worldwide</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.boxofficemojo.com/?ref_=amzn_nav_ftr" className="nav_a">Box Office Mojo<br/> <span className="navFooterDescText">Find Movie<br/> Box Office Data</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.comixology.com" className="nav_a">ComiXology<br/> <span className="navFooterDescText">Thousands of<br/> Digital Comics</span></Link></td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td className="navFooterDescItem"><Link to="https://www.createspace.com" className="nav_a">CreateSpace<br/> <span className="navFooterDescText">Indie Print Publishing<br/> Made Easy</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.dpreview.com" className="nav_a">DPReview<br/> <span className="navFooterDescText">Digital<br/> Photography</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.eastdane.com/welcome" className="nav_a">East Dane<br/> <span className="navFooterDescText">Designer Men's<br/> Fashion</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.fabric.com" className="nav_a">Fabric<br/> <span className="navFooterDescText">Sewing, Quilting<br/> &amp; Knitting</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.goodreads.com" className="nav_a">Goodreads<br/> <span className="navFooterDescText">Book reviews<br/> &amp; recommendations</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.imdb.com" className="nav_a">IMDb<br/> <span className="navFooterDescText">Movies, TV<br/> &amp; Celebrities</span></Link></td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td className="navFooterDescItem"><Link to="https://pro.imdb.com?ref_=amzn_nav_ftr" className="nav_a">IMDbPro<br/> <span className="navFooterDescText">Get Info Entertainment<br/> Professionals Need</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://kdp.amazon.com" className="nav_a">Kindle Direct Publishing<br/> <span className="navFooterDescText">Indie Digital Publishing<br/> Made Easy
                            </span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://videodirect.amazon.com/home/landing" className="nav_a">Prime Video Direct<br/> <span className="navFooterDescText">Video Distribution<br/> Made Easy</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.shopbop.com/welcome" className="nav_a">Shopbop<br/> <span className="navFooterDescText">Designer<br/> Fashion Brands</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.woot.com/" className="nav_a">Woot!<br/> <span className="navFooterDescText">Deals and <br/> Shenanigans</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.zappos.com" className="nav_a">Zappos<br/> <span className="navFooterDescText">Shoes &amp;<br/> Clothing</span></Link></td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td className="navFooterDescItem"><Link to="https://ring.com" className="nav_a">Ring<br/> <span className="navFooterDescText">Smart Home<br/> Security Systems
                            </span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://eero.com/" className="nav_a">eero WiFi<br/> <span className="navFooterDescText">Stream 4K Video<br/> in Every Room</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://shop.ring.com/pages/neighbors-app" className="nav_a">Neighbors App <br/> <span className="navFooterDescText"> Real-Time Crime<br/> &amp; Safety Alerts
                            </span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/b?ie=UTF8&amp;node=14498690011&amp;ref_=amzn_nav_ftr_swa" className="nav_a">Amazon Subscription Boxes<br/> <span className="navFooterDescText">Top subscription boxes – right to your door</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="https://www.pillpack.com" className="nav_a">PillPack<br/> <span className="navFooterDescText">Pharmacy Simplified</span></Link></td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem"><Link to="/amazonsecondchance?_encoding=UTF8&amp;ref_=footer_asc" className="nav_a">Amazon Second Chance<br/> <span className="navFooterDescText">Pass it on, trade it in,<br/> give it a second life</span></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="footer-credits">
                Cloned by <Link to="https://elijahsoladoye.netlify.app/">Elijah Soladoye</Link> Thanks to <Link to="https://www.cleverprogrammer.com/">Clever Programmer</Link>
            </div>
        </div>
    )
}

export default Footer
