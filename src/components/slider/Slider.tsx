import { useRef, useEffect } from 'react';
import useSlider from './hooks/useSlider';
import Arrow from '../arrow/Arrow';

type Props = {
  data: {
    src: string;
    alt: string;
  }[];
};

const Slider = ({ data }: Props) => {
  const { slide, changeSlide } = useSlider();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const photoWrapperRef = useRef<HTMLImageElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  const transformRight = () => {
    if (photoRef.current)
      changeSlide(
        'currentTransform',
        slide.currentTransform - photoRef.current.offsetWidth,
      );
  };

  const transformLeft = () => {
    if (photoRef.current)
      changeSlide(
        'currentTransform',
        slide.currentTransform + photoRef.current.offsetWidth,
      );
  };

  const handleResize = () => {
    setTimeout(() => {
      if (
        carouselWrapperRef.current &&
        photoRef.current &&
        photoWrapperRef.current
      ) {
        changeSlide(
          'currentTransform',
          carouselWrapperRef.current.offsetWidth / 2 -
            photoRef.current.offsetWidth / 2 -
            photoRef.current.offsetWidth * slide.currentPhoto,
        );
        photoWrapperRef.current.style.transform = `translateX(${slide.currentTransform}px)`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      handleResize();
    });

    return () => window.removeEventListener('resize', handleResize);
  }, [slide.currentTransform]);

  return (
    <div ref={carouselWrapperRef} className="relative">
      <div className="overflow-hidden">
        <div
          ref={photoWrapperRef}
          //   style={{ transform: `translateX(${slide.currentTransform}px)` }}
          className={`w-full flex justify-start duration-[500ms] ease-[cubic-bezier(1, 0, 0.2, 0.6);]`}
        >
          {data.map((photo, index) => (
            <img
              key={photo.src}
              ref={photoRef}
              className={`${
                index !== slide.currentPhoto &&
                'blur-lg scale-[0.75] lg:scale-[0.8] xl:scale-[0.85]'
              } w-[72%] h-[40.5%] md:w-[66%] md:h-[37.125%] transition-all duration-[500ms] ease-[cubic-bezier(1, 0, 0.2, 0.6);]`}
              src={photo.src}
              alt={photo.alt}
            />
          ))}
        </div>
      </div>
      <Arrow
        handleClick={() => {
          changeSlide('currentPhoto', --slide.currentPhoto);
          transformLeft();
        }}
        direction="left"
        isHidden={slide.currentPhoto === 0}
      />
      <Arrow
        handleClick={() => {
          changeSlide('currentPhoto', ++slide.currentPhoto);
          transformRight();
        }}
        direction="right"
        isHidden={slide.currentPhoto === data.length - 1}
      />
    </div>
  );
};

export default Slider;
