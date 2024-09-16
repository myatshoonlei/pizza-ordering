import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the perfect slice of happiness that brings everyone together.
          Whether it's a quiet evening at home or a lively celebration, it’s the
          one simple pleasure that turns any moment into something
          extraordinary.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/pizza-slice.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
