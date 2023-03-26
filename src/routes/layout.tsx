import { component$, Slot } from "@builder.io/qwik";

import { Footer, Header } from "@/components/layouts";

export default component$(() => {
  return (
    <>
      <Header />

      <div class="container flex-1">
        <Slot />
      </div>

      <Footer />
    </>
  );
});
