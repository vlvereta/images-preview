import React from 'react';

import { PictureBlock } from 'components';
import { ISuccessResponse } from 'types/ISuccessResponse';

import './styles.css';

interface IPicturesContainerProps {
  data: ISuccessResponse;
}

const PicturesContainer: React.FC<IPicturesContainerProps> = ({ data: { totalHits, hits } }) => {
  return (
    <section className='pictures-container'>
      <h2>Let's preview what pictures were found. Total hits: {totalHits} &#x1f609;</h2>
      <div className='pictures-wrapper'>
        {hits.map(hit => (
          <PictureBlock key={hit.id} pictureBlockData={hit} />
        ))}
      </div>
    </section>
  );
};

export default PicturesContainer;
