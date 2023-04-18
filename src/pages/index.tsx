import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Fotter";
import SearchBar from "@/components/SearchBar";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import { styles } from "@/tailwindStyles";
import { FC } from "react";
import Link from "next/link";

const SERVICES_INFO: service[] = [
  {
    discription:
      "Maximise your return. sell your property with confidence with us.",
    serviceName: "Sell Property",
    src: "/assets/sell.svg",
  },
  {
    discription:
      "Find your dream home, secure your financial future with property ownership with us. ",
    serviceName: "Buy Property",
    src: "/assets/buy.svg",
  },
  {
    discription: "Reach your target audience with ease Advertise with us.",
    serviceName: "Advertise",
    src: "/assets/advertise.svg",
  },
];
const heroCardImg = "/assets/house.jpg";

interface herocard {
  backgroundImage: string;
}

const HeroCard: FC<herocard> = ({ backgroundImage }) => {
  const cardImg = {
    backgroundImage: "url(/assets/house.jpg)",
  };
  return (
    <div
      className="flex-1 h-[440px] xs:hidden mt-5 rounded-lg bg-cover lg:flex items-end p-3 hover:pb-4 scale-100 hover:scale-105 transition-all delay-200  "
      style={cardImg}
    >
      <div className="h-[23%]  w-full rounded-md bg-base-100 p-3 flex items-start gap-1">
        <MdLocationPin className="text-[28px] mt-[2px]" />
        <div className="flex gap-2 flex-col">
          <h3 className="playfair text-[22px] font-light ">
            JP Nagar, Bengaluru Karnataka
          </h3>
          <p className="font-light">
            2BHK Starting from <strong>80L</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const add = () => {
    return 0;
  };

  return (
    <>
      <Head>
        <title>Find Easy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: Add favIcon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Header />
        <div className="absolute top-40">
          <div className={` ${styles.paddingX}   w-full flex justify-center `}>
            <div className={`  `}>
              <div className="hero-section flex gap-20 lg:flex-row sm:flex-col xs:flex-col  ">
                <div className="left-col xs:w-full lg:w-[40%] flex flex-col gap-8 ">
                  <h1 className=" text-[52px] playfair leading-snug">
                    Beyond the Sale A Lifelong Partnership
                  </h1>
                  <p className=" text-[18px] leading-[27.81px] font-light">
                    Experience stress-free home buying and selling with our
                    professional team. Expert guidance for every step of
                    process.
                  </p>
                  <SearchBar />
                  <SeeListingBtn />
                </div>
                <HeroCard backgroundImage={heroCardImg} />
              </div>
              <div className="flex lg:flex-row xs:flex-col max-w-7xl mx-auto justify-between my-16 gap-10 ">
                {SERVICES_INFO.map((service, id) => (
                  <ServiceCard {...service} key={id} />
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

const ServiceCard = ({ discription, src, serviceName }: service) => {
  return (
    <div className=" flex flex-col justify-between scale-100 hover:scale-105 transition-transform delay-200  h-[500px] items-center w-full shadow py-11 px-9 ">
      <Image
        src={src}
        alt="Service img"
        className="service-img"
        width={250}
        height={225}
      />
      <p>{discription}</p>
      <div className=" flex w-[50%] justify-center items-center text-[16px] rounded-md scale-100 hover:bg-primary hover:scale-105 transition-all font-bold px-6 py-[14px] border-solid border-[1px] border-[#C5C5C5] ">
        <p>{serviceName}</p>
      </div>
    </div>
  );
};

const SeeListingBtn = () => {
  return (
    <Link
      href="/catalouge"
      className="flex items-center gap-3 hover:gap-5 transition-all delay-150 ease-in cursor-pointer"
    >
      <div className=" text-[18px] hover:underline">See listing</div>
      <HiOutlineArrowNarrowRight size="24" />
    </Link>
  );
};

type service = {
  src: string;
  discription: string;
  serviceName: string;
};
