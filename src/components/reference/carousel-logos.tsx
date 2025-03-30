import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

function LogoCarousel({
  items,
}: {
  items: {
    name: string;
    image: string;
  }[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      plugins={[AutoScroll({ speed: 1.4, direction: "backward" })]}
      className="w-full flex sm:space-x-6"
    >
      <CarouselContent className=" flex items-center">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="max-w-fit md:basis-1/2 lg:basis-1/5 "
          >
            <div
              className=" max-w-full relative border-b-0 flex-shrink-0  px-8 py-6"
              key={index}
            >
              <Image
                key={index}
                src={item.image}
                alt="image of an image"
                width={100}
                height={100}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default LogoCarousel;
