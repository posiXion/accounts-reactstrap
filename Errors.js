import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'reactstrap/lib/Alert';

const Errors = ({ errors }) => (
  <Alert color="danger" isOpen={errors.length > 0}>
    {errors.map((err, i) => (
      <div key={i}>
        <p className="mb-0">
          {err.errStr}
        </p>
        {i < errors.length - 1 && <hr />}
      </div>
    ))}
  </Alert>
);

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Errors;
