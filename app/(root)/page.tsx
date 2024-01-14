import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <main className="">
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
      {/* Right Side */}
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0 " >
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Host, Connect, Celebrate: Your Events,Our Platform!</h1>
          <p>Book and learn helpful tips from 3,188+ mentors in world-class companies with our global community.</p>
          <Button className="rounded-full button w-full sm:w-fit" asChild>
            <Link href={"/explore"} >
              Explore
            </Link>
          </Button>
        </div>
        <Image
          src={"/assets/images/hero.png"}
          alt="Picture of the author"
          width={1000}
          height={1000}
          className="max-h-70vh md:max-h-80vh 2xl:max-h-[50vh] object-contain object-center"
        />
      </div>
    </section>
    <section id="events" className="wrapper">
      <h2 className="h2-bold">Trusted by <br /> Thousands of Events</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
        Category filter
      </div>
    </section>
  </main>;
}
