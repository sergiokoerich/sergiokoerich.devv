export default function Button({ text, href }) {
    return (
      <>
        <a
          href={href}
          className="
            inline-flex items-center justify-center  h-8 px-3 py-0 text-center
          text-white text-sm no-underline align-middle cursor-pointer duration-150 bg-black
            select-none font-custom hover:border-b-2 hover:border-b-Blue hover:text-Blue
          "
        >
          {text}
        </a>
      </>
  );
}