import React from 'react';
import './Confetti.css'; // Ensure you create this CSS file or include the styles in App.css

const Confetti = () => {
  const createConfetti = () => {
    const confettiArray = [];
    for (let i = 0; i < 30; i++) {
      const style = {
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 3}s`,
      };
      confettiArray.push(<div key={i} style={style}></div>);
    }
    return confettiArray;
  };

  return (
    <div className="confetti">
      {createConfetti()}
    </div>
  );
};

export default Confetti;
