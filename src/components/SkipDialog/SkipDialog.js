import React from 'react';
import './SkipDialog.css';

const SkipDialog = ({ item, onClose, onContinue }) => {
  if (!item) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <p>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification,
          colours may vary, options and/or accessories may be featured at additional cost.
        </p>

        <div className="dialog-row">
          <p>{item.size} yard skip</p>
          <p className="price">£{item.price_before_vat}</p>
          <p>{item.hire_period_days} days hire</p>
          <div className="dialog-buttons">
            <button onClick={onContinue}>Continue</button>
            <button onClick={onClose}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipDialog;
