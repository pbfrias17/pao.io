import { Link } from "@remix-run/react";
import { CSSProperties } from "react";

import styles from "~/styles/main.css";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const socials = [
    "https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboPSs61NMKh4nlrLRplavXI_7GyOdI4WRkqziVuah8c19n-eB59PhrvGLNLIyMT7HeIE&usqp=CAU",
  ];

  return (
    <main class="main-container">
      <div class='row'>
        <div class="circular-path-container">
          <div id="main-image-container" class="circular-path-center circle">
            <img class="img" src="https://media0.giphy.com/media/nDSlfqf0gn5g4/giphy.gif" alt="profile_pic" />
          </div>
          {
            socials.map((socialURL, index) => (
              <a style={{"--i": index + 1}}>
                <img class="circle img" src={socialURL} alt="alt text"/>
              </a>
            ))
          }
        </div>
        <div id="about-me-section">
          <div>
            <h3>I am</h3>
            <p>a Software Engineer</p>
            <p>a consumer of media</p>
            <p>a tennis player</p>
          </div>
          <div>
            <h3>I am not</h3>
            <p>Devops</p>
            <p>a consumer of trashy reality TV</p>
            <p>good at tennis</p>
          </div>
        </div>
      </div>
      <div id="blogs-section">
        <p>Blogs I've Authored</p>
        <ul>
          <li>
            <a href="https://smartlogic.io/blog/lets-play-with-react-hooks-from-a-function-component-to-a-function-component-with-state-and-animation/">
              React Hooks
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export function links() {
  return [
    {rel: "stylesheet", href: styles},
  ];
}
