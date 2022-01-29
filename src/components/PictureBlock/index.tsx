import React from 'react';

import { IHit } from 'types/IHit';
import { openNewPage } from 'helpers/openNewPage';

import './styles.css';

interface IPictureBlockProps {
  pictureBlockData: IHit;
}

const PictureBlock: React.FC<IPictureBlockProps> = ({
  pictureBlockData: {
    tags,
    pageURL,
    previewURL,
  }
}) => (
  <div
    className='picture-block'
    onClick={() => openNewPage(pageURL)}
    title='Click to open the picture on the Pixabay.'
  >
    <img src={previewURL} alt="" width={150} height={150} />
    <div className='tags'>{tags}</div>
  </div>
);

export default PictureBlock;
