import React from 'react';

import { PictureBlock } from 'components';
import { ISuccessResponse } from 'types/ISuccessResponse';

import './styles.css';

interface IPicturesContainerProps {
  data: ISuccessResponse;
}

const PicturesContainer: React.FC<IPicturesContainerProps> = ({ data: { hits } }) => {
  return (
    <div className='pictures-container'>
      {hits.map(hit => (
        <PictureBlock pictureBlockData={hit} />
      ))}
    </div>
  );
};

export default PicturesContainer;
