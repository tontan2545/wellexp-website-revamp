import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const logos = [
    "aeon",
    "tog",
    "thaicom",
    "beauty-buffet",
    "bcpg",
    "kerry",
    "thitaram",
    "stelligence",
  ];
  return (
    <main className="flex h-full">
      <div className="h-[800px]">
        <div className="absolute top-[-150px] w-full z-0">
          <Image
            alt="bg-1"
            src="/homepage/bg-1.png"
            width={2000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="absolute h-[600px] right-32 top-6">
          <Image
            alt="aw-1"
            src="/homepage/aw-1.svg"
            width={2000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="absolute flex flex-col w-full items-center top-[78%] space-y-2">
          <p className="font-semibold text-primary text-xl">
            Trusted by Leading Companies
          </p>
          <div className="flex space-x-4">
            {logos.map((logo) => (
              <Image
                key={logo}
                src={`/logo/blue/${logo}.png`}
                alt={logo}
                width={140}
                height={140}
              />
            ))}
          </div>
        </div>
        <div className="absolute px-40 py-20 space-y-8 font-bold">
          <p className="text-[color:hsl(var(--primary))] text-2xl underline underline-offset-8 capitalize">
            WELLEXP
          </p>
          <p className="w-5/12 text-3xl text-primary">
            Mission are giving{" "}
            <span className="text-[color:hsl(var(--primary))]">
              happiness to workplace
            </span>{" "}
            creating sustainable successful organization
          </p>
          <p className="font-thin">
            create sustainable successful organization
          </p>
          <div className="space-x-8">
            <Button className="bg-white text-black shadow-md hover:bg-white/80">
              Book a Demo
            </Button>
            <Button className="bg-secondary shadow-md hover:bg-secondary/80">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
