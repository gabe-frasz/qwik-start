import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class="bg-yellow-500">
      <nav class="container flex items-center p-5">
        <img src="/mario_block.jpeg" alt="logo" class="h-12 w-10" />

        <h1 class="ml-2 mr-auto select-none">Mario Life</h1>

        <ul class="flex gap-2">
          <li>
            <Link
              href="/"
              class="rounded px-2 py-1 text-white transition-colors hover:bg-white hover:text-[#111]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              class="rounded px-2 py-1 text-white transition-colors hover:bg-white hover:text-[#111]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              class="rounded px-2 py-1 text-white transition-colors hover:bg-white hover:text-[#111]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
