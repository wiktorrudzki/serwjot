import { useRef, useState, useEffect } from 'react';
import { gallery } from '../../assets/gallery/gallery';
import { Title } from '../../components';

const Gallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentTransform, setCurrentTransform] = useState(0);
  const carouselWrapperRef = useRef<HTMLDivElement | null>(null);
  const photoWrapperRef = useRef<HTMLImageElement | null>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  const transformRight = () => {
    if (photoRef.current)
      setCurrentTransform(currentTransform - photoRef.current.offsetWidth);
  };

  const transformLeft = () => {
    if (photoRef.current)
      setCurrentTransform(currentTransform + photoRef.current.offsetWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    if (carouselWrapperRef.current && photoRef.current) {
      setCurrentTransform(
        carouselWrapperRef.current.offsetWidth / 2 -
          photoRef.current.offsetWidth / 2,
      );
    }
  };

  useEffect(() => {
    if (photoWrapperRef.current) {
      photoWrapperRef.current.style.transform = `translateX(${currentTransform}px)`;
    }
  }, [currentTransform]);

  // przekazac parametr zeby wiedziec ze to handleResize z resiza a nie z useEffect
  window.addEventListener('resize', handleResize);

  return (
    <section
      id="gallery"
      className="px-10 md:px-[8rem] lg:px-[10rem] xl:px-[12rem] bg-background flex flex-col gap-10 lg:gap-16 items-center justify-center"
    >
      <Title>Gallery</Title>
      <div ref={carouselWrapperRef} className="relative">
        <div className="overflow-hidden">
          <div
            ref={photoWrapperRef}
            className={`w-full flex justify-start duration-[500ms] ease-[cubic-bezier(1, 0, 0.2, 0.6);]`}
          >
            {gallery.map((photo, index) => (
              <img
                ref={photoRef}
                className={`${
                  index !== currentPhoto && 'blur-lg scale-[0.85]'
                } md:w-[32rem] md:h-[19.6875rem] lg:w=[42rem] lg:h-[23.625rem] xl:w-[54rem] xl:h-[30.375rem] transition-all duration-[500ms] ease-[cubic-bezier(1, 0, 0.2, 0.6);]`}
                src={photo}
                alt="xd"
              />
            ))}
          </div>
        </div>
        <div
          onClick={() => {
            setCurrentPhoto(prev => --prev);
            transformLeft();
          }}
          className={`${
            currentPhoto === 0 && 'hidden'
          } w-[5rem] h-[5rem] cursor-pointer absolute left-[4rem] top-[50%] translate-y-[-50%] flex justify-center items-center`}
        >
          <div className="arrow-left bg-gray-300 hover:bg-gray-200 w-[2rem] h-[2rem]"></div>
        </div>
        <div
          onClick={() => {
            setCurrentPhoto(prev => ++prev);
            transformRight();
          }}
          className={`${
            currentPhoto === gallery.length - 1 && 'hidden'
          } w-[5rem] h-[5rem] cursor-pointer absolute right-[4rem] top-[50%] translate-y-[-50%] flex justify-center items-center`}
        >
          <div className="arrow-right bg-gray-300 hover:bg-gray-200 w-[2rem] h-[2rem]"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
