import { useState } from 'react';

const useSlider = () => {
  const [slide, setSlide] = useState({
    currentPhoto: 0,
    currentTransform: 0,
  });

  const changeSlide = (property: keyof typeof slide, value: number) => {
    setSlide(prev => ({
      ...prev,
      [property]: value,
    }));
  };

  return { slide, changeSlide };
};

export default useSlider;
