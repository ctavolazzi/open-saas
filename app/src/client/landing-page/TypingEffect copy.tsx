import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  
  const fonts = ['"Courier New", monospace', 'Arial, sans-serif', 'Georgia, serif'];
  
  useEffect(() => {
    let timer;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
        if (displayedText === text) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, displayedText, isDeleting, fonts, fontIndex]);

  const currentFont = fonts[fontIndex % fonts.length];
  const placeholder = '\u00A0'; // Using non-breaking space as a placeholder

  return (
    <div style={{ fontFamily: currentFont, minHeight: '1em' }}>
      <p>{displayedText || placeholder}<span className="blinking-caret">|</span></p>
    </div>
  );
};

export default TypingEffect;
