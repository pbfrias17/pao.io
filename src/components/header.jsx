import MainNavigationComponent from "./mainNavigation";

export default function HeaderComponent() {
  return <div className="bg-gradient-radial-cat from-orange to-rocky from-35% md:from-15% 2xl:from-[8%] to-45% md:to-20% 2xl:to-[12%]">
    <div className="flex justify-center">
      <h1 className="inline-block text-4xl text-center pt-5 md:pt-7 pb-10 px-12 text-cobalt font-semibold">
        P A O . I O
      </h1>
    </div>
    <MainNavigationComponent />
  </div>
}
