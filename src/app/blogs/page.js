export default function Blogs() {
  return (
    <main className="bg-rocky">
      <div>
        <p className="mx-5 mb-5 mt-16 text-xl text-purple font-semibold">Below is an exhaustive list of all work I've authored throughout my career</p>
        <ul className="mx-10 list-inside">
          <li className="my-3 text-cobalt underline">
            <a href="/">
              this
            </a>
          </li>
          <li className="my-3 text-cobalt underline">
            <a href="https://smartlogic.io/blog/lets-play-with-react-hooks-from-a-function-component-to-a-function-component-with-state-and-animation/">
              React Hooks
            </a>
          </li>
          <li className="my-3 text-cobalt underline">
            <a href="https://www.youtube.com/watch?v=3t7Imv-4kDQ">
              Sarabanda (Trumpet Cover)
            </a>
          </li>
        </ul>
        <p className="mx-5 mb-5 mt-20 text-xl text-purple font-semibold">
          Below is a list of original ideas that were stolen from me
          <span className="inline-block text-sm ml-3">(I have no proof of this)</span>
        </p>
        <ul className="mx-10 mb-20 list-inside">
          <li className="my-3 text-cobalt underline">
            <a href="https://netflix.com">
              Netflix
            </a>
          </li>
          <li className="my-3 text-cobalt underline">
            <a href="https://openai.com">
              A.I.
            </a>
          </li>
          <li className="my-3 text-cobalt underline">
            <a href="https://uber.com">
              Uber
            </a>
          </li>
          <li className="my-3 text-cobalt underline">
            <a href="https://en.wikipedia.org/wiki/Capitalism">
              Capitalism
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
