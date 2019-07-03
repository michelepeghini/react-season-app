import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  autumn: {
    text: 'It\'s Autumn.',
    iconName: 'leaf'
  },
  winter: {
    text: 'It\'s Winter.',
    iconName: 'snowflake'
  },
  spring: {
    text: 'It\'s Spring.',
    iconName: 'tree'
  },
  summer: {
    text: 'It\'s Summer.',
    iconName: 'sun'
  }
}

const getSeason = (lat, date) => {
  const month = date.getMonth();

  switch (Math.floor(month / 4)) {
    case 1:
      if (lat <= 0) {
        return "winter";
      } else {
        return "summer";
      }
    case 2:
      if (lat <= 0) {
        return "spring";
      } else {
        return "autumn";
      } 
    case 3:
      if (lat <= 0) {
        return "summer";
      } else {
        return "winter";
      }
    case 4:
      if (lat <= 0) {
        return "autumn";
      } else {
        return "spring";
      }
    default:
      return "Unable to calcualte"   
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, props.date);
  const {text, iconName, color} = seasonConfig[season];

  //Document.getElementById('#root').css('background-color', bgColor);
  
  return (
    <div className='season-display'>
      <i className={`massive ${iconName} icon top ${season}`} />
      <h1 className={season}>{ text }</h1>
      <i className={`massive ${iconName} icon bottom ${season}`} />
    </div>
  );
}

export default SeasonDisplay