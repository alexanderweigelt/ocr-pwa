import Navigation from "@/components/Navigation";
import Converter from "../components/Converter";
import Docs from "@/components/Docs";
import Installation from "@/components/Installation";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <header className="theme-toggle relative">
        <h1 className="relative text-center text-6xl leading-[125%] font-bold text-gray-900 dark:text-gray-200">
          OCR
        </h1>
      </header>
      <div
        className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12 md:gap-36"
        id="top"
      >
        <section
          className="relative flex w-full flex-col items-start gap-6 self-stretch"
          id="converter"
        >
          <Converter />
        </section>

        <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
          <Navigation />
        </div>

        <section
          className="relative flex w-full flex-col items-start gap-6 self-stretch"
          id="docs"
        >
          <Docs />
        </section>

        <section
          className="relative flex w-full flex-col items-start gap-6 self-stretch"
          id="installation"
        >
          <Installation />
        </section>
      </div>
    </main>
  );
}
