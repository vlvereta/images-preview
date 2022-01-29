import React from 'react';

interface IPictureProps {
  pictureURL: string;
}

const Picture: React.FC<IPictureProps> = ({ pictureURL }) => {
  return (
    <img src={pictureURL} alt="" width={150} height={150} />
  ); 
};

export default Picture;
