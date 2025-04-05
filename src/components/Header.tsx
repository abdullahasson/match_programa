// Next
import Link from "next/link";
// Logo
import Logo from "../../public/Logo"

const Header = () => {
    return (
        <header className="Header_header__ds50R py-12 bg-white">
            <nav>
                <div className="container-fluid mw-1440c">
                    <div className="row align-items-center">
                        <div className="col-6 col-lg-3">
                            <a href="/au">
                                <div className="Header_headerLogo__UqqS8">
                                    <Logo />
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-lg-9 d-flex justify-content-end justify-content-lg-start">
                            <button type="button" className="Header_btnShowBurgerMenu__RRchH btn btn-outline-grey p-8 d-lg-none">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66797 8.00033H14.3346M1.66797 3.66699H14.3346M1.66797 12.3337H14.3346" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="Header_burgerMenu__57W07 w-100 d-flex align-items-stretch p-16 p-lg-0">
                                <div className="Header_burgerMenuInner__iProN w-100 d-flex flex-column">
                                    <div className="Header_burgerMenuHeader__KnJ4v d-flex align-items-center justify-content-between d-lg-none ps-20 pe-12 py-18">
                                        <a href="/au"><svg width={116} height={28} viewBox="0 0 116 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5288 6.6885C13.5288 10.3825 10.5002 13.377 6.76438 13.377C3.02852 13.377 0 10.3825 0 6.6885C0 2.99455 3.02852 0 6.76438 0C10.5002 0 13.5288 2.99455 13.5288 6.6885ZM21.395 13.0667L28.0015 6.702L21.395 0.311523H12.5859L19.153 6.70698L12.5866 13.0667H21.395ZM6.76438 27.9998C10.5002 27.9998 13.5288 25.0053 13.5288 21.3113C13.5288 17.6174 10.5002 14.6228 6.76438 14.6228C3.02852 14.6228 0 17.6174 0 21.3113C0 25.0053 3.02852 27.9998 6.76438 27.9998ZM26.5113 2.31152H26.2643L26.2653 0.311523H26.6585L26.8766 1.33216C26.9343 1.60407 26.9715 1.77517 26.9883 1.84547C27.0193 1.69227 27.0537 1.52117 27.0915 1.33216L27.3029 0.311523H27.6864V2.31152H27.4404V0.679093L27.0981 2.31152H26.87L26.5113 0.694512V2.31152ZM25.6807 2.31152H25.4365V0.663674H25.0234V0.311523H26.0972V0.663674H25.6807V2.31152Z" fill="currentColor" />
                                            <path d="M111.87 17.4771C110.167 17.4771 109.315 16.3211 109.315 14.0093C109.315 11.5574 110.285 10.4868 111.87 10.4868C113.408 10.4868 114.498 11.703 114.498 14.0093C114.498 16.3156 113.418 17.4771 111.87 17.4771ZM111.458 18.8853C112.199 18.8853 112.813 18.7206 113.298 18.3911C113.769 18.086 114.162 17.6755 114.443 17.1929V18.62H116V9.34258H114.397V10.7883C114.121 10.3055 113.739 9.88996 113.28 9.57206C112.804 9.25201 112.199 9.08718 111.458 9.08718C109.323 9.0507 107.648 11.0075 107.684 13.9914C107.648 16.9736 109.324 18.9224 111.458 18.886L111.458 18.8853ZM92.8475 18.6206H94.4411V14.3114C94.436 13.7226 94.4851 13.1346 94.5876 12.5546C94.68 12.029 94.9107 11.5367 95.2564 11.1272C95.6043 10.7156 96.1262 10.505 96.8221 10.505C98.1318 10.505 98.8827 11.2187 98.8827 12.9374V18.6206H100.44V14.3114C100.435 13.72 100.481 13.1292 100.577 12.5454C100.664 12.0207 100.895 11.5299 101.246 11.1272C101.601 10.7156 102.134 10.505 102.848 10.505C104.158 10.505 104.89 11.2187 104.89 12.9374V18.6206H106.484V12.4721C106.484 10.313 105.339 9.08686 103.242 9.08686C102.372 9.08686 101.685 9.28818 101.191 9.6908C100.687 10.0934 100.339 10.5508 100.128 11.0725C99.652 9.81882 98.5807 9.08814 97.1976 9.08814C96.4651 9.08814 95.8788 9.25297 95.4394 9.59127C94.9905 9.92988 94.6516 10.3143 94.4046 10.7534V9.34258H92.8475V18.6206ZM86.6924 17.4771C84.9892 17.4771 84.1377 16.3211 84.1377 14.0093C84.1377 11.5574 85.1078 10.4868 86.6924 10.4868C88.231 10.4868 89.3208 11.703 89.3208 14.0093C89.3208 16.3156 88.2394 17.4771 86.692 17.4771H86.6924ZM86.2797 18.8853C87.0216 18.8853 87.6352 18.7206 88.1207 18.3911C88.5919 18.086 88.984 17.6755 89.2655 17.1929V18.62H90.8222V9.34258H89.2196V10.7883C88.9434 10.3055 88.5617 9.88996 88.1023 9.57206C87.626 9.25201 87.0216 9.08718 86.2797 9.08718C84.1454 9.0507 82.47 11.0075 82.5069 13.9914C82.47 16.974 84.1461 18.9228 86.2797 18.8863V18.8853ZM76.6722 18.6209H78.2658V14.3674C78.2658 12.0342 79.2549 10.8661 81.2331 10.8632C81.5649 10.8627 81.896 10.8934 82.222 10.9547V9.32498C81.9103 9.24962 81.5905 9.21264 81.2697 9.21488C79.6204 9.20592 78.6047 10.441 78.2474 11.2738V9.34258H76.6722V18.6209ZM70.5352 17.102C68.9506 17.102 67.9805 16.1047 67.9805 13.8265C67.9805 11.5302 68.9603 10.4871 70.5352 10.4871C72.0738 10.4871 73.1636 11.7033 73.1636 13.8265C73.1636 15.9389 72.0738 17.102 70.5352 17.102ZM70.3243 22.5C72.9343 22.5 74.6378 20.917 74.6378 18.3735V9.34258H73.1083V10.7883C72.822 10.3066 72.4309 9.89396 71.9635 9.58038C71.4785 9.25116 70.865 9.08654 70.1232 9.08654C67.9343 9.05902 66.3225 10.9806 66.35 13.8077C66.3225 16.6165 67.9346 18.4648 70.1232 18.4372C71.6159 18.4372 72.6232 17.7971 73.1086 16.9186V18.3185C73.1086 20.0292 72.0091 21.0908 70.3247 21.0908C68.7495 21.0908 67.8977 20.3953 67.6047 19.0687L66.0296 19.6176C66.231 20.5691 66.7164 21.2918 67.4848 21.777C68.2447 22.2619 69.1987 22.4997 70.3237 22.4997L70.3243 22.5ZM61.0651 17.4771C59.4624 17.4771 58.4001 16.315 58.4001 14.0093C58.4001 11.7036 59.4715 10.4868 61.0651 10.4868C62.6587 10.4868 63.73 11.703 63.73 14.0093C63.73 16.3156 62.6677 17.4771 61.0651 17.4771ZM61.0651 18.8853C63.4461 18.9311 65.4245 16.7169 65.3786 13.9904C65.4151 11.2456 63.5286 9.04045 61.0651 9.08622C58.6016 9.04045 56.715 11.2456 56.7516 13.9904C56.706 16.7169 58.675 18.9311 61.0651 18.8853ZM50.9541 18.6206H52.5477V14.3674C52.5477 12.0342 53.5368 10.8661 55.515 10.8632C55.8468 10.8627 56.1779 10.8934 56.5039 10.9547V9.32498C56.1922 9.24962 55.8723 9.21264 55.5515 9.21488C53.9023 9.20592 52.8866 10.441 52.5292 11.2738V9.34258H50.9541V18.6206ZM41.6851 11.9142V7.09229H44.8904C46.7954 7.09229 47.7478 8.00732 47.7478 9.46068C47.7478 10.8606 46.7861 11.9129 44.8904 11.9129L41.6851 11.9142ZM40 18.6206H41.6851V13.4146H45.1928C47.9036 13.4422 49.5519 11.7769 49.526 9.46197C49.5535 7.12909 47.9234 5.47281 45.2128 5.50034H40V18.6206Z" fill="currentColor" />
                                        </svg></a><button type="button" className="btn p-8"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" />
                                        </svg></button>
                                    </div>
                                    <div className="Header_burgerMenuMain__dReYG row gx-0 gx-lg-gutter">
                                        <div className="Header_burgerMenuMainNav__V03gM col-12 col-lg-8 flex-grow-1 d-flex align-items-stretch">
                                            <ul className="Header_menu__OQMh_ d-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center cg-4 fs-14 lh-140 py-8 p-lg-0 w-100">
                                                <li className="Header_menuItem__mh_9T Header_menuItemHasChildren__cSOMC">
                                                    <button className="Header_menuItemLink__Ots1K no-size btn btn-link">Product
                                                    </button><button type="button" className="Header_btnToggleSubMenu__7RG1W btn p-4 d-lg-none"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 2.66699L11.3333 8.00031L6 13.3337" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round">
                                                        </path>
                                                    </svg></button>
                                                    <ul className="Header_menuItemSubSimple__MqvZH p-lg-4">
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size d-flex justify-content-between align-items-start" target="_self" href="/au/features">
                                                            <div>Features<div className="Header_menuItemLinkIntro__CUZfa">
                                                                Freedom, by design.</div>
                                                            </div>
                                                            <div className="Header_menuItemLinkIcon__N4Igz d-flex p-6">
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 2.33333C2 2.14924 2.14924 2 2.33333 2H7C7.1841 2 7.33333 2.14924 7.33333 2.33333V7C7.33333 7.1841 7.1841 7.33333 7 7.33333H2.33333C2.14924 7.33333 2 7.1841 2 7V2.33333ZM2.66667 2.66667V6.66667H6.66667V2.66667H2.66667ZM8.66667 2.33333C8.66667 2.14924 8.81591 2 9 2H13.6667C13.8508 2 14 2.14924 14 2.33333V7C14 7.1841 13.8508 7.33333 13.6667 7.33333H9C8.81591 7.33333 8.66667 7.1841 8.66667 7V2.33333ZM9.33333 2.66667V6.66667H13.3333V2.66667H9.33333ZM2 9C2 8.81591 2.14924 8.66667 2.33333 8.66667H7C7.1841 8.66667 7.33333 8.81591 7.33333 9V13.6667C7.33333 13.8508 7.1841 14 7 14H2.33333C2.14924 14 2 13.8508 2 13.6667V9ZM2.66667 9.33333V13.3333H6.66667V9.33333H2.66667ZM8.66667 9C8.66667 8.81591 8.81591 8.66667 9 8.66667H13.6667C13.8508 8.66667 14 8.81591 14 9V13.6667C14 13.8508 13.8508 14 13.6667 14H9C8.81591 14 8.66667 13.8508 8.66667 13.6667V9ZM9.33333 9.33333V13.3333H13.3333V9.33333H9.33333Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </a></li>
                                                        <li className="Header_menuItemHorizontalLine__nQQwO" />
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/specification-tools">Specification
                                                            tools<div className="Header_menuItemLinkIntro__CUZfa">
                                                                Eliminate the data entry from your workflow
                                                            </div></a></li>
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/best-interior-design-project-management-software">Management
                                                            tools<div className="Header_menuItemLinkIntro__CUZfa">
                                                                Manage projects effortlessly and intuitively
                                                            </div></a></li>
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/interior-design-mood-boards">Creative
                                                            tools<div className="Header_menuItemLinkIntro__CUZfa">
                                                                Ideate, iterate and create in one space
                                                            </div></a></li>
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/client-dashboard">Presentation
                                                            tools<div className="Header_menuItemLinkIntro__CUZfa">
                                                                Purpose-built from concept to completion
                                                            </div></a></li>
                                                    </ul>
                                                </li>
                                                <li className="Header_menuItem__mh_9T"><button type="button" className="Header_menuItemLink__Ots1K no-size btn btn-link">Solutions</button><button type="button" className="Header_btnToggleSubMenu__7RG1W btn p-4 d-lg-none"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 2.66699L11.3333 8.00031L6 13.3337" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg></button>
                                                    <div className="Header_menuItemSubMega__rmso6">
                                                        <ul className="Header_megaItemSubMegaNavigation__QYzn_ pb-8 p-lg-8 d-flex cg-4">
                                                            <li><button type="button" className="Header_megaItemSubMegaNavigationBtn__TVJB4 Header_megaItemSubMegaNavigationBtnActive__JoQlB btn fs-14">For
                                                                Designers</button></li>
                                                        </ul>
                                                        <div className="Header_menuItemSubMegaContentWrapper__7iVOj px-lg-6 py-lg-12">
                                                            <div className="Header_menuItemSubMegaContentActive__yN4Fd Header_menuItemSubMegaContent__8vXGv flex-column flex-lg-row rg-lg-12 cg-6">
                                                                <div className="Header_menuItemSubMegaContentItem__gULKF pt-24 pb-12 pt-lg-0 pb-lg-0">
                                                                    <div className="Header_menuItemSubMegaContentHeading__nJzJ6 fs-12 px-12 mb-6">
                                                                        Features</div>
                                                                    <ul className="d-flex flex-column rg-4">
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/schedule-software-for-interior-designers-architects-clients">Schedules
                                                                            <div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Centralise specification
                                                                                &amp; reduce error.</div>
                                                                        </a></li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/client-dashboard-for-designers-and-architects">Client
                                                                            Dashboard<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Collaborate and share
                                                                                project details.</div></a>
                                                                        </li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/pin-boards-mood-boards-for-interior-designers">Mood
                                                                            Boards<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Visualise, present &amp;
                                                                                develop ideas.</div></a>
                                                                        </li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/invoicing-and-xero-for-interior-designers">Invoicing
                                                                            <div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Create and send invoices.
                                                                            </div>
                                                                        </a></li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="https://programa.design/features/interior-design-approvals">Client
                                                                            Approvals<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Easy approvals &amp;
                                                                                sharing.</div></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="Header_menuItemSubMegaContentItem__gULKF pt-24 pb-12 pt-lg-0 pb-lg-0">
                                                                    <div className="Header_menuItemSubMegaContentHeading__nJzJ6 fs-12 px-12 mb-6">
                                                                    </div>
                                                                    <ul className="d-flex flex-column rg-4">
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/interior-design-webclipper">Web
                                                                            Clipper<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Project sourcing made easy.
                                                                            </div></a></li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/product-libraries">Product
                                                                            Library<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                All-in-one hub for product
                                                                                details.</div></a></li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/purchase-orders-for-interior-designers">Purchase
                                                                            Orders<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Efficient ordering,
                                                                                simplified.</div></a></li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/features/best-interior-design-project-management-software">Project
                                                                            Management<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Coordinate your practice.
                                                                            </div></a></li>
                                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="https://programa.design/trade-portal">Trade
                                                                            Portal<div className="Header_menuItemLinkIntro__CUZfa">
                                                                                Marketplace for product
                                                                                sourcing.</div></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="Header_menuItem__mh_9T">
                                                    <Link href="/pricing">Pricing</Link>
                                                </li>
                                                <li className="Header_menuItem__mh_9T Header_menuItemHasChildren__cSOMC">
                                                    <button className="Header_menuItemLink__Ots1K no-size btn btn-link">
                                                        Resources
                                                    </button>
                                                    <button type="button" className="Header_btnToggleSubMenu__7RG1W btn p-4 d-lg-none">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 2.66699L11.3333 8.00031L6 13.3337" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <ul className="Header_menuItemSubSimple__MqvZH p-lg-4">
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/blog">Blog<div className="Header_menuItemLinkIntro__CUZfa">
                                                            Company news, product updates, and more.
                                                        </div></a></li>
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/made-with-programa">Made with Programa
                                                            <div className="Header_menuItemLinkIntro__CUZfa">
                                                                Success stories from our users</div>
                                                        </a>
                                                        </li>
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/editorial">Editorial
                                                            <div className="Header_menuItemLinkIntro__CUZfa">The
                                                                best of design and architecture</div>
                                                        </a>
                                                        </li>
                                                        <li className="Header_menuItemHorizontalLine__nQQwO" />
                                                        <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size d-flex justify-content-between align-items-start" target="_self" href="https://programa.design/changelog">
                                                            <div>Changelog<div className="Header_menuItemLinkIntro__CUZfa">
                                                                New updates and improvements.</div>
                                                            </div>
                                                            <div className="Header_menuItemLinkIcon__N4Igz d-flex p-6">
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 2.33333C2 2.14924 2.14924 2 2.33333 2H7C7.1841 2 7.33333 2.14924 7.33333 2.33333V7C7.33333 7.1841 7.1841 7.33333 7 7.33333H2.33333C2.14924 7.33333 2 7.1841 2 7V2.33333ZM2.66667 2.66667V6.66667H6.66667V2.66667H2.66667ZM8.66667 2.33333C8.66667 2.14924 8.81591 2 9 2H13.6667C13.8508 2 14 2.14924 14 2.33333V7C14 7.1841 13.8508 7.33333 13.6667 7.33333H9C8.81591 7.33333 8.66667 7.1841 8.66667 7V2.33333ZM9.33333 2.66667V6.66667H13.3333V2.66667H9.33333ZM2 9C2 8.81591 2.14924 8.66667 2.33333 8.66667H7C7.1841 8.66667 7.33333 8.81591 7.33333 9V13.6667C7.33333 13.8508 7.1841 14 7 14H2.33333C2.14924 14 2 13.8508 2 13.6667V9ZM2.66667 9.33333V13.3333H6.66667V9.33333H2.66667ZM8.66667 9C8.66667 8.81591 8.81591 8.66667 9 8.66667H13.6667C13.8508 8.66667 14 8.81591 14 9V13.6667C14 13.8508 13.8508 14 13.6667 14H9C8.81591 14 8.66667 13.8508 8.66667 13.6667V9ZM9.33333 9.33333V13.3333H13.3333V9.33333H9.33333Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                                <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="/au/editorial">Editorial</a></li>
                                                <li className="Header_menuItem__mh_9T"><a className="Header_menuItemLink__Ots1K no-size" target="_self" href="https://programa.design/for-brands">For Brands</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="Header_headerButtons__fnL4b justify-content-lg-end cg-8 p-16 p-lg-0 d-flex align-items-center cg-12">
                                                <a target="_self" className="btn btn-secondary btn-sm w-50 w-lg-auto d-lg-none" href="https://app.programa.design/login/">Log in</a><a target="_self" className="btn btn-link btn-sm w-50 w-lg-auto d-none d-lg-block" href="https://app.programa.design/login/">Log in</a><a target="_self" className="btn btn-primary btn-sm w-50 w-lg-auto" href="https://app.programa.design/register/">Start for
                                                    free</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Header;