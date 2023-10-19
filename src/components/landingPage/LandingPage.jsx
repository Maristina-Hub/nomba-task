import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/footer";
import img1 from "../img/Improving-experience.jpeg";
import img2 from "../img/Img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/Integrity-pos.webp";
import phone from "../img/phone.webp";

const LandingPage = () => {
  return (
    <div className="w-[100%] overflow-x-hidden ">
      <Navbar />
      <div className="xl:pt-[60px] lg:pt-[120px] sm:pt-[70px]  grid xl:grid-cols-2 gap-[40px] mb-[-50px] px-[25px] ">
        <div className="">
          <h1 className="md:text-[65px] text-[37px] md:leading-[75px] leading-[44.4px] font-bold md:max-w-[655px] font-[inter-bold]   ">
            Improving payment experience for businesses
          </h1>
          <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] md:max-w-[330px] my-6">
            We are creating tools for businesses to manage sales, money and
            payments without hurdles
          </p>
          <a
            className="rounded text-center gap-2 font-semibold text-[16px] transition duration-400 inline-flex items-center justify-center disabled:cursor-not-allowed md:min-w-[275px] h-[58px] min-w-[100%] bg-primary hover:bg-primary/80 disabled:bg-secondary undefined b"
            href="https://dashboard.nomba.com/auth/sign-up-new"
            target="_blank"
            rel="noreferrer"
          >
            <span className="block">Get Started</span>
          </a>
        </div>
        <div className="overflow-visible z-40 ">
          <img src={img1} alt="experience" className="rounded-lg"/>
        </div>
      </div>
      <div className="bg-black px-8 md:px-16 py-20 lg:py-40 overflow-hidden relative">
        <svg
          className="absolute top-[0px] md:-left-[369px] -left-[380px] lg:-left-[200px]  border-2 border-red"
          width="577"
          height="319"
          viewBox="0 0 577 319"
          fill="none"
        >
          <path
            d="M577 -240.834L577 7.60678L0.731982 318.259L0.73196 69.8187L577 -240.834Z"
            fill="#444444"
          ></path>
        </svg>
        <svg
          className="absolute -top-10 -left-[36px] xl:-left-[60px]  "
          width="81"
          height="479"
          viewBox="0 0 81 479"
          fill="none"
        >
          <path
            d="M-565 -148.287L-565 130.101L80.732 478.2L80.732 199.812L-565 -148.287Z"
            fill="#BBBBBB"
          ></path>
        </svg>
        <svg
          className="absolute bottom-[0px] md:-right-[480px] -right-[545px]  "
          width="1169"
          height="531"
          viewBox="0 0 1169 531"
          fill="none"
        >
          <path
            d="M0 1298.4V721.745L1337.58 0.686646V577.344L0 1298.4Z"
            fill="#444444"
          ></path>
        </svg>
        <div className="md:max-w-[1335px] px-[25px] md:mx-auto undefined ">
          <div className="grid grid-cols-3">
            <div className="md:col-span-2 col-span-3">
              <h6 className="text-[14px] leading-[19.6px] font-semibold uppercase tracking-[3px]  text-primary">
                Our Big Story
              </h6>
              <h2 className="font-bold md:text-[48px] tracking-[-0.03em] text-[32px] md:leading-[59.04px] leading-[40.2px] md:tracking-[-0.04em] mt-10 text-white">
                We set out to enable Africa's economy, we haven't stopped.
              </h2>
              <div className="max-w-[600px]">
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] mt-10 text-white">
                  We are building an ecosystem that simplifies how businesses
                  accept payments, make payments and manage operations. This
                  journey started in 2016 with simplifying access to financial
                  services using "Kudi.ai" a chatbot integration that responds
                  to financial requests on social apps.{" "}
                </p>
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] mt-10 text-white ">
                  It then morphed into powering a community of independent
                  businesses we call Agents who act as neighborhood banks
                  offering basic financial services such as cash withdrawal,
                  transfer and bill payments to all Nigerians, especially those
                  in underserved communities.
                </p>
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] mt-10 text-white ">
                  {" "}
                  We believe this technology and innovative solution can power
                  all kinds of businesses whether they are accepting payments
                  for goods and services or helping others access cash or send
                  money. So, we created easy-to-use tools with flexible options
                  for all kinds of businesses to accept, process and manage
                  payments online and offline.{" "}
                </p>
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] mt-10 text-white ">
                  {" "}
                  As we stay true to our mission to make financial services
                  accessible and affordable, we are one step closer to bringing
                  a lasting change to Africa and Africa's commerce.
                </p>
              </div>
              <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] mt-10 text-white">
                At Nomba, we mean business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-100 py-[77px] md:pt-[102px]">
        <div className="md:max-w-[1335px] px-[25px] md:mx-auto undefined">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[10px] gap-[53px]">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
                  <path
                    d="M10.0768 10.6313V15.2869L8.06006 16.4491L6.04333 17.6113L4.02661 18.7734L2.01672 19.9356V19.9425L0 21.1046V16.4491L2.01672 15.2869L4.02661 14.1247L6.04333 12.9625L8.06006 11.8004V11.7935L10.0768 10.6313Z"
                    fill="#FFCC00"
                  ></path>
                  <path
                    d="M10.0768 5.98461V10.6333L8.06006 9.47115L6.04333 8.30896L4.02661 7.14679L2.01672 5.98461L0 4.82243V0.16687L2.01672 1.32905L4.02661 2.49123L6.04333 3.65341L8.06006 4.82243L10.0768 5.98461Z"
                    fill="#FFCC00"
                  ></path>
                </svg>
                <div className="w-full ml-1 border-b-[1px] border-black border-solid"></div>
              </div>
              <div className="max-w-[326px]">
                <h4
                  className="md:text-[28px] text-[18px] md:leading-[39.2px] leading-[25.2px] font-semibold mt-7 md:mt-12 mb-1 
                  md:mb-4 text-[#121212]"
                >
                  The Problem
                </h4>
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] text-[#121212] ">
                  Businesses find it hard to accept payments, track sales,
                  manage operations and be incharge of their business.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
                  <path
                    d="M10.0768 10.6313V15.2869L8.06006 16.4491L6.04333 17.6113L4.02661 18.7734L2.01672 19.9356V19.9425L0 21.1046V16.4491L2.01672 15.2869L4.02661 14.1247L6.04333 12.9625L8.06006 11.8004V11.7935L10.0768 10.6313Z"
                    fill="#FFCC00"
                  ></path>
                  <path
                    d="M10.0768 5.98461V10.6333L8.06006 9.47115L6.04333 8.30896L4.02661 7.14679L2.01672 5.98461L0 4.82243V0.16687L2.01672 1.32905L4.02661 2.49123L6.04333 3.65341L8.06006 4.82243L10.0768 5.98461Z"
                    fill="#FFCC00"
                  ></path>
                </svg>
                <div className="w-full ml-1 border-b-[1px] border-black border-solid"></div>
              </div>
              <div className="max-w-[326px]">
                <h4 className="md:text-[28px] text-[18px] md:leading-[39.2px] leading-[25.2px] font-semibold mt-7 md:mt-12 mb-1 md:mb-4 text-[#121212] ">
                  Our Big Idea
                </h4>
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] text-[#121212] ">
                  {" "}
                  A simple suite of tools to accept offline, online payments and
                  manage sales.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
                  <path
                    d="M10.0768 10.6313V15.2869L8.06006 16.4491L6.04333 17.6113L4.02661 18.7734L2.01672 19.9356V19.9425L0 21.1046V16.4491L2.01672 15.2869L4.02661 14.1247L6.04333 12.9625L8.06006 11.8004V11.7935L10.0768 10.6313Z"
                    fill="#FFCC00"
                  ></path>
                  <path
                    d="M10.0768 5.98461V10.6333L8.06006 9.47115L6.04333 8.30896L4.02661 7.14679L2.01672 5.98461L0 4.82243V0.16687L2.01672 1.32905L4.02661 2.49123L6.04333 3.65341L8.06006 4.82243L10.0768 5.98461Z"
                    fill="#FFCC00"
                  ></path>
                </svg>
                <div className="w-full ml-1 border-b-[1px] border-black border-solid"></div>
              </div>
              <div className="max-w-[326px]">
                <h4 className="md:text-[28px] text-[18px] md:leading-[39.2px] leading-[25.2px] font-semibold mt-7 md:mt-12 mb-1 md:mb-4 text-[#121212] ">
                  Our Solution
                </h4>
                <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] text-[#121212] ">
                  Card payments, POS terminals, Management and Banking tools for
                  over 100,000 businesses to grow and get paid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[60px] lg:py-[150px] ">
        <div className="md:max-w-[1335px] px-[25px] md:mx-auto undefined  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]  ">
            <div className="col-span-1  ">
              <h3 className="md:text-[40px] text-[32px] md:leading-[47.87px] leading-[39.4px]  font-semibold text-[#121212]">
                We've been with you, at every stage of your business
              </h3>
              <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] mt-4 text-[#121212] ">
                Have a great look at what we've achieved together
              </p>
            </div>
            <div className=" grid grid-cols-3  justify-between  w-[800px] ">
              <img
                src={img2}
                alt="Kudi Terminal"
                className="w-[211.15px] h-[320px] block static bg-cover opacity-[1] skew-y-[12deg] ml-[35px] shadow-2xl"
                aria-hidden
              />

              <img
                src={img3}
                alt="man"
                className="w-[281px] h-[347.06px] block static"
              />
              
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px] lg:pb-[70px] pb-[59px] text-center">
        <h3 className="md:text-[40px] text-[32px] md:leading-[47.87px] leading-[39.4px] font-semibold lg:max-w-auto sm:max-w-[60%] max-w-[300px] mx-auto text-[#121212]">
          Our EPIC core values support and drive our mission
        </h3>
        <p className="md:text-[18px] text-[16px] md:leading-[32.8px] leading-[28.8px] pt-[27px] texxt-[#121212]">
          We care, we are committed, we take our work seriously, and we work
          together
        </p>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-between h-[500px] px-[25px]">
        <div className="">
          <button className="flex items-start text-left w-full">
            <div className="xl:w-[544px] lg:w-[480px] w-full border-b border-black pb-6 ">
              <div className="flex justify-between items-center">
                <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] font-semibold normal-case text-[#121212] ">
                  Empathy
                </h5>

                <svg
                  className="scale-75"
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                >
                  <path
                    d="M19 11.5L10.5 3L2 11.5"
                    stroke="#FFCC00"
                    stroke-width="3"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>

              <p className="md:text-[16px] text-[14px] md:leading-[28.8px] leading-[25.2px] block mt-3 md:max-w-[95%] break-after-auto text-[#121212]">
                We treat everyone with kindness and respect; our customers and
                people are valuable to us.
              </p>
            </div>
          </button>

          <button className="flex items-start text-left w-full">
            <div className="xl:w-[544px] lg:w-[480px] w-full border-b border-black pb-6 pt-10">
              <div className="flex justify-between items-center">
                <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] font-semibold normal-case text-[#121212] ">
                  Passion
                </h5>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#121212"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <p className="md:text-[16px] text-[14px] md:leading-[28.8px] leading-[25.2px] hidden  text-[#121212]">
                We are committed to everything we do while leveraging our skills
                and grit to meet our goals.
              </p>
            </div>
          </button>

          <button className="flex items-start text-left w-full">
            <div className="xl:w-[544px] lg:w-[480px] w-full border-b border-black pb-6 pt-10">
              <div className="flex justify-between items-center">
                <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] font-semibold normal-case text-[#121212] ">
                  Integrity
                </h5>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#121212"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <p className="md:text-[16px] text-[14px] md:leading-[28.8px] leading-[25.2px] hidden text-[#121212] ">
                We are accountable to our customers and our people to do what is
                right, and we stand by it.
              </p>
            </div>
          </button>

          <button className="flex items-start text-left w-full">
            <div className="xl:w-[544px] lg:w-[480px] w-full border-b border-black pb-6 pt-10">
              <div className="flex justify-between items-center">
                <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] font-semibold normal-case  text-[#121212]">
                  Collaboration
                </h5>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#121212"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <p className="md:text-[16px] text-[14px] md:leading-[28.8px] leading-[25.2px] hidden text-[#121212] ">
                We work together as a team; with our customers, partners and our
                people to achieve our individual and collective growth.
              </p>
            </div>
          </button>
        </div>

        <div>
          <div>
            <div className="md:h-[658px] xl:w-[654px] lg:w-[480px] h-[400px] mt-10 lg:mt-0 lg:absolute clip-path-imgpolygon px-[25px]  ">
              <div className=" w-full h-full  ">
                <div className="block max-w-[5472px]  ">
                  <img
                    alt="po"
                    role="presentation"
                    aria-hidden="true"
                    src={img4}
                    // src="data:image/svg+xml;charset=utf-8,%3Csvg height='3648' width='5472' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                    className="block max-w-[100%] static h-[654px] w-[688px] bg-cover bg-center  "
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="md:max-w-[1280px] ml-[48px] ">
        <div className="bg-black md:pt-[74px] pt-[55px] lg:my-[180px] my-[90px] max-h-[780px] md:max-h-[1010px] lg:max-h-[700px] overflow-hidden mt-[320px] ">
          <h3 className="md:text-[40px] text-[32px] md:leading-[47.87px] leading-[39.4px] font-semibold md:max-w-[635px] max-w-[325px] mx-auto text-center md:mb-[40px] text-[#ffffff]  ">
            The Smartest Way to Accept Offline and Online Payments
          </h3>
          <div className="flex flex-col lg:flex-row justify-between md:px-[70px] px-[25px]">
            <div>
              <div className="flex gap-4 items-center mb-8 mt-14">
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none">
                  <g clip-path="url(#clip0_2107_1792)">
                    <path
                      d="M3.65913 16.8297V15.7638C3.65913 15.3552 3.41746 15.0888 3.00318 15.0888C2.79604 15.0888 2.57163 15.1598 2.41628 15.3908C2.29544 15.1953 2.12283 15.0888 1.8639 15.0888C1.69128 15.0888 1.51866 15.1421 1.38057 15.3375V15.1243H1.01807V16.8297H1.38057V15.8882C1.38057 15.5862 1.53592 15.4441 1.77759 15.4441C2.01925 15.4441 2.14009 15.6039 2.14009 15.8882V16.8297H2.50259V15.8882C2.50259 15.5862 2.6752 15.4441 2.89961 15.4441C3.14128 15.4441 3.26211 15.6039 3.26211 15.8882V16.8297H3.65913ZM9.02757 15.1243H8.44067V14.6091H8.07817V15.1243H7.75019V15.4618H8.07817V16.2435C8.07817 16.6343 8.23352 16.8653 8.64781 16.8653C8.80316 16.8653 8.97578 16.812 9.09662 16.7409L8.99304 16.4211C8.88947 16.4922 8.76864 16.51 8.68233 16.51C8.50971 16.51 8.44067 16.4034 8.44067 16.2257V15.4618H9.02757V15.1243ZM12.1002 15.0888C11.893 15.0888 11.7549 15.1953 11.6686 15.3375V15.1243H11.3061V16.8297H11.6686V15.8704C11.6686 15.5862 11.7895 15.4263 12.0139 15.4263C12.0829 15.4263 12.1692 15.4441 12.2383 15.4618L12.3418 15.1065C12.2728 15.0888 12.1692 15.0888 12.1002 15.0888ZM7.45674 15.2664C7.28412 15.1421 7.04245 15.0888 6.78353 15.0888C6.36924 15.0888 6.09305 15.3019 6.09305 15.6395C6.09305 15.9237 6.30019 16.0836 6.66269 16.1369L6.83531 16.1547C7.02519 16.1902 7.12876 16.2435 7.12876 16.3323C7.12876 16.4567 6.99067 16.5455 6.749 16.5455C6.50734 16.5455 6.31746 16.4567 6.19662 16.3678L6.02401 16.6521C6.21389 16.7942 6.47281 16.8653 6.73174 16.8653C7.21507 16.8653 7.49126 16.6343 7.49126 16.3145C7.49126 16.0125 7.26686 15.8526 6.92162 15.7994L6.749 15.7816C6.59365 15.7638 6.47281 15.7283 6.47281 15.6217C6.47281 15.4974 6.59365 15.4263 6.78353 15.4263C6.99067 15.4263 7.19781 15.5151 7.30138 15.5684L7.45674 15.2664ZM17.0889 15.0888C16.8817 15.0888 16.7436 15.1953 16.6573 15.3375V15.1243H16.2948V16.8297H16.6573V15.8704C16.6573 15.5862 16.7781 15.4263 17.0025 15.4263C17.0716 15.4263 17.1579 15.4441 17.227 15.4618L17.3305 15.1065C17.2615 15.0888 17.1579 15.0888 17.0889 15.0888ZM12.4627 15.977C12.4627 16.4922 12.8079 16.8653 13.343 16.8653C13.5847 16.8653 13.7573 16.812 13.9299 16.6698L13.7573 16.3678C13.6192 16.4744 13.4811 16.5277 13.3258 16.5277C13.0323 16.5277 12.8252 16.3145 12.8252 15.977C12.8252 15.6572 13.0323 15.4441 13.3258 15.4263C13.4811 15.4263 13.6192 15.4796 13.7573 15.5862L13.9299 15.2842C13.7573 15.1421 13.5847 15.0888 13.343 15.0888C12.8079 15.0888 12.4627 15.4618 12.4627 15.977ZM15.8115 15.977V15.1243H15.449V15.3375C15.3281 15.1776 15.1555 15.0888 14.9311 15.0888C14.4651 15.0888 14.1026 15.4618 14.1026 15.977C14.1026 16.4922 14.4651 16.8653 14.9311 16.8653C15.1728 16.8653 15.3454 16.7764 15.449 16.6165V16.8297H15.8115V15.977ZM14.4823 15.977C14.4823 15.675 14.6722 15.4263 14.9829 15.4263C15.2764 15.4263 15.4835 15.6572 15.4835 15.977C15.4835 16.279 15.2764 16.5277 14.9829 16.5277C14.6722 16.51 14.4823 16.279 14.4823 15.977ZM10.1496 15.0888C9.66626 15.0888 9.32102 15.4441 9.32102 15.977C9.32102 16.51 9.66626 16.8653 10.1669 16.8653C10.4085 16.8653 10.6502 16.7942 10.8401 16.6343L10.6674 16.3678C10.5294 16.4744 10.3567 16.5455 10.1841 16.5455C9.95971 16.5455 9.7353 16.4389 9.68352 16.1369H10.9091V15.9948C10.9264 15.4441 10.6157 15.0888 10.1496 15.0888ZM10.1496 15.4085C10.374 15.4085 10.5294 15.5506 10.5639 15.8171H9.70078C9.7353 15.5862 9.89066 15.4085 10.1496 15.4085ZM19.143 15.977V14.4492H18.7805V15.3375C18.6597 15.1776 18.4871 15.0888 18.2627 15.0888C17.7966 15.0888 17.4341 15.4618 17.4341 15.977C17.4341 16.4922 17.7966 16.8653 18.2627 16.8653C18.5043 16.8653 18.6769 16.7764 18.7805 16.6165V16.8297H19.143V15.977ZM17.8139 15.977C17.8139 15.675 18.0037 15.4263 18.3144 15.4263C18.6079 15.4263 18.815 15.6572 18.815 15.977C18.815 16.279 18.6079 16.5277 18.3144 16.5277C18.0037 16.51 17.8139 16.279 17.8139 15.977ZM5.69603 15.977V15.1243H5.33353V15.3375C5.2127 15.1776 5.04008 15.0888 4.81568 15.0888C4.34961 15.0888 3.98711 15.4618 3.98711 15.977C3.98711 16.4922 4.34961 16.8653 4.81568 16.8653C5.05734 16.8653 5.22996 16.7764 5.33353 16.6165V16.8297H5.69603V15.977ZM4.34961 15.977C4.34961 15.675 4.53949 15.4263 4.8502 15.4263C5.14365 15.4263 5.35079 15.6572 5.35079 15.977C5.35079 16.279 5.14365 16.5277 4.8502 16.5277C4.53949 16.51 4.34961 16.279 4.34961 15.977Z"
                      fill="#999999"
                    ></path>
                    <path
                      d="M12.7739 2.17383H7.33643V12.2288H12.7739V2.17383Z"
                      fill="#DDDDDD"
                    ></path>
                    <path
                      d="M7.68153 7.20203C7.68153 5.15906 8.61367 3.34703 10.0464 2.17454C8.99343 1.32182 7.66427 0.806641 6.21427 0.806641C2.77916 0.806641 0 3.6668 0 7.20203C0 10.7373 2.77916 13.5974 6.21427 13.5974C7.66427 13.5974 8.99343 13.0822 10.0464 12.2295C8.61367 11.0748 7.68153 9.245 7.68153 7.20203Z"
                      fill="#868686"
                    ></path>
                    <path
                      d="M20.1104 7.20203C20.1104 10.7373 17.3312 13.5974 13.8961 13.5974C12.4461 13.5974 11.1169 13.0822 10.064 12.2295C11.514 11.057 12.4288 9.245 12.4288 7.20203C12.4288 5.15906 11.4967 3.34703 10.064 2.17454C11.1169 1.32182 12.4461 0.806641 13.8961 0.806641C17.3312 0.806641 20.1104 3.68457 20.1104 7.20203Z"
                      fill="#C6C6C6"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2107_1792">
                      <rect
                        width="20.13"
                        height="16.104"
                        fill="white"
                        transform="translate(0 0.806641)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="27" height="9" viewBox="0 0 27 9" fill="none">
                  <path
                    d="M10.3722 0.953456L6.96828 8.06579H4.74746L3.07236 2.38944C2.97066 2.03982 2.88278 1.91173 2.57295 1.76443C2.06798 1.52451 1.23409 1.29941 0.50108 1.15958L0.550236 0.953456H4.12522C4.5809 0.953456 4.99053 1.21912 5.09399 1.67868L5.97866 5.79404L8.16496 0.953456H10.3722ZM19.0738 5.74399C19.0827 3.8667 16.1098 3.7634 16.1303 2.92468C16.1366 2.66945 16.4146 2.3981 17.0214 2.32884C17.3225 2.29433 18.1519 2.268 19.0933 2.64716L19.4623 1.13882C18.9561 0.977176 18.3057 0.822998 17.4965 0.822998C15.4199 0.822998 13.9585 1.78981 13.9461 3.17421C13.9326 4.19818 14.9888 4.76959 15.7852 5.10985C16.6041 5.45829 16.8788 5.6822 16.8757 5.99388C16.8699 6.471 16.2226 6.68175 15.6177 6.68993C14.5615 6.70416 13.949 6.43969 13.4605 6.2408L13.0797 7.79906C13.5706 7.99629 14.4767 8.16838 15.4161 8.17703C17.6234 8.17703 19.067 7.2222 19.0738 5.74352V5.74399ZM24.5574 8.06579H26.5003L24.8043 0.953456H23.0109C22.8194 0.95201 22.6318 1.00098 22.4724 1.09403C22.3131 1.18708 22.1893 1.3199 22.1171 1.47529L18.9643 8.06579H21.1703L21.6083 7.00339H24.303L24.5574 8.06579ZM22.2132 5.54558L23.319 2.87475L23.9554 5.54534L22.2132 5.54558ZM13.374 0.953456L11.6368 8.06579H9.53591L11.2738 0.953456H13.374Z"
                    fill="#121212"
                  ></path>
                </svg>
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.7947 4.34298C20.8301 2.12725 17.9967 0.736328 14.8466 0.736328C11.6964 0.736328 8.86306 2.12725 6.89845 4.34298H22.7947ZM6.89845 19.161C8.86306 21.3767 11.6964 22.7677 14.8466 22.7677C17.9967 22.7677 20.8301 21.3767 22.7947 19.161H6.89845ZM5.23759 5.27959C2.60293 5.27959 0.467163 7.47011 0.467163 10.1723V13.3317C0.467163 16.0339 2.60293 18.2244 5.23759 18.2244H24.4556C27.0903 18.2244 29.226 16.0339 29.226 13.3317V10.1723C29.226 7.47011 27.0903 5.27959 24.4556 5.27959H5.23759ZM28.7354 10.1164C28.7354 7.72302 26.8437 5.78285 24.5101 5.78285H19.7397C17.4061 5.78285 15.5145 7.72302 15.5145 10.1164V13.4015C15.5145 15.7949 13.6228 17.7351 11.2892 17.7351H24.5101C26.8437 17.7351 28.7354 15.7949 28.7354 13.4015V10.1164ZM12.1615 10.41V15.0371H13.5245V10.41H12.1615ZM12.0252 8.94915C12.0252 9.40853 12.3883 9.78092 12.8362 9.78092C13.2841 9.78092 13.6472 9.40853 13.6472 8.94915C13.6472 8.48977 13.2841 8.11738 12.8362 8.11738C12.3883 8.11738 12.0252 8.48977 12.0252 8.94915ZM2.93416 8.28514L4.6924 15.0371H5.82367L7.14576 10.368L8.46785 15.0371H9.64001L11.371 8.28514H10.0489L9.0403 12.7305L7.78636 8.28514H6.57331L5.31937 12.6187L4.36528 8.28514H2.93416ZM17.6816 8.28514V15.0371H19.1263V12.395H22.3975V11.0251H19.1263V9.6551H22.6156V8.28514H17.6816ZM23.5969 10.41V15.0371H24.9599V10.41H23.5969ZM23.4743 8.93517C23.4743 9.39455 23.8373 9.76694 24.2852 9.76694C24.7331 9.76694 25.0962 9.39455 25.0962 8.93517C25.0962 8.47579 24.7331 8.1034 24.2852 8.1034C23.8373 8.1034 23.4743 8.47579 23.4743 8.93517Z"
                    fill="#EFEFEF"
                  ></path>
                </svg>
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
                  <path
                    d="M6.78601 0.193359H18.9381V3.22868H6.78601V0.193359Z"
                    fill="#EFEFEF"
                  ></path>
                  <path
                    d="M23.497 4.75195H2.22811C1.39097 4.75195 0.710449 5.43787 0.710449 6.26961V13.8633C0.710449 14.7005 1.39637 15.381 2.22811 15.381H6.78649V21.457H18.9386V15.3864H23.497C24.3341 15.3864 25.0146 14.7005 25.0146 13.8687V6.26961C25.0146 5.43787 24.3287 4.75195 23.497 4.75195ZM3.74577 9.31034C2.90863 9.31034 2.22811 8.62982 2.22811 7.79268C2.22811 6.95553 2.90863 6.27501 3.74577 6.27501C4.58291 6.27501 5.26343 6.95553 5.26343 7.79268C5.26343 8.62982 4.58832 9.31034 3.74577 9.31034ZM17.4209 19.9448H8.30415V12.3457H17.4209V19.9448Z"
                    fill="#EFEFEF"
                  ></path>
                </svg>
                <svg width="27" height="14" viewBox="0 0 27 14" fill="none">
                  <path
                    d="M6.96125 3.87564H5.31742L0.385925 10.3468V11.7303H5.22073V13.694H6.96125V11.7303H8.23318V10.2129H6.96125V3.87564ZM5.22817 6.1294L5.22073 10.2129H2.08183L5.22817 6.1294Z"
                    fill="black"
                  ></path>
                  <path
                    d="M14.0148 9.78897H17.6372C17.3025 11.3064 16.0306 12.37 14.3198 12.37C12.3859 12.37 10.928 10.8154 10.928 8.79969C10.928 6.83602 12.3636 5.28889 14.3347 5.28889C15.6735 5.28889 16.8116 6.01039 17.3397 7.11123L19.0058 6.45668C18.1951 4.76821 16.4843 3.6748 14.3644 3.6748C11.404 3.6748 9.12053 5.90625 9.12053 8.77738C9.12053 11.6783 11.3148 13.8948 14.1636 13.8948C15.8595 13.8948 17.243 13.0989 17.9645 11.8865L18.2397 13.694H19.2513V8.33853H14.0148V9.78897Z"
                    fill="black"
                  ></path>
                  <g clip-path="url(#clip0_570_2109)">
                    <path
                      d="M22.3901 5.6347C22.1937 5.4384 22.0834 5.17217 22.0833 4.89455C22.0833 4.32033 22.556 3.84766 23.1302 3.84766C23.7044 3.84766 24.1771 4.32033 24.1771 4.89455C24.177 5.17218 24.0667 5.43841 23.8704 5.6347"
                      stroke="black"
                      stroke-width="0.607196"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M21.6493 6.37476C21.2567 5.98205 21.0361 5.4495 21.0361 4.8942C21.0361 3.7455 21.9812 2.80042 23.1299 2.80042C24.2786 2.80042 25.2236 3.7455 25.2236 4.8942C25.2236 5.4495 25.003 5.98205 24.6104 6.37476"
                      stroke="black"
                      stroke-width="0.607196"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M20.9099 7.11529C20.321 6.52628 19.9901 5.7275 19.99 4.89458C19.99 3.17166 21.4077 1.75391 23.1307 1.75391C24.8536 1.75391 26.2713 3.17166 26.2713 4.89458C26.2713 5.72712 25.9403 6.52668 25.3514 7.11529"
                      stroke="black"
                      stroke-width="0.607196"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M23.1303 5.15601C23.2748 5.15601 23.392 5.03884 23.392 4.89429C23.392 4.74975 23.2748 4.63257 23.1303 4.63257C22.9857 4.63257 22.8685 4.74975 22.8685 4.89429C22.8685 5.03884 22.9857 5.15601 23.1303 5.15601Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_570_2109">
                      <rect
                        width="7.58995"
                        height="7.58995"
                        fill="white"
                        transform="translate(19.3349 0.639282)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <g clip-path="url(#clip0_570_2116)">
                    <path
                      d="M19.0562 9.01688C19.0562 9.12959 18.9999 9.18595 18.9435 9.2423L16.4076 10.7075C16.3512 10.7075 16.3512 10.7639 16.2949 10.7639C16.2385 10.7639 16.1821 10.7639 16.1821 10.7075C16.1258 10.6512 16.0694 10.5948 16.0694 10.4821V9.46772H9.3069C10.0395 10.5948 10.434 12.4545 11.2793 12.4545H12.0119V11.7219C12.0119 11.6092 12.1246 11.4965 12.2373 11.4965H14.7733C14.886 11.4965 14.9987 11.6092 14.9987 11.7219V14.2579C14.9987 14.3706 14.886 14.4833 14.7733 14.4833H12.2373C12.1246 14.4833 12.0119 14.3706 12.0119 14.2579V13.5252H11.2793C9.13784 13.5252 8.96877 9.52407 7.78533 9.52407H4.91125C4.68583 10.3694 3.89687 11.0456 2.93884 11.0456C1.8681 11.0456 0.966431 10.144 0.966431 9.01688C0.966431 7.88979 1.8681 6.98812 2.99519 6.98812C3.95322 6.98812 4.68583 7.60802 4.9676 8.50969C6.09469 8.50969 6.2074 8.79147 7.05272 6.81906C8.17981 4.2831 8.687 4.50852 10.0959 4.50852C10.3213 3.94498 10.8848 3.49414 11.5047 3.49414C12.35 3.49414 13.0263 4.17039 13.0263 5.01571C13.0263 5.86103 12.35 6.53729 11.5047 6.53729C10.8285 6.53729 10.3213 6.1428 10.0959 5.5229H9.25054C8.40523 5.5229 8.01075 7.43896 7.27814 8.50969H16.0131V7.49531C16.0131 7.3826 16.0694 7.32625 16.1258 7.26989C16.1821 7.21354 16.2949 7.21354 16.3512 7.26989L18.8872 8.79147C18.9999 8.84782 19.0562 8.90417 19.0562 9.01688Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_570_2116">
                      <rect
                        width="18.0334"
                        height="18.0334"
                        fill="white"
                        transform="translate(0.966431)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <ul className="lg:mb-24 mb-6">
                <li>
                  <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] text-[#ffffff] ">
                    Accepts all Bank Cards
                  </h5>
                </li>
                <li>
                  <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px]  text-[#ffffff] ">
                    Pocket Friendly
                  </h5>
                </li>
                <li>
                  <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] text-[#ffffff]">
                    Light and Sleek
                  </h5>
                </li>
                <li>
                  <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px]  text-[#ffffff]">
                    Easy to operate
                  </h5>
                </li>
                <li>
                  <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px] text-[#ffffff]  ">
                    Connects to 4G/3G/2G Wifi
                  </h5>
                </li>
                <li>
                  <h5 className="md:text-[21px] text-[14px] md:leading-[30.5px] leading-[19.6px]  text-[#ffffff] ">
                    Bluetooth Connectivity
                  </h5>
                </li>
              </ul>
              <div className="">
                <a className="inline-flex items-center group" href="/">
                  <p className="md:text-[16px] text-[14px] md:leading-[28.8px] leading-[25.2px] peer undefinedtransition-all duration-300 font-[600] text-[#ffffff] ">
                    Request a terminal
                  </p>
                  <svg
                    className="ml-2 transition-all duration-300 peer-hover:ml-4 hover:ml-4"
                    width="11"
                    height="22"
                    viewBox="0 0 11 22"
                    fill="none"
                  >
                    <path
                      d="M10.0768 10.6313V15.2869L8.06006 16.4491L6.04333 17.6113L4.02661 18.7734L2.01672 19.9356V19.9425L0 21.1046V16.4491L2.01672 15.2869L4.02661 14.1247L6.04333 12.9625L8.06006 11.8004V11.7935L10.0768 10.6313Z"
                      fill="#FFCC00"
                    ></path>
                    <path
                      d="M10.0768 5.98461V10.6333L8.06006 9.47115L6.04333 8.30896L4.02661 7.14679L2.01672 5.98461L0 4.82243V0.16687L2.01672 1.32905L4.02661 2.49123L6.04333 3.65341L8.06006 4.82243L10.0768 5.98461Z"
                      fill="#FFCC00"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained mt-16 md:h-[581px] md:w-[421px]"
            >
              <div className="max-w-[775px] block">
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src={phone}
                  className="max-w-[100%] block static"
                />
              </div>

              <picture>
                <source
                  type="image/webp"
                  srcset="/static/de7446b7c0390fc692b3fb3e485adcfc/603b9/Nomba%20Pro%202.webp 750w, 

/static/de7446b7c0390fc692b3fb3e485adcfc/843b4/Nomba%20Pro%202.webp 775w"
                  sizes="(min-width: 775px) 775px, 100vw"
                />
                <img
                  width="775"
                  height="1068"
                  data-main-image=""
                  className="bg-cover opacity-[1]"
                  sizes="(min-width: 775px) 775px, 100vw"
                  decoding="async"
                  loading="lazy"
                  src="/static/de7446b7c0390fc692b3fb3e485adcfc/8c23b/Nomba%20Pro%202.png"
                  srcset="/static/de7446b7c0390fc692b3fb3e485adcfc/757a8/Nomba%20Pro%202.png 750w, 

/static/de7446b7c0390fc692b3fb3e485adcfc/8c23b/Nomba%20Pro%202.png 775w"
                  alt="Nomba Pro 2"
                />
              </picture>
              <noscript>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/de7446b7c0390fc692b3fb3e485adcfc/603b9/Nomba%20Pro%202.webp 750w, 

/static/de7446b7c0390fc692b3fb3e485adcfc/843b4/Nomba%20Pro%202.webp 775w"
                    sizes="(min-width: 775px) 775px, 100vw"
                  />
                  <img
                    width="775"
                    height="1068"
                    data-main-image=""
                    className="bg-cover opacity-0"
                    sizes="(min-width: 775px) 775px, 100vw"
                    decoding="async"
                    loading="lazy"
                    src="/static/de7446b7c0390fc692b3fb3e485adcfc/8c23b/Nomba%20Pro%202.png"
                    srcSet="/static/de7446b7c0390fc692b3fb3e485adcfc/757a8/Nomba%20Pro%202.png 750w, 

/static/de7446b7c0390fc692b3fb3e485adcfc/8c23b/Nomba%20Pro%202.png 775w"
                    alt="Nomba Pro 2"
                  />
                </picture>
              </noscript>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px] pb-[50px] text-center undefined">
        <h3 className="md:text-[40px] text-[32px] md:leading-[47.87px] leading-[39.4px] font-semibold text-[#121212]">
          Businesses run their sales with Nomba
        </h3>
      </div>
      <div className="mx-auto flex items-center md:gap-[34px] gap-[11px] px-[25px] mb-[20px]">
        <div className="relative flex lg:gap-[28px] gap-[11px]">
          <button
            className="rounded-full lg:p-[15px] p-[6px]  hover:bg-secondary-100 previous-element  border-2 border-gray-400  "
            aria-label="Previous Slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#121212"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button
            className="rounded-full lg:p-[15px] p-[6px]  hover:bg-secondary-100 next-element border-2 border-gray-400  "
            aria-label="Next Slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className=" ">
              <path
                d="M9 18L15 12L9 6"
                stroke="#121212"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className=" ">
          <span
            className="swiper-pagination-progressbar-fill  transform scale-y-100 scale-x-[0.25]  transition duration-300 "
          ></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
