import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <section className="  h-screen bg-slate-100">
      <div id="about" className="flex flex-row items-center justify-between">
        <ArrowLeftIcon width={40} />
        <p>About section</p> <ArrowRightIcon width={40} />
      </div>
    </section>
  );
}
