import React from 'react';

function ModalCard(props: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={`modal ${props.active ? 'active' : ''}`} onClick={() => props.setActive(false)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
}

export default ModalCard;
