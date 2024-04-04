import Toast from 'react-bootstrap/Toast';

function SettingToast({show, setShow}) {
    var variant = 'success';
    var title = 'Cập nhật thành công';
    var text = `Mức ngưỡng ${show.name} đã được cập nhật thành công`; 

    if(show.name=='huy'){
        var variant = '';
        var title = 'Hủy cập nhật';
        var text = `Hủy cập nhật thành công`; 
    }

    

  return (
        <Toast
          className="d-inline-block m-1"
          bg={variant}
          onClose={() => setShow({
            status:false,
            name: 'Nhiệt độ'
        })}
          show={show.status} delay={3000} autohide={true}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body className={variant === 'success' && 'text-white'}>
            {text}
          </Toast.Body>
        </Toast>
  );
}

export default SettingToast;