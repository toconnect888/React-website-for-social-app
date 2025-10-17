import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "TOConnect - Home" },
    { name: "description", content: "Welcome to TOConnect!" },
  ];
};

interface CardProps {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  desc: string;
  buttonText: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  desc,
  buttonText,
  bgColor,
}: CardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-between gap-4 h-full"
      style={{ minWidth: "500px" }}
    >
      <div
        className={`bg-${bgColor} flex flex-col items-center gap-4 row-span-3 rounded-md w-full flex-grow`}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="object-cover rounded-t-md w-full"
        />
        <p className="font-bold text-xl drop-shadow-4xl text-center mx-4">
          {title}
        </p>
        <p className="text-xl text-center mx-4 mb-2 whitespace-normal">
          {desc}
        </p>
      </div>
      <div className="flex flex-row justify-center pb-4 items-center">
        <Link className="rounded-3xl" to="">
          <div className="border-black border-solid border-2 rounded-3xl px-2 py-2 bg-yellowBackground">
            <p className="font-bold text-xl text-black text-center">
              {buttonText}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

interface CommentProps {
  commenter: string;
  location: string;
  comment: string;
  stars: number;
}

const Comment: React.FC<CommentProps> = ({
  commenter,
  location,
  comment,
  stars,
}: CommentProps) => {
  const renderStars = () => {
    const totalStars = 5;
    const starElements: React.ReactNode[] = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < stars) {
        starElements.push(
          <svg
            key={i}
            viewBox="0 0 200 200"
            className="fill-yellow-400 stroke-black w-[1.5rem] h-[1.5rem] object-contain"
          >
            <polygon
              points="100,10 40,198, 190,78, 10,78, 160,198"
              className="fill-yellow"
            />
          </svg>
        );
      } else {
        starElements.push(
          <svg
            key={i}
            viewBox="0 0 200 200"
            className="fill-white stroke-black"
          >
            <polygon
              points="100,10 40,198, 190,78, 10,78, 160,198"
              className="fill-yellow"
            />
          </svg>
        );
      }
    }

    return starElements;
  };

  return (
    <div className="flex flex-col" style={{ minWidth: "300px" }}>
      <div className="flex flex-col xl:flex-row justify-start items-center gap-2 xl:gap-8">
        <p className=" text-black text-3xl whitespace-nowrap">
          {commenter} ({location})
        </p>
        <div className="flex flex-row justify-start items-center">
          {renderStars()}
        </div>
      </div>
      <p className="row-span-4 basis-10 text-2xl whitespace-break-spaces">
        {comment}
      </p>
    </div>
  );
};

export default function Index() {
  const cardData: CardProps[] = [
    {
      img: {
        src: "/nearby_activities.png",
        alt: "Local Discounts",
      },
      title: "Local Discount Alerts",
      desc: "Get activity suggestions at restaurants & venues offering promotions, and enjoy them with your new buddies",
      bgColor: "lightYellowBackground",
      buttonText: "Find Discounts!",
    },
    {
      img: {
        src: "/nearby_activities.png",
        alt: "Event Updates",
      },
      title: "Immigrant Event Updates",
      desc: "Get notifications on upcoming Toronto events that are popular among immigrants",
      bgColor: "lightYellowBackground",
      buttonText: "Get Updates!",
    },
    {
      img: {
        src: "/nearby_activities.png",
        alt: "Host Benefits",
      },
      title: "Super Host Benefits",
      desc: "Achieve super host status by suggesting a minimum of 5 activities each month, increasing your visibility to other members",
      bgColor: "lightYellowBackground",
      buttonText: "Show me How!",
    },
  ];

  const commentData: CommentProps[] = [
    {
      commenter: "Perin Singh",
      location: "India",
      comment:
        "Was really nervous when I first moved to Toronto because I did not know anyone. So I joined some activities and met James who is looking for a renter. The connections and people you could meet on the app is full of surprises.",
      stars: 5,
    },
    {
      commenter: "Alice",
      location: "Philippines",
      comment:
        "The app was fun and I got to meet with lots of people and explore the city for fun events! I met my first best friend in Toronto through the App. People are from various background and nice to each other!",
      stars: 5,
    },
    {
      commenter: "Jacky Wang",
      location: "China",
      comment:
        "Great platform that saved me so much time by meeting local residents from China who give me valuable tips about how to study, live and work as newcomers in Toronto.",
      stars: 5,
    },
  ];

  return (
    <div className="grid grid-rows-6 w-screen">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row bg-yellowBackground px-4 py-2 lg:py-8 lg:px-16 lg:gap-10 gap-2 w-screen">
        <div className="flex justify-center items-center flex-grow">
          <img
            src="/connecting.png"
            alt="Connect with immigrants to build friendships"
            className="w-auto object-cover"
          />
        </div>

        <div className="flex flex-col basis-1/2 gap-8 justify-center items-center">
          <p className="font-bold text-4xl text-black">
            Toronto Social App For Immigrants To Build Friendship
          </p>
          <p className="text-2xl leading-loose text-black">
            Join For Free - the fastest growing Toronto community of immigrants
            eager to socialize
          </p>

          {/* Store Badges */}
          <div className="w-full flex flex-col lg:flex-col xl:flex-row justify-center items-center gap-4 lg:gap-12">
            <Link className="rounded-md" to="">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Link to download on Google Play"
                className="h-[20vh] max-h-[70px] w-auto object-contain"
              />
            </Link>
            <Link className="rounded-md" to="">
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Link to download on the App Store"
                className="h-[20vh] max-h-[70px] w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-2 py-8 px-16 gap-10 w-screen">
        <div className="flex flex-col col-span-2 lg:col-span-1 py-6 px-12 gap-8 justify-center items-center">
          <p className="font-bold text-4xl">
            Host Your Leisure Activities & Find Buddies
          </p>
          <p className="text-2xl">
            Meet new buddies for meals, sports, movies, shows, travels, parks,
            etc
          </p>

          <ul className="list-disc list-outside pl-5">
            <li className="text-xl">
              Easily join activities suggested by others
            </li>
            <li className="text-xl">
              Suggest fun activities & invite new buddies to join you for a
              chill hang out
            </li>
          </ul>

          <div className="md:grid flex flex-col md:grid-cols-2 md:grid-rows-2 w-full justify-start items-center gap-4 text-sm md:text-base">
            <p className="text-xl border-yellowBackground border-solid border-l-2 h-full px-2">
              20+ Activities Initiated by Immigrants Monthly
            </p>
            <p className="text-xl border-yellowBackground border-solid border-l-2 h-full px-2">
              Supportive Toronto Immigrants Community
            </p>
            <p className="text-xl border-yellowBackground border-solid border-l-2 h-full px-2">
              Locations Only in City of Toronto
            </p>
            <p className="text-xl border-yellowBackground border-solid border-l-2 h-full px-2">
              Fun Local Events Suggestions For Immigrants
            </p>
          </div>

          <div className="visible flex flex-col lg:flex-row w-full justify-center items-center">
            <Link className="rounded-3xl" to="">
              <div className="border-yellowBackground border-solid border-2 rounded-3xl px-6 py-3 bg-black">
                <p className="font-bold text-xl text-white text-center">
                  Host Activities & Find Buddies
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden lg:visible lg:flex justify-center items-center lg:basis-1/2">
          <img
            src="/nearby_activities.png"
            alt="Host and find nearby leisure activities"
            className="w-auto object-cover"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 py-6 px-16 gap-10 bg-lightYellowBackground w-screen">
        <div className="hidden lg:flex justify-center items-center">
          <img
            src="/nearby_activities.png"
            alt="Host and find nearby leisure activities"
            className="w-auto object-cover"
          />
        </div>

        <div className="flex flex-col py-6 px-12 gap-12 justify-center items-center">
          <p className="font-bold text-4xl text-black">
            Explore Potential Friends Based On Your Preferences
          </p>

          <div className="lg:hidden flex justify-center items-center">
            <img
              src="/nearby_activities.png"
              alt="Host and find nearby leisure activities"
              className="w-auto object-cover"
            />
          </div>

          <ul className="list-disc list-outside pl-5">
            <li>
              <p className="text-xl text-black">
                <span className="font-bold">Shared Interests:</span> Identifying
                others with similar hobbies and activities.
              </p>
            </li>
            <li>
              <p className="text-xl text-black">
                <span className="font-bold">Mutual Connections:</span> Expanding
                your network through friends of friends.
              </p>
            </li>
            <li>
              <p className="text-xl text-black">
                <span className="font-bold">Location:</span> Finding people
                nearby for easier meet-ups.
              </p>
            </li>
          </ul>

          <div className="flex flex-row w-full justify-center items-center">
            <Link className="rounded-3xl" to="">
              <div className="border-white border-solid border-2 rounded-3xl px-2 py-4 bg-black">
                <p className="font-bold text-xl text-white text-center">
                  Discover Friends
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 py-6 px-16 gap-10 w-screen">
        <div className="flex flex-col col-span-2 lg:col-span-1 py-6 px-12 gap-12 justify-center items-center">
          <p className="font-bold text-4xl text-black">
            Find Buddies To Attend Upcoming Toronto Events
          </p>

          <div className="lg:hidden flex justify-center items-center">
            <img
              src="/nearby_activities.png"
              alt="Host and find nearby leisure activities"
              className="w-auto object-cover"
            />
          </div>

          <p className="text-2xl">
            Never experience the awkward moments of attending events by yourself
            again!
          </p>

          <ul className="list-disc list-outside pl-5 w-full">
            <li>
              <p className="text-xl text-black">
                Suggest events you like to the community
              </p>
            </li>
            <li>
              <p className="text-xl text-black">
                Find new buddies to join you for any events
              </p>
            </li>
          </ul>

          <div className="flex flex-row w-full justify-center items-center">
            <Link className="rounded-3xl" to="">
              <div className="border-white border-solid border-2 rounded-3xl px-2 py-4 bg-black">
                <p className="font-bold text-xl text-white text-center">
                  Find Toronto Events
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <img
            src="/nearby_activities.png"
            alt="Host and find nearby leisure activities"
            className="w-auto object-cover"
          />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="flex flex-col justify-center items-center py-6 px-16 gap-8 bg-veryLightGray w-screen">
        <p className="text-black font-bold text-3xl">
          Extra Benefits of Joining TOConnect
        </p>
        <p className="text-black text-2xl">
          TOConnect is your creative way to forging meaningful friendships and
          exploring Toronto.
        </p>

        {/* Cards */}
        <div className="flex flex-row gap-8 items-center mx-12 py-4 overflow-x-scroll overflow-hidden whitespace-nowrap w-full">
          {cardData.map((data, i) => (
            <Card
              key={i}
              img={{
                src: data.img.src,
                alt: data.img.alt,
              }}
              title={data.title}
              desc={data.desc}
              bgColor={data.bgColor}
              buttonText={data.buttonText}
            />
          ))}
        </div>
      </div>

      {/* Sixth Section */}
      <div className="flex flex-col justify-center items-center gap-8 bg-lightBlue py-6 px-16">
        <p className="font-bold text-5xl text-black text-center">
          Discover Tips to Build Connections With New People
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center">
          <div className="lg:hidden flex justify-center items-center">
            <img
              src="/new_friends.png"
              alt="Host and find nearby leisure activities"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex flex-col py-6 px-12 gap-12 justify-center items-center">
            <p className="font-bold text-4xl text-black">
              How to Make New Friends With TOConnect App
            </p>

            <p className="text-2xl">
              Learn how to make the best use of TOConnect and expand your social
              circle
            </p>

            <div className="flex flex-row w-full justify-center items-center">
              <Link className="rounded-3xl" to="">
                <div className="border-white border-solid border-2 rounded-3xl px-4 py-3 bg-yellowBackground">
                  <p className="font-bold text-xl text-black text-center">
                    Read Now!
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/new_friends.png"
              alt="Host and find nearby leisure activities"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Seventh Section */}
      <div className="flex flex-col justify-around gap-8 bg-white py-6 px-16 w-screen">
        <p className="font-bold text-4xl lg:text-6xl text-black text-center">
          If TOConnect works for them, it works for you as well
        </p>
        <div className="flex flex-row flex-grow gap-4 overflow-x-scroll pb-4 whitespace-nowrap w-full">
          {commentData.map((data, i) => (
            <Comment
              key={i}
              commenter={data.commenter}
              location={data.location}
              comment={data.comment}
              stars={data.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
