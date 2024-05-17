import React, { useState } from "react";
import "../assets/Palliser_Lobby.webp";
import "../assets/palliser-winter.jpeg";
import "../assets/hi.png";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useBreakpointValue } from "@chakra-ui/react";

interface Props {
  data: Image[];
}

interface Image {
  src: string;
  alt: string;
  id: number;
}

export const Carousel = ({ data }: Props) => {
  const size = useBreakpointValue({ base: "100%", md: "100%" });
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0: slide + 1);
  }

  const previousSlide = () => {
    setSlide(slide === 0 ?  data.length - 1:  slide - 1);
  }

  return (
    <div className="carousel" style={{ width: size }}>
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSlide}/>
      {data.map((item) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={item.id}
            className={slide === item.id ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="inds">
            {data.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick = {() => setSlide(item.id)}
                  className={
                    slide === item.id ? "ind" : "indicator ind-inactive"
                  }
                />
              );
            })}
        </span>
    </div>
  );
};
