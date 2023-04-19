import { Link } from "@remix-run/react";

import ProfileImage from "~/images/profile_pic.jpg";

export default function Index() {
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
    <main class="bg-rocky m-16">
      <div class="flex justify-evenly">
        <div class="circular-path-container">
          <div class="w-80 h-80 overflow-hidden rounded-full">
            <img class="w-full -mt-10" src={ProfileImage} alt="profile_pic" />
          </div>
          {
            socials.map((social_data, index) => (
              <a href={social_data.href} style={{"--i": index + 4}}>
                <div class="bg-cobalt w-full h-full flex flex-col justify-center rounded-full">
                  <p class="text-whitesmoke underline font-semibold text-2xl text-center">{social_data.text}</p>
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
    <div class="flex flex-col w-6/12 my-auto">
      {
        gridData.map(({ left, right }) => (
          <div class="flex flex-row">
            <div class="flex flex-col w-[6.5rem] h-[6.5rem] justify-center bg-purple m-2 rounded-full"><p class="text-5xl text-whitesmoke text-center">{left}</p></div>
            <div class="flex flex-1 flex-col bg-bluegreen justify-center m-2 rounded-2xl"><p class="text-lg text-whitesmoke text-center">{right}</p></div>
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
    <div class="flex flex-1 justify-center py-16">
      <div class="flex flex-col w-8/12">
        <div class="flex flex-row">
          <div class={headerClass}>I AM</div>
          <div class={headerClass}>I AM NOT</div>
        </div>
        <div class="flex flex-row">
          <div class={rowClass}>a Software Engineer</div>
          <div class={rowClass}>a Mechanical Engineer</div>
        </div>
        <div class="flex flex-row">
          <div class={rowClass}>a consumer of only the <Link class="text-cobalt underline" to="/"><i>highest</i> quality media</Link></div>
          <div class={rowClass}>a consumer of trashy reality TV</div>
        </div>
        <div class="flex flex-row">
          <div class={rowClass}>an avid recreational tennis player</div>
          <div class={rowClass}>good at tennis</div>
        </div>
        <div class="flex flex-row">
          <div class={rowClass}>a snowboarder</div>
          <div class={rowClass}>a boardsnower</div>
        </div>
      </div>
    </div>
  )
}
