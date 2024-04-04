import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


SettingModal.propTypes = {
    
};

function SettingModal(props) {
    const page = 'block';
    return (
        <div
          className="modal show"
          style={{ display: page, position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Lưu thay đổi</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p>Bạn có chắc chắn lưu các thay đổi</p>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary">Hủy</Button>
              <Button variant="primary">Lưu</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      );
}

export default SettingModal;