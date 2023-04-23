export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tl from-zinc-400/10 via-zinc-900 to-zinc-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="https://flowbite.com/" className="hover:underline">
            Egagofur™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
