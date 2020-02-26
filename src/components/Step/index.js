import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Ui from './styles';

function Step({ image, children, subTitle }) {
  return (
    <Ui.Container>
      <div className="image">
        <img src={image} alt="sun" />
        <h1>{children}</h1>
        <h4>{subTitle}</h4>
      </div>
    </Ui.Container>
  );
}

export default memo(Step);

Step.propTypes = {
  image: PropTypes.string,
  subTitle: PropTypes.string,
};

Step.defaultProps = {
  image: '',
  subTitle: '',
};
