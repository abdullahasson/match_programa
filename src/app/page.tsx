// Next 
import Image from 'next/image';
// Components
import Heading from '@/components/Heading';
// images 
import ImageProject from "@/images/project management.webp";
import ImageBack from "@/images/back.webp"
import ImageLibrary from "@/images/library.webp";
import ImageWash from "@/images/wash.webp";
import ImageKitchen from "@/images/kitchen.webp"
import ImageBlue from "@/images/blue.webp"
import ImageSchedules from "@/images/schedules.webp"
// import ImageGreenSofa from "@/images/greensofa.webp"
// import ImageTry from "@/images/try.webp"


export default function Home() {
  return (
    <div id="content" className="site-content">
      <main className="site-main">
        <div style={{color: 'black'}} className="BlockHeroHome_block___zC7B pt-168 pt-lg-232 pb-100 bg-nn-tertiary">
          <div className="container-xl mw-xl-1440c">
            <h1 className="text-center mb-48 mb-xl-60">
              Beautiful software for interior designers &amp; architects.
            </h1>
            <div className="w-md-70 w-lg-60 w-xl-50 mx-auto">
              <div className="text-center fs-20 fs-md-22 fs-xl-24 fw-500 mb-24">
                Streamline your
                workflow and unlock your studios potential. Start your 7 day trial
              </div>
              <form>
                <div className="FormSubscribe_form__SPl7y mx-auto">
                  <div className="form-field-input FormSubscribe_input__ADVpp">
                    <input id="form_email" className="form-control border-0" name="email" type="email" placeholder="Enter your email" />
                  </div>
                  <button type="submit" className="FormSubscribe_btn__2eO17 btn btn-primary no-size">
                    Get started
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="BlockHeroHome_imagesWrapper__xd5Qa position-relative d-flex justify-content-center pt-240 pt-lg-84 px-side px-lg-0">
            <div className="BlockHeroHome_image1Wrapper__WNOG0 d-none d-lg-block">
              <Image 
                alt="Light" 
                loading="lazy"
                width={1390} 
                height={1390} 
                decoding="async" 
                data-nimg={1} 
                className="BlockHeroHome_imageBg__EfYcb BlockHeroHome_imageBg1__BazWc" 
                style={{color: 'transparent'}} 
                src={ImageBack} 
              />
              <Image 
                alt="Light" 
                loading="lazy" 
                width={968} 
                height={1121} 
                decoding="async" 
                data-nimg={1} 
                className="BlockHeroHome_image1__Q56_a" 
                style={{color: 'transparent'}}
                src={ImageProject} 
              />
            </div>
            <div className="BlockHeroHome_image2Wrapper__ot_j0 d-flex justify-content-end ps-94 ps-lg-0">
              <Image 
                alt="Interior" 
                loading="lazy" 
                width={3259} 
                height={2142} 
                decoding="async" 
                data-nimg={1} 
                className="BlockHeroHome_imageBg__EfYcb BlockHeroHome_imageBg2__oVB87 d-none d-lg-block" 
                style={{color: 'transparent'}}  
                src={ImageWash}
              />
              <Image 
                alt="Schedule" 
                loading="lazy" 
                width={1368} 
                height={1356} 
                decoding="async" 
                data-nimg={1} 
                className="BlockHeroHome_image2__CmuKu" 
                style={{color: 'transparent'}}
                src={ImageKitchen} 
              />
            </div>
            <div className="BlockHeroHome_image3Wrapper__gBXgF pe-94 pe-lg-0">
              <Image
                alt="Meeting" 
                loading="lazy" 
                width={4986} 
                height={2784} 
                decoding="async" 
                data-nimg={1} 
                className="BlockHeroHome_imageBg__EfYcb BlockHeroHome_imageBg3__bQU3K d-none d-lg-block" 
                style={{color: 'transparent'}} 
                src={ImageLibrary} 
              />
              <Image 
                alt="Paint" 
                loading="lazy" 
                width={1155} 
                height={981} 
                decoding="async" 
                data-nimg={1} 
                className="BlockHeroHome_image3__2mCuF" 
                style={{color: 'transparent'}} 
                src={ImageBlue} 
              />
            </div>
          </div>
        </div>

        <Heading 
          title='Built by & for interior designers' 
          des='Powerful tools to elevate your design process from concept to completion'
        />
        {/* Slider */}
        <div className="nn-block-feature-grids-2 py-48 py-lg-60 py-xl-96">
          <div className="container-xl px-0 px-lg-side">
            <div className="slick-slider BlockFeatureGrids2_slider__ZcnqO slick-initialized" dir="ltr">
              <div className="slick-list">
                <div className="slick-track" style={{width: 7038, opacity: 1, transform: 'translate3d(-1242px, 0px, 0px)'}}>
                  <div data-index={-3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/au/features/client-dashboard">
                            <Image  
                              alt='Client Dashboard'
                              loading="lazy" 
                              width={1062}
                              height={966} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}}
                              src={ImageProject}
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Client Dashboard</h3>
                          <div className="fs-17 lh-140">
                            All project stakeholders, together
                            on one page, accessible through a single link.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={-2} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/features/interior-design-approvals">
                            <Image 
                              alt='Product Approvals'
                              loading="lazy" 
                              width={796} 
                              height={632} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}} 
                              src={ImageProject}
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Product Approvals</h3>
                          <div className="fs-17 lh-140">
                            Easy approvals within one platform can
                            Reduce delays and enhance client satisfaction.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={-1} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/au/features/interior-design-webclipper">
                            <Image 
                              alt='Web Clipper'
                              loading="lazy" 
                              width={1326} 
                              height={1314} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}} 
                              src={ImageProject} 
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Web Clipper</h3>
                          <div className="fs-17 lh-140">
                            Spend less time on data entry and
                            reduce costly mistakes. 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={0} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{outline: 'none', width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/au/features/schedules-for-interior-designers">
                            <Image 
                              alt='Schedules' 
                              loading="lazy" 
                              width={1056} 
                              height={1083} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}} 
                              src={ImageSchedules}
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Schedules</h3>
                          <div className="fs-17 lh-140">
                            Goodbye spreadsheets.
                            Hello cloud.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={1} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/au/features/client-dashboard">
                            <Image  
                              alt='Client Dashboard'
                              loading="lazy" 
                              width={1062}
                              height={966} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}}
                              src={ImageProject}
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Client Dashboard</h3>
                          <div className="fs-17 lh-140">
                            All project stakeholders, together
                            on one page, accessible through a single link.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={2} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/features/interior-design-approvals">
                            <Image 
                              alt='Product Approvals'
                              loading="lazy" 
                              width={796} 
                              height={632} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}} 
                              src={ImageProject}
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Product Approvals</h3>
                          <div className="fs-17 lh-140">
                            Easy approvals within one platform can
                            Reduce delays and enhance client satisfaction.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/au/features/interior-design-webclipper">
                            <Image 
                              alt='Web Clipper'
                              loading="lazy" 
                              width={1326} 
                              height={1314} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}} 
                              src={ImageProject} 
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Web Clipper</h3>
                          <div className="fs-17 lh-140">
                            Spend less time on data entry and
                            reduce costly mistakes. 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={4} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{outline: 'none', width: 414}}>
                    <div>
                      <div className="col-6 col-lg-4" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                        <div className="BlockFeatureGrids2_itemImage__BRZ9_ mb-24 mb-lg-32 mb-xl-48">
                          <a style={{textDecoration: 'none'}} href="https://programa.design/au/features/schedules-for-interior-designers">
                            <Image 
                              alt='Schedules' 
                              loading="lazy" 
                              width={1056} 
                              height={1083} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent', transform: 'scale(100%)'}} 
                              src={ImageSchedules}
                            />
                          </a>
                        </div>
                        <div className="BlockFeatureGrids2_itemContent__7SoAL text-center">
                          <h3 className="fs-17 lh-140 mb-0 fw-500">Schedules</h3>
                          <div className="fs-17 lh-140">
                            Goodbye spreadsheets.
                            Hello cloud.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-24">
              <div className="SlickDots_block__WTiBN d-flex p-12 cg-6">
                <button className="SlickDots_item__Nzq1d SlickDots_itemActive__7bY6N">0</button>
                <button className="SlickDots_item__Nzq1d">1</button>
                <button className="SlickDots_item__Nzq1d">2</button>
                <button className="SlickDots_item__Nzq1d">3</button>
                <button className="SlickDots_item__Nzq1d">4</button>
                <button className="SlickDots_item__Nzq1d">5</button>
                <button className="SlickDots_item__Nzq1d">6</button>
              </div>
            </div>
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}


        {/* 
        <div className="BlockBanner_block__DyJN_ nn-block-banner pt-32 pt-md-48 pt-lg-60 pt-xl-96">
          <div className="container-xl mw-xl-1440c position-relative">
            <div className="BlockBanner_body__kLcdg positive-relative d-flex align-items-center justify-content-center p-10 text-center">
              <div className="BlockBanner_bg__jrO1c" style={{backgroundImage: `url(${ImageTry})`, backgroundPosition: '50% 0%'}} />
              <div className="BlockBanner_content__iAUZN">
                <div className="d-flex justify-content-center mb-12">
                  <a href="https://programa.design/features/schedules-for-interior-designers">
                    <span className="Tag_block__VAsHj btn no-size btn-outline-white-40">
                      Specification tools
                    </span>
                  </a>
                </div>
                <h2 className="fs-42 fs-sm-48 fs-md-60 fs-lg-72 fs-xl-86 mb-0">
                  Specification, streamlined
                </h2>
              </div>
            </div>
            <Image 
              alt='Specification'
              loading="lazy" 
              width={3206} 
              height={642} 
              decoding="async" 
              data-nimg={1} 
              className="BlockBanner_image__spwvc" 
              style={{color: 'transparent', maxWidth: '101%'}} 
              // src="https://programa.design/au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Febmdxr1o%2Fproduction%2Ffa2d6f2b2a2dc6181870cb2cfd32e85a8ae05db8-3206x642.png&w=3840&q=75" 
              src={ImageGreenSofa}
              />
          </div>
        </div>


        <Heading 
          title='Real-Time Specification, No Double Handling'
          des='Streamline your workflow with instant, accurate data'
        />

        <Heading 
          title='Effortless Project Management'
          des='Simplify your workflow with an intuitive, user-friendly platform'
        />

        <Heading 
          title='Collaborative Tools, One Shared Space'
          des='Bring your studio together to ideate, iterate, and create seamlessly'
        />
         

        <Heading 
          title='Purpose-Built Presentation for One Source of Truth'
          des='Seamlessly manage every stage of your project with unified tools'
        />

        */}

        <div>
          <div className="BlockHorizontalLine_block__E_CTM" />
          <div className="py-48 py-lg-60 py-xl-96">
            <div className="container-xl">
              <div className="d-flex justify-content-between align-items-end mb-16 mb-lg-48">
                <div>
                  <h2 className="fs-17 fs-lg-24 lh-140 mb-0">Programa in the Press</h2>
                  <div className="fs-17 fs-lg-24 lh-140">Explore the impact Programa is making in the
                    Architecture &amp; Design industry with features in top publications.
                  </div>
                </div>
                <div className="d-none d-md-flex cg-8">
                  <button type="button" className="btn-outline-grey btn p-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9987 16.6667L6.33203 12.0001M6.33203 12.0001L10.9987 7.33341M6.33203 12.0001H17.6654" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button><button type="button" className="SlickArrows_btnNext__olFnx btn-outline-grey btn p-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9987 16.6667L6.33203 12.0001M6.33203 12.0001L10.9987 7.33341M6.33203 12.0001H17.6654" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="slick-slider BlockNewsCarousel_slider__9Q4hK slick-initialized" dir="ltr">
                <div className="slick-list">
                  <div className="slick-track" style={{width: 5900, opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}>
                    {[0 , 1 , 2 , 3 , 4].map((item , i) => {
                      return (
                        <div key={i} data-index={item} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: 1180}}>
                          <div>
                            <div className="BlockNewsCarousel_sliderItem__gCKX7 d-flex align-items-stretch w-100" tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                                <Image 
                                  alt=''
                                  loading="lazy"
                                  width={3468} 
                                  height={1188} 
                                  decoding="async" 
                                  data-nimg={1} 
                                  className="BlockNewsCarousel_sliderItemImage__5PB_y" 
                                  style={{ color: 'transparent' }} 
                                  // src="https://programa.design/au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Febmdxr1o%2Fproduction%2Fdbcd90848c5aba550032adc5a1292d1ac048dcef-3468x1188.jpg&w=3840&q=75"
                                  src={ImageBack} 
                                />
                              <div className="BlockNewsCarousel_sliderItemContent__mbDvX d-flex flex-column p-16 p-lg-32 rg-64">
                                <div className="BlockNewsCarousel_sliderItemContentIntro__rKQFx flex-grow-1">
                                  <h3 className="fs-20 fs-lg-24 fw-400 lh-140 mb-24">Featured
                                    in Architectural Digest:
                                    26 Top Interior Design Software Programs to Download
                                    in 2024
                                  </h3>
                                  <div className="d-flex align-items-center cg-12">
                                    <a target="_self" className="btn btn-white-blur-10" href="https://www.architecturaldigest.com/story/best-interior-design-software-programs">
                                      View the feature
                                    </a>
                                  </div>
                                </div>
                                <div>
                                  <Image 
                                    alt='aaa'
                                    loading="lazy" 
                                    width={522} 
                                    height={336} 
                                    decoding="async" 
                                    data-nimg={1} 
                                    className="BlockNewsCarousel_sliderItemLogo__Hl5ct" 
                                    style={{color: 'transparent'}} 
                                    // src="https://programa.design/au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Febmdxr1o%2Fproduction%2Fb7c1121da5783a05c9f401230ef45198ffa5d64f-522x336.png&w=1080&q=75" 
                                    src={ImageBack}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center d-md-none mt-16">
                <div className="SlickDots_block__WTiBN d-flex p-12 cg-6"><button className="SlickDots_item__Nzq1d SlickDots_itemActive__7bY6N">0</button><button className="SlickDots_item__Nzq1d">1</button><button className="SlickDots_item__Nzq1d">2</button><button className="SlickDots_item__Nzq1d">3</button><button className="SlickDots_item__Nzq1d">4</button></div>
              </div>
            </div>
          </div>
          <div className="BlockMadeWithProgramaCarousel_block__yPk4l nn-block-made-with-programa-carousel py-48 py-lg-60 py-xl-96">
            <div className="container-xl mb-32 mb-lg-48 d-flex justify-content-between align-items-end">
              <div>
                <h2 className="fs-20 fs-lg-24 mb-0">Made with Programa</h2>
                <div className="fs-20 fs-lg-24 mb-24">See how top designers are using Programa</div>
                <div className="d-flex align-items-center cg-12"><a target="_self" className="btn btn-outline-grey" href="/au/made-with-programa">See all</a></div>
              </div>
              <div className=" d-none d-md-flex cg-8"><button type="button" className="btn btn-outline-grey p-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9987 16.6667L6.33203 12.0001M6.33203 12.0001L10.9987 7.33341M6.33203 12.0001H17.6654" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg></button><button type="button" className="BlockMadeWithProgramaCarousel_btnNext__0YlMG btn btn-outline-grey p-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9987 16.6667L6.33203 12.0001M6.33203 12.0001L10.9987 7.33341M6.33203 12.0001H17.6654" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg></button></div>
            </div>
            <div className="slick-slider BlockMadeWithProgramaCarousel_slider__UAnFw px-side slick-initialized" dir="ltr">
              <div className="slick-list">
                <div className="slick-track" style={{width: 20060, opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}>
                  {
                    [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16].map((item, index) => {
                      return (
                        <div key={item} style={{outline: 'none'}} data-index={index} className="slick-slide" tabIndex={-1} aria-hidden="true">
                          <div>
                            <div tabIndex={-1} style={{width: '100%', display: 'inline-block'}}>
                              <a className="BlockMadeWithProgramaCarousel_sliderItemLink__NSeqc" href="https://programa.design/editorial/studio-heim">
                                <div className="BlockMadeWithProgramaCarousel_sliderItemImage__J6G7N mb-8"> 
                                  <Image 
                                    alt="Studio Heim" 
                                    loading="lazy" 
                                    width={1320} 
                                    height={1652} 
                                    decoding="async" 
                                    data-nimg={1} 
                                    style={{color: 'transparent'}}   
                                    src={ImageBack}
                                  />
                                </div>
                                <h3 className="fs-17 fs-lg-24 mb-0">Studio Heim</h3>
                                <div className="mb-24 fs-lg-24">In Practice</div>
                                <div className="fs-10 ls-7 text-uppercase">
                                  <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 LINLITHGOW, SCOTLAND</div>
                                  <div className="BlockMadeWithProgramaCarousel_sliderItemDate__6oAt_">
                                    Residential</div>
                                </div>
                              </a></div>
                          </div>
                        </div>
                      )
                    })  
                  }
                </div>
              </div>
            </div>
          </div>
          <div className=" nn-block-global-social-proof py-48 py-lg-60 py-xl-96">
            <div className="BlockGlobalSocialProof_container__xoK_j container-xl mw-xl-1440c">
              <div className="BlockGlobalSocialProof_blockInner__A8ArX d-flex flex-column" style={{backgroundImage: 'url(https://cdn.sanity.io/images/ebmdxr1o/production/d249b32c4a1a066f5c9d879e29ea95e9d908066c-1440x488.jpg)'}}>
                <div className="BlockGlobalSocialProof_top__wlLb7 pt-32">
                  <div className="container-xl text-center">
                    <h2 className="fs-17 fs-xl-20 mb-0">Trusted by thousands of studios in 80+
                      countries</h2>
                    <div className="BlockGlobalSocialProof_intro__vjz12 fs-17 fs-xl-20">Managing
                      50,000+ projects</div>
                  </div>
                </div>
                <div className="BlockGlobalSocialProof_cityList__iDiS2 flex-grow-1 px-side position-relative w-100 fs-51 fs-sm-60 fs-md-80 fs-lg-90 fs-xl-105 lh-1 fw-500 text-center">
                  <ul> 
                    {
                      ['Madrid' , 'Hong' , 'Chicago' , 'Florence' , 'California' , 'Shanghai' , 'Dubai' , 'Paris' , 'London' , 'Mexico City' , 'San Francisco'].map((item , index) => {
                        return (
                          <li key={index} style={{transform: 'translate(-50%, calc(-50% + 315px))'}}>
                            {item}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="BlockLogoScroll_main__JyllT container-lg mx-auto" tabIndex={0}>
            <div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 50}}>
                <div className="BlockLogoScroll_blockLogoScroll__hFCso">
                  <div className="BlockLogoScroll_grad__4zAId">
                    <div className="BlockLogoScroll_left__5YZbu" />
                    <div className="BlockLogoScroll_right__YpH4f" />
                  </div>
                  <div className="BlockLogoScroll_logoScrollContainer__6lyVy" style={{transform: 'translateX(-115.378px)'}}>
                    {
                      [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20].map((item) => {
                        return (
                          <div key={item}>
                            <Image 
                              alt="Logo" 
                              loading="lazy" 
                              width={1312} 
                              height={1260} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent'}} 
                              src={ImageBack}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="BlockLogoScroll_blockLogoScroll__hFCso">
                  <div className="BlockLogoScroll_grad__4zAId">
                    <div className="BlockLogoScroll_left__5YZbu" />
                    <div className="BlockLogoScroll_right__YpH4f" />
                  </div>
                  <div className="BlockLogoScroll_logoScrollContainer__6lyVy" style={{transform: 'translateX(-948.715px)'}}>
                  {
                      [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20].map((item) => {
                        return (
                          <div key={item}>
                            <Image 
                              alt="Logo" 
                              loading="lazy" 
                              width={1312} 
                              height={1260} 
                              decoding="async" 
                              data-nimg={1} 
                              style={{color: 'transparent'}} 
                              src={ImageBack}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="nn-block-cta-banner-3 py-48 py-lg-60 py-xl-96">
            <div className="container-xl">
              <div className="BlockCTABanner3_body__oh1Gt">
                {/* <img 
                  alt="Assistance" 
                  loading="lazy" 
                  width={3478} 
                  height={2196} 
                  decoding="async" 
                  data-nimg={1} 
                  className="BlockCTABanner3_bg__Bw7cM" 
                  style={{color: 'transparent'}} 
                  src="https://programa.design/au/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Febmdxr1o%2Fproduction%2F26d98a8e5ec5c95faa80df6279b626271a0d294a-3478x2196.jpg&w=3840&q=75" 
                /> */}
                <div className="BlockCTABanner3_content__UFWse row flex-column flex-md-row justify-content-between align-items-start cg-32 rg-24 p-16 p-lg-24 p-xl-32">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <h2 className="fs-17 fs-lg-24 lh-140 mb-0">Wherever you are, we’re here to help
                    </h2>
                    <div className="fs-17 fs-lg-24 lh-140">Have questions or need assistance? Chat
                      with us today or book a demo with our team of experienced designers.
                    </div>
                  </div>
                  <div className="col-12 col-md-auto d-flex align-items-center cg-12"><button className="btn btn-white-blur-10">Chat with our team</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </div>
  );
}
