import { useRef, useEffect, useState } from 'react';
import useSlider from './hooks/useSlider';
import Arrow from '../arrow/Arrow';

type Props = {
  data: {
    src: string;
    alt: string;
  }[];
};

const Slider = ({ data }: Props) => {
  const [mouseStart, setMouseStart] = useState(0);
  const { slide, changeSlide } = useSlider();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const photoWrapperRef = useRef<HTMLImageElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  const transform = (direction: 'left' | 'right') => {
    if (photoRef.current)
      changeSlide(
        'currentTransform',
        direction === 'right'
          ? slide.currentTransform - photoRef.current.offsetWidth
          : slide.currentTransform + photoRef.current.offsetWidth,
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

  const handleSlidingRight = () => {
    changeSlide('currentPhoto', ++slide.currentPhoto);
    transform('right');
  };

  const handleSlidingLeft = () => {
    changeSlide('currentPhoto', --slide.currentPhoto);
    transform('left');
  };

  const dragEnd = (e: any) => {
    if (e.clientX + 100 < mouseStart && slide.currentPhoto !== data.length - 1)
      handleSlidingRight();
    else if (mouseStart + 100 < e.clientX && slide.currentPhoto !== 0)
      handleSlidingLeft();
  };

  const touchEnd = (e: any) => {
    if (
      e.changedTouches[0].clientX + 50 < mouseStart &&
      slide.currentPhoto !== data.length - 1
    )
      handleSlidingRight();
    else if (
      mouseStart + 50 < e.changedTouches[0].clientX &&
      slide.currentPhoto !== 0
    )
      handleSlidingLeft();
  };

  return (
    <div ref={carouselWrapperRef} className="relative">
      <div className="overflow-hidden">
        <div
          onDragOver={e => e.preventDefault()}
          draggable
          onDragEnd={dragEnd}
          onTouchEnd={touchEnd}
          onTouchStart={e => setMouseStart(e.touches[0].clientX)}
          onMouseDown={e => setMouseStart(e.nativeEvent.clientX)}
          ref={photoWrapperRef}
          className={`w-fullv cursor-grab flex justify-start duration-[500ms] ease-[cubic-bezier(1, 0, 0.2, 0.6);]`}
        >
          {data.map((photo, index) => (
            <img
              key={photo.src}
              ref={photoRef}
              className={`${
                index !== slide.currentPhoto &&
                'blur-md scale-[0.75] lg:scale-[0.8] xl:scale-[0.85]'
              } w-[72%] h-[40.5%] md:w-[60%] md:h-[33.75%] transition-all duration-[500ms] ease-[cubic-bezier(1, 0, 0.2, 0.6);]`}
              src={photo.src}
              alt={photo.alt}
            />
          ))}
        </div>
      </div>
      <Arrow
        handleClick={handleSlidingLeft}
        direction="left"
        isHidden={slide.currentPhoto === 0}
      />
      <Arrow
        handleClick={handleSlidingRight}
        direction="right"
        isHidden={slide.currentPhoto === data.length - 1}
      />
    </div>
  );
};

export default Slider;
