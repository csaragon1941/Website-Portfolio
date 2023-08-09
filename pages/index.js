import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import News from "../components/News";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import DigitalCarousel from "../components/DigitalCarousel"; // Import the DigitalCarousel component
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import FeatureCarousel from "../components/FeatureCarousel";


const imagesData = [
  {
    url: "/thumbnail/LogoDigitalWallet.png",
    link: "/digitalwallet",
  },
  {
    url: "/thumbnail/LogoMarsRover.png",
    link: "/redplanet",
  },
  {
    url: "/thumbnail/LogoOurHouse.png",
    link: "/ourhouse",
  },

  {
    url: "/thumbnail/discordbot.png",
    link: "/discordbot",
  },
  // Add more image data as needed
];

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Christina Aragon - Engineer, Business Analyst, Developer, Entreprenuer"
      description="A recent Software Engineering graduate ready to take the world."
    >
      <Hero />
      
      <div className="my-20">
        <FeatureCarousel images={imagesData} />
      </div>

      <LatestCode repositories={repositories} />

      <News news />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
