import Link from 'next/link';

import ProfileImage from "@/images/profile_pic.jpg";
import Image from 'next/image';

export default function Home() {
  const socials = [
    {
      text: "LI",
      href: "https://linkedin.com/in/pbfrias17/",
    },
    {
      text: "GH",
      href: "https://github.com/pbfrias17",
    },
  ];

  return (
    <main className="bg-rocky m-16">
      <div className="flex justify-evenly">
        <div className="circular-path-container">
          <div className="w-80 h-80 overflow-hidden rounded-full">
            <Image className="w-full -mt-10" src={ProfileImage} alt="profile_pic" />
          </div>
          {
            socials.map((social_data, index) => (
              <a href={social_data.href} style={{"--i": index + 4}} key={social_data.href}>
                <div className="bg-cobalt w-full h-full flex flex-col justify-center rounded-full">
                  <p className="text-whitesmoke underline font-semibold text-2xl text-center">{social_data.text}</p>
                </div>
              </a>
            ))
          }
        </div>
        <NameGrid />
      </div>
      <AboutMeTable />
    </main>
  );
}

function NameGrid() {
  const gridData = [
    {left: "P", right: "Programming"},
    {left: "A", right: "Artificial Intelligence"},
    {left: "O", right: "Optimal"},
    {left: "L", right: "Learning"},
    {left: "O", right: "O(n)"},
  ];

  return (
    <div className="flex flex-col w-6/12 my-auto">
      {
        gridData.map(({ left, right }) => (
          <div className="flex flex-row" to={left+right}>
            <div className="flex flex-col w-[6.5rem] h-[6.5rem] justify-center bg-purple m-2 rounded-full"><p className="text-5xl text-whitesmoke text-center">{left}</p></div>
            <div className="flex flex-1 flex-col bg-bluegreen justify-center m-2 rounded-2xl"><p className="text-lg text-whitesmoke text-center">{right}</p></div>
          </div>
        ))
      }
    </div>
  )
}

function AboutMeTable() {
  const headerClass = "w-6/12 px-10 mx-6 my-3 py-5 text-xl font-semibold bg-cobalt text-center rounded-2xl text-whitesmoke";
  const rowClass = "w-6/12 py-5 px-8 mx-6 mx-12 my-3 text-xl text-center rounded-2xl bg-orange text-whitesmoke";

  return (
    <div className="flex flex-1 justify-center py-16">
      <div className="flex flex-col w-8/12">
        <div className="flex flex-row">
          <div className={headerClass}>I AM</div>
          <div className={headerClass}>I AM NOT</div>
        </div>
        <div className="flex flex-row">
          <div className={rowClass}>a Software Engineer</div>
          <div className={rowClass}>a Mechanical Engineer</div>
        </div>
        <div className="flex flex-row">
          <div className={rowClass}>a consumer of only the <Link className="text-cobalt underline" href="/"><i>highest</i> quality media</Link></div>
          <div className={rowClass}>a consumer of trashy reality TV</div>
        </div>
        <div className="flex flex-row">
          <div className={rowClass}>an avid recreational tennis player</div>
          <div className={rowClass}>good at tennis</div>
        </div>
        <div className="flex flex-row">
          <div className={rowClass}>a snowboarder</div>
          <div className={rowClass}>a boardsnower</div>
        </div>
      </div>
    </div>
  )
}
