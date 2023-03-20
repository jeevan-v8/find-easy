import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Fotter";
import SearchBar from "@/components/SearchBar";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";

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

export default function Home() {
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
        <div className="wrapper">
          <Header />
          <div className="main">
            <div className="hero-section">
              <div className="left-col">
                <h1>Beyond the Sale A Lifelong Partnership</h1>
                <p className="sub-heading">
                  Experience stress-free home buying and selling with our
                  professional team. Expert guidance for every step of process.
                </p>
                <SearchBar />
                <SeeListingBtn />
              </div>
              <div className="right-col">
                <div className="card-bg">
                  <div className="product-details">
                    <MdLocationPin size="32" />
                    <div>
                      <p className="card-title">
                        JP Nagar, Bengaluru Karnataka
                      </p>
                      <p className="card-dis">
                        2BHK Starting from <strong>80L</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-section">
              {SERVICES_INFO.map((service, id) => (
                <ServiceCard {...service} key={id} />
              ))}
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
    <div className="service-card">
      <Image
        src={src}
        alt="Service img"
        className="service-img"
        width={250}
        height={225}
      />
      <p>{discription}</p>
      <div className="service-btn">{serviceName}</div>
    </div>
  );
};

const SeeListingBtn = () => {
  return (
    <div className="see-listing-div">
      <div className="see-listing-btn">See listing</div>
      <HiOutlineArrowNarrowRight size="24" />
    </div>
  );
};

type service = {
  src: string;
  discription: string;
  serviceName: string;
};
