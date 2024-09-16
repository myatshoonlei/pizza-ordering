import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          At Pizza Time, we believe that pizza is more than just food – it's a way to bring people together. Our passion for crafting the perfect pie starts with the freshest ingredients, from hand-tossed dough to flavorful sauces and premium toppings. Whether you're craving a classic Margherita or something bold and creative, each slice is made with love and dedication. 
          </p>
          <p>Founded on the idea that great pizza should be simple, delicious, and shared, we’re committed to delivering joy, one slice at a time. So, whether you’re dining in, picking up, or ordering online, we’re here to make every pizza moment unforgettable.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-3xl underline text-gray-500" href="tel:+12738123123">
            +12 738 123 123
          </a>
        </div>
      </section>
    </>
  )
}
