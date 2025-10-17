import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaRegStar } from "react-icons/fa";
export const meta: MetaFunction = () => {
  return [
    { title: "TOConnect - About" },
    { name: "description", content: "About TOConnect!" },
  ];
};

interface CardProps {
  title: string;
  desc: string;
  img: {
    src: string;
    alt: string;
  };
}

const Card: React.FC<CardProps> = ({ title, desc, img }: CardProps) => {
  return (
    <div className="grid grid-rows-3 grid-cols-1 bg-lightYellowBackground rounded-xl px-2 py-2 gap-4">
      <img src={img.src} alt={img.alt} className="row-span-2 object-contain" />
      <div>
        <div className="flex flex-row justify-center items-center gap-2">
          <FaRegStar size="1.5rem" />
          <p className="text-black font-bold text-xl drop-shadow-lg text-start">
            {title}
          </p>
        </div>
        <p className="text-black text-center px-12 py-4 text-xl">{desc}</p>
        <div className="flex flex-row justify-center items-center">
          <Link to="">
            <div className="border-black border-solid border-2 rounded-xl px-4 py-3 bg-black drop-shadow-xl">
              <p className="font-bold text-xl text-white text-center">
                Find Buddies For This Event
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const cardData: CardProps[] = [
    {
      title: "Social Mingles For Newcomers",
      desc: "Meet people living in your area to meet easily",
      img: {
        src: "new_friends.png",
        alt: "Social Mingles",
      },
    },
    {
      title: "Hang Out With Buddies For Similar Hobbies",
      desc: "Meet buddies for music, sports, food, movies, traveling, shows, and more",
      img: {
        src: "new_friends.png",
        alt: "Hang Out",
      },
    },
    {
      title: "Find Buddies to Attend Toronto Events Together",
      desc: "Meet friends who have the same common interests",
      img: {
        src: "new_friends.png",
        alt: "Attend Events",
      },
    },
  ];

  return (
    <div className="flex flex-col">
      {/* First Section */}
      <div className="flex flex-row bg-yellowBackground py-28 px-16">
        <div className="flex flex-col basis-1/2 justify-center gap-8">
          <p className="text-4xl font-bold text-black text-center px-8">
            How TOConnect Helps Immigrants
          </p>
          <div className="flex flex-col gap-4 px-20">
            <p
              className="text-3xl text-black leading-10"
              style={{ lineHeight: "2.75rem" }}
            >
              TOConnect means Toronto Connect, we are Toronto&apos;s
              fastest-growing community for immigrants.
            </p>
            <p className="text-3xl text-black leading-10">
              With just one click, you can find local immigrant buddies to do
              activities together and build your new social circle in Toronto.
            </p>
          </div>
          <div className="w-full h-1/5 flex flex-row justify-center items-center gap-12">
            <Link to="">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Link to download on Google Play"
                className="h-[20vh] max-h-[70px] w-auto object-contain"
              />
            </Link>
            <Link to="">
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Link to download on the App Store"
                className="h-[20vh] max-h-[70px] w-auto object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center basis-1/2">
          <img
            src="/javelin.png"
            alt="Use App"
            className="object-cover w-1/2 h-auto"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="flex flex-row py-8 px-16 gap-8">
        <div className="basis-1/2 flex justify-center items-center">
          <img
            src="/nearby_activities.png"
            alt="Use App"
            className="object-cover h-full w-auto"
          />
        </div>
        <div className="flex flex-col basis-1/2 gap-6 px-10 justify-center">
          <p className="text-4xl py-10 font-bold text-black text-center">
            1000+ Toronto Immigrants Social Network
          </p>
          <p className="text-2xl text-black">
            TOConnect is your creative way to forging meaningful friendships and
            exploring Toronto.
          </p>
          <p className="text-2xl text-black">
            Find new friends to go to events
          </p>
          <p className="text-2xl text-black">
            Meet other immigrants and newcomers
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <p className="text-2xl text-black border-l-2 border-yellowBackground border-solid pl-2">
              20+ Activities Each Month
            </p>
            <p className="text-2xl text-black border-l-2 border-yellowBackground border-solid pl-2">
              1000+ Toronto Fellow Immigrants
            </p>
            <p className="text-2xl text-black border-l-2 border-yellowBackground border-solid pl-2">
              Locations Across City of Toronto
            </p>
            <p className="text-2xl text-black border-l-2 border-yellowBackground border-solid pl-2">
              Local Discount Alerts
            </p>
          </div>
          <div className="flex flex-row justify-center items-center pt-8">
            <Link to="">
              <div className="border-black border-solid border-2 rounded-3xl px-4 py-3 bg-yellowBackground drop-shadow-xl">
                <p className="font-bold text-xl text-black text-center">
                  Join Community!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="flex flex-col py-48 px-64 gap-8 bg-lightYellowBackground">
        <p className="text-center font-bold text-4xl text-black">
          Immigrants Need More Friendship And Social Support
        </p>
        <p className="text-2xl py-12 leading-10 text-black">
          Moving to Toronto by yourself without any close friends and families
          could be harder. Due to the fast paced city life and busy lifestyle,
          it becomes harder and harder to build true friendship as adults.
          Especially when childhood friends all separated apart.
          <br />
          <br />
          Whether you&apos;re craving some company for a stroll in the park, a
          coffee chat, dining out, visiting museums or events. TOconnect
          <br />
          helps you find like-minded individuals to join you anytime.
        </p>
        <div className="flex flex-row justify-center items-center">
          <Link to="">
            <div className="border-black border-solid border-2 rounded-xl px-4 py-3 bg-black drop-shadow-xl">
              <p className="font-bold text-xl text-white text-center">
                Join 1000+ Immigrants Community
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* Fourth Section */}
      <div className="flex flex-col pt-20 pb-24 px-16 gap-8">
        <p className="text-black font-bold text-4xl text-center">
          Weekly Toronto Events to Invite Your Buddies To
        </p>
        <p className="text-black text-2xl text-center">
          ToConnect is your creative way to forging meaningful friendships to
          explore Toronto.
        </p>
        <div className="grid grid-rows-1 grid-cols-3 justify-center items-center gap-4">
          {cardData.map((data, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Card title={data.title} desc={data.desc} img={data.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
