import MyResume from "../components/myResume";
import styles from '../components/myResume.css';

export default function ResumePage() {
  return (
    <main>
      <p>Download my resume</p>
      <MyResume />
    </main>
  )
}

export function links() {
  return [
    {rel: "stylesheet", href: styles},
  ];
}