// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="Footer_block__o3e_S fs-14">
      <div className="py-32 py-lg-48 pb-xl-96">
        <div className="container-xl mw-xl-1440c">
          <div className="row gx-16 gx-lg-24 rg-32">
            <div className="col-6 col-md-4 col-lg-2">
              <h3 className="fs-14 mb-8 lh-140">Product</h3>
              <ul className="Footer_menu__DRfnJ d-flex flex-column rg-8">
                <li><Link href="/au/features/specification-tools" target="_self" className="text-decoration-none">Specification tools</Link></li>
                <li><Link href="/au/features/best-interior-design-project-management-software" target="_self" className="text-decoration-none">Management tools</Link></li>
                <li><Link href="/au/features/interior-design-mood-boards" target="_self" className="text-decoration-none">Creative tools</Link></li>
                <li><Link href="/au/features/client-dashboard" target="_self" className="text-decoration-none">Presentation tools</Link></li>
                <li><Link href="/au/features" target="_self" className="text-decoration-none">All features</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h3 className="fs-14 mb-8 lh-140">For Designers</h3>
              <ul className="Footer_menu__DRfnJ d-flex flex-column rg-8">
                <li><Link href="/au/features/interior-design-webclipper" target="_self" className="text-decoration-none">Web Clipper</Link></li>
                <li><Link href="/au/features/schedules-for-interior-designers" target="_self" className="text-decoration-none">Schedules</Link></li>
                <li><Link href="/au/features/product-libraries" target="_self" className="text-decoration-none">Product Library</Link></li>
                <li><Link href="/au/features/client-dashboard" target="_self" className="text-decoration-none">Client Dashboard</Link></li>
                <li><Link href="/au/features/interior-design-mood-boards" target="_self" className="text-decoration-none">Mood Boards</Link></li>
                <li><Link href="/au/features/purchase-orders-for-interior-designers" target="_self" className="text-decoration-none">Purchase Orders</Link></li>
                <li><Link href="/au/features/invoicing-and-xero-for-interior-designers" target="_self" className="text-decoration-none">Invoicing</Link></li>
                <li><Link href="/au/features/best-interior-design-project-management-software" target="_self" className="text-decoration-none">Project Management</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h3 className="fs-14 mb-8 lh-140">For Suppliers</h3>
              <ul className="Footer_menu__DRfnJ d-flex flex-column rg-8">
                <li><Link href="/au/for-brands" target="_self" className="text-decoration-none">Programa For Brands</Link></li>
                <li><Link href="/au/brand-features" target="_self" className="text-decoration-none">All Features</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h3 className="fs-14 mb-8 lh-140">Resources</h3>
              <ul className="Footer_menu__DRfnJ d-flex flex-column rg-8">
                <li><Link href="/au/blog" target="_self" className="text-decoration-none">Blog</Link></li>
                <li><Link href="/au/made-with-programa" target="_self" className="text-decoration-none">Made with Programa</Link></li>
                <li><Link href="/au/editorial" target="_self" className="text-decoration-none">Editorial</Link></li>
                <li><Link href="/au/pricing" target="_self" className="text-decoration-none">Pricing</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h3 className="fs-14 mb-8 lh-140">About</h3>
              <ul className="Footer_menu__DRfnJ d-flex flex-column rg-8">
                <li><Link href="/au/about" target="_self" className="text-decoration-none">Company</Link></li>
                <li><Link href="/au/contact-us" target="_self" className="text-decoration-none">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_section2__pmKys">
        <div className="py-16 py-md-24">
          <div className="container-xl mw-xl-1440c">
            <div className="row align-items-center align-items-lg-start gx-16 gx-lg-24 rg-64 rg-xl-120">
              <div className="col-6 col-lg-2 order-2 order-lg-0">
                <Link href="/au" className="text-decoration-none">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.0575 13.3769C27.0575 20.7648 21.0004 26.7539 13.5287 26.7539C6.05702 26.7539 0 20.7648 0 13.3769C0 5.98906 6.05702 0 13.5287 0C21.0004 0 27.0575 5.98906 27.0575 13.3769ZM42.79 26.1332L56.0029 13.4039L42.79 0.623047H25.1719L38.3061 13.4139L25.1731 26.1332H42.79ZM13.5287 55.9999C21.0004 55.9999 27.0575 50.0108 27.0575 42.6229C27.0575 35.2351 21.0004 29.246 13.5287 29.246C6.05702 29.246 0 35.2351 0 42.6229C0 50.0108 6.05702 55.9999 13.5287 55.9999ZM53.0226 3.12387H52.5286L52.5305 0.62207H53.3171L53.7531 1.89879C53.8685 2.23892 53.943 2.45295 53.9765 2.54088C54.0386 2.34925 54.1074 2.13522 54.1829 1.89879L54.6058 0.62207H55.3728V3.12387H54.8808V1.08186L54.1961 3.12387H53.7399L53.0226 1.10115V3.12387ZM51.3614 3.12387H50.8731V1.06258H50.0469V0.62207H52.1945V1.06258H51.3614V3.12387Z" fill="#1A1A1A"/>
                  </svg>
                </Link>
              </div>

              <div className="col-12 col-lg-2 d-none d-lg-block">
                <Link href="/au" className="text-decoration-none">Programa</Link>
              </div>

              <div className="col-12 col-lg-2 d-none d-lg-block">Freedom, by design</div>

              <div className="col-12 col-lg-6">
                <div className="row gx-16 gx-lg-24 rg-12">
                  <div className="col-12 col-xl-8 order-xl-2">
                    <form>
                      <div className="FormSubscribe_form__SPl7y">
                        <div className="form-field-input FormSubscribe_input__ADVpp">
                          <input
                            id="form_email"
                            className="form-control Footer_formSubscribeInput__NejTv border-0"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <button type="submit" className="FormSubscribe_btn__2eO17 btn btn-secondary no-size">
                          Get started
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-xl-4">Get started today for free</div>
                </div>
              </div>

              <div className="Footer_text2__u_tMu col-6 d-none d-lg-block">© Programa 2025</div>

              <div className="col-12 col-lg-3 col-xl-2 order-1 order-lg-0">
                <ul className="Footer_menu2__fKV5f d-flex flex-column flex-lg-row flex-wrap rg-2 cg-8">
                  <li><a href="https://www.instagram.com/programahq/" target="_self" rel="" className="text-decoration-none">Instagram</a></li>
                  <li><a href="https://www.facebook.com/programaHQ" target="_self" rel="" className="text-decoration-none">Facebook</a></li>
                  <li><a href="https://www.pinterest.com.au/programa_/" target="_self" rel="" className="text-decoration-none">Pinterest</a></li>
                  <li><a href="https://www.linkedin.com/company/40660547" target="_self" rel="" className="text-decoration-none">Linkedin</a></li>
                  <li><a href="https://www.youtube.com/channel/UC6LylAimQ_1hHK7gHy11yMg" target="_self" rel="" className="text-decoration-none">YouTube</a></li>
                </ul>
              </div>

              <div className="col-6 col-lg-3 col-xl-4 order-2 order-lg-0">
                <ul className="Footer_menu2__fKV5f">
                  <li><Link href="/au/terms-and-conditions" target="_self" className="text-decoration-none">Terms & Conditions</Link></li>
                  <li><Link href="/au/privacy-policy" target="_self" className="text-decoration-none">Privacy Policy</Link></li>
                  <li><Link href="/au/cookie-policy" target="_self" className="text-decoration-none">Cookie Policy</Link></li>
                  <li><Link href="/au/in-app-payment-services" target="_self" className="text-decoration-none">In App Payments Services</Link></li>
                  <li><Link href="/au/acceptable-use-policy" target="_self" className="text-decoration-none">Acceptable Use Policy</Link></li>
                  <li><Link href="/au/data-processing-addendum" target="_self" className="text-decoration-none">Data Processing Addendum</Link></li>
                </ul>
                <div className="Footer_text2__u_tMu d-lg-none">© Programa 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 py-md-16">
        <div className="container-xl mw-xl-1440c">
          <ul className="Footer_menu2__fKV5f d-flex flex-wrap gap-16">
            <li><Link href="/au/blog/what-is-programa" target="_self" className="text-decoration-none">What is Programa?</Link></li>
            <li><a href="https://intercom.help/programa/en" target="_self" rel="" className="text-decoration-none">Help Centre</a></li>
            <li><a href="https://chromewebstore.google.com/detail/programa-web-clipper/lbeieofginbjinflccjechojbmlbcdjj" target="_self" rel="" className="text-decoration-none">Download Web Clipper</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;