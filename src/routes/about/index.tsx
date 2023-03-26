import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <article>
      <h2>About</h2>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        facilis veniam, tenetur commodi natus enim illum corporis nisi
        necessitatibus a ex, vel excepturi amet error dolorum. Eaque, non.
        Doloribus, atque?
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        facilis veniam, tenetur commodi natus enim illum corporis nisi
        necessitatibus a ex, vel excepturi amet error dolorum. Eaque, non.
        Doloribus, atque?
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        facilis veniam, tenetur commodi natus enim illum corporis nisi
        necessitatibus a ex, vel excepturi amet error dolorum. Eaque, non.
        Doloribus, atque?
      </p>
    </article>
  );
});

export const head: DocumentHead = {
  title: "About",
};
