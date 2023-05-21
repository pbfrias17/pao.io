import MainNavigationComponent from "./mainNavigation";

export default function HeaderComponent() {
  return <div class="bg-gradient-radial-cat from-orange from-30% md:from-10% to-rocky to-45% md:to-15%">
    <div class="flex justify-center">
      <h1 class="inline-block text-4xl text-center pt-7 pb-10 px-12 text-cobalt font-semibold">
        P A O . I O
      </h1>
    </div>
    <MainNavigationComponent />
  </div>
}
