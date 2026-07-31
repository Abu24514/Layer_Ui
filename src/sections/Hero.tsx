"use client";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden 2xl:block">
          <Image src={designExample1Image} alt="Design example 1 image" />
        </div>
        <div className="absolute -right-64 -top-16 hidden 2xl:block">
          <Image src={designExample2Image} alt="Design example 2 image" />
        </div>

        <div className="absolute left-56 top-96 hidden 2xl:block">
          <Pointer name="Andrew" />
        </div>
        <div className="absolute right-80 -top-4 hidden 2xl:block">
          <Pointer name="Burak" color="red" />
        </div>

        <div className="flex justify-center animate-fade-in-up">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>

        <h1
          className="text-6xl md:text-8xl font-medium text-center mt-6 animate-fade-in-up mx-auto"
          style={{ animationDelay: "0.1s" }}
        >
          Impactful design
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          created effortlessly
        </h1>

        <p
          className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Design tools shouldn't slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>

        <form
          className="mt-8 max-w-lg flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border sm:border-white/50 rounded-2xl sm:rounded-full p-2 mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 py-2 sm:py-0 outline-0 flex-1 border border-white/50 sm:border-0 rounded-full sm:rounded-none"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
