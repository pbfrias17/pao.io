import MainNavigationComponent from "./mainNavigation";

export default function HeaderComponent() {
  return <div class="bg-gradient-radial-cat from-orange from-15% to-rocky to-20%">
    <div class="flex justify-center">
      <h1 class="inline-block text-4xl text-center pt-7 pb-10 px-12 text-cobalt font-semibold">
        P A O . I O
      </h1>
    </div>
    <MainNavigationComponent />
  </div>
}
