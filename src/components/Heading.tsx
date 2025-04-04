// components/Heading.tsx
import Link from 'next/link';


const Heading = ({title , des} : {title: string, des: string}) => {
  return (
    <div className="BlockCTA2_block__xC0W_ nn-block-cta-2">
      <div className="container-xl py-48 py-lg-60 py-xl-96 text-center">
        <div className="BlockCTA2_content__6jFng mx-auto w-920px">
          <h2 className="BlockCTA2_intro__2kdI2 fs-20 fs-md-24 fs-lg-28 fs-xl-35 lh-115 mb-0">
            {title}
          </h2>
          <div className="fs-20 fs-md-24 fs-lg-28 fs-xl-35 mb-24 lh-115">
            {des}
          </div>
          <div className="cg-12 justify-content-center d-flex align-items-center cg-12">
            <Link 
              target="_self" 
              className="btn btn-secondary" 
              href="https://app.programa.design/register/"
            >
              Get started
            </Link>

            <button className="btn btn-outline-grey">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;