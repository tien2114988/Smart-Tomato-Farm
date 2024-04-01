import React from "react";

const FormSensor = ({ props }) => {
  const lux = props;
  return (
    <div>
      <form action="" className="d-flex flex-column gap-2">
        <label>Đèn bật khi</label>
        <select>
          <option value="">Khi cường đó ánh sáng &lt; {lux} lux</option>
        </select>
        <label>Đèn tắt khi</label>
        <select>
          <option value="">Khi cường đó ánh sáng &gt; {lux} lux</option>
        </select>
        <button className="automode__save border">Lưu</button>
      </form>
    </div>
  );
};

export default FormSensor;
