import React, { useState, useEffect } from 'react';

import './TypingEffect.css';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  
  const fonts = ['"Palatino", serif', '"Papyrus", fantasy', '"Trebuchet MS", sans-serif', '"Verdana", sans-serif', '"Courier New", monospace', '"Lucida Sans Unicode", sans-serif', '"Times New Roman", Times, serif', 'Georgia, serif', '"Palatino Linotype", "Book Antiqua", Palatino, serif', '"Arial Black", Gadget, sans-serif', '"Comic Sans MS", cursive, sans-serif', 'Impact, Charcoal, sans-serif', '"Lucida Sans Unicode", "Lucida Grande", sans-serif', 'Tahoma, Geneva, sans-serif', '"Trebuchet MS", Helvetica, sans-serif', 'Verdana, Geneva, sans-serif', '"Courier New", Courier, monospace', '"Lucida Console", Monaco, monospace'];  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBeforeDeletion = 1000;

  useEffect(() => {
    let timer;
    
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
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, displayedText, isDeleting, fonts, fontIndex]);

  useEffect(() => {
    let timer;
    if (displayedText === text) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDeletion);
    }
    return () => clearTimeout(timer);
  }, [displayedText, text, delayBeforeDeletion]);

  const currentFont = fonts[fontIndex % fonts.length];
  const placeholder = '\u00A0'; // Using non-breaking space as a placeholder

  return (
    <div style={{ fontFamily: currentFont, minHeight: '1em' }}>
      <p>{displayedText || placeholder}<span className="blinking-caret">|</span></p>    </div>
  );
};

export default TypingEffect;