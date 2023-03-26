import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <article>
      <h2>Contact</h2>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fuga
        soluta esse distinctio molestiae dolorem doloremque! Labore repudiandae
        voluptas enim fugiat, libero alias quas rem totam error officia, dolor
        assumenda.
      </p>
    </article>
  );
});

export const head: DocumentHead = {
  title: "Contact",
};
