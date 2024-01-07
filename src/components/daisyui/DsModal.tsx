import { FC } from 'react';
import DsButton from './DsButton';

type Props = {
  open: boolean;
  modalClose: () => void;
};

const DsModal: FC<Props> = ({ open, modalClose }) => {
  return (
    <dialog open={open} id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <DsButton
            label="Disagree"
            handleClick={modalClose}
            color="secondary"
            size="sm"
          />
          <DsButton label="Agree" handleClick={modalClose} size="sm" />
        </div>
      </div>
    </dialog>
  );
};
export default DsModal;
