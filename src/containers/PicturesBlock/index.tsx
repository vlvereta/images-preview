import { Picture } from 'components';
import React from 'react';

import { ISuccessResponse } from 'types/ISuccessResponse';

interface IPicturesBlockProps {
  data: ISuccessResponse;
}

const PicturesBlock: React.FC<IPicturesBlockProps> = ({ data: { hits } }) => {
  return (
    <>
      {hits.map(hit => (
        <Picture pictureURL={hit.previewURL} />
      ))}
    </>
  );
};

export default PicturesBlock;
