// components/Typeform.tsx

import React from 'react';
import PropTypes from 'prop-types';

interface TypeformProps {
  rootClassName?: string;
}

const Typeform: React.FC<TypeformProps> = ({ rootClassName = '' }) => {
  return (
    <div className={`flex items-center justify-center w-full h-full ${rootClassName}`}>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[95%] h-[637px] m-2 p-2 shadow-md">
          <iframe
            src="https://formless.ai/c/QXU30lOcD12t"
            className="w-full h-full border-0 block"
            allow="microphone"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

Typeform.defaultProps = {
  rootClassName: '',
};

Typeform.propTypes = {
  rootClassName: PropTypes.string,
};

export default Typeform;
