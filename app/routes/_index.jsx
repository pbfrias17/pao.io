import { Link } from "@remix-run/react";
import { CSSProperties } from "react";

// import styles from "~/styles/main.css";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const socials = [
    "https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboPSs61NMKh4nlrLRplavXI_7GyOdI4WRkqziVuah8c19n-eB59PhrvGLNLIyMT7HeIE&usqp=CAU",
  ];

  return (
    <main class="bg-rocky">
      <div class="flex flex-row justify-evenly">
        <div class="circular-path-container bg-cobalt">
          <div class="w-80 h-80 overflow-hidden rounded-full">
            <img class="w-full h-full" src="https://media0.giphy.com/media/nDSlfqf0gn5g4/giphy.gif" alt="profile_pic" />
          </div>
          {
            socials.map((socialURL, index) => (
              <a style={{"--i": index + 1}}>
                <img class="rounded-full w-full h-full" src={socialURL} alt="alt text"/>
              </a>
            ))
          }
        </div>
        <div class="flex flex-row w-6/12">
          <div class="w-6/12 bg-aqua">
            <p class="px-10 py-5 text-3xl bg-purple text-center">I AM</p>
            <p class="p-3 text-2xl text-center">a Software Engineer</p>
            <p class="p-3 text-2xl text-center">a consumer of high-quality media</p>
            <p class="p-3 text-2xl text-center">an avid recreational tennis player</p>
          </div>
          <div class="w-6/12 bg-aqua">
            <p class="px-10 py-5 text-3xl bg-purple text-center">I AM NOT</p>
            <p class="p-3 text-2xl text-center">DevOps</p>
            <p class="p-3 text-2xl text-center">a consumer of trashy reality TV</p>
            <p class="p-3 text-2xl text-center">good at tennis</p>
          </div>
        </div>
      </div>
    </main>
  );
}

// export function links() {
//   return [
//     {rel: "stylesheet", href: styles},
//   ];
// }
