import achievementIcon from "../../assets/img/img_achievement.webp";
import heroSectionImg from "../../assets/img/img_hero_artwork_en.webp";
import playStoreBtn from "../../assets/img/img_playstore_logo.svg";
import appStoreBtn from "../../assets/img/img_appstore_logo.svg";

const Home = () => {
  return (
    <div className="h-screen flex flex-row items-center bg-orange-50">
      <div className="w-1/2">
        <div className="flex flex-row items-center">
          <img className="w-8" src={achievementIcon} alt="achievement icon" />
          <p className="text-[12px] md:text-[16px] font-normal text-[#6A3A0C] pl-1">
            WORLD’S LARGEST APP FOR HINDU DEVOTEES
          </p>
        </div>
        <div className="w-3/4">
          <h1 class="inline text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] max-w-2xl mb-4  tracking-tight leading-50 xl:text-[36px] dark:text-white">
            <span class=" whitespace-nowrap">
              <span>Pray daily with </span>
              <span class="w-full  md:inline md:pr-1 whitespace-nowrap text-orange-500">
                Sri Mandir<span class="text-black">.</span>
              </span>
            </span>
            <span class="block">One App for all your devotional needs.</span>
          </h1>
        </div>
        <div className="flex flex-row items-center mt-6">
          <button className="bg-transparent mr-2">
            <img src={playStoreBtn} alt="play store button" />
          </button>

          <button className="ml-2 bg-transparent">
            <img src={appStoreBtn} alt="app store button" />
          </button>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img className="w-3/4" src={heroSectionImg} alt="home page image" />
      </div>
    </div>
  );
};

export default Home;
