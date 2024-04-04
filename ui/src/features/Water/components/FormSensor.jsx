import React from "react";

const FormSensor = ({ props }) => {
  const mois = props;
  return (
    <div>
      <form action="" className="d-flex flex-column gap-2">
        <label>Máy bơm bật khi</label>
        <select>
          <option value="">Khi độ ẩm &lt; {mois} %</option>
        </select>
        <label>Máy bơm tắt khi</label>
        <select>
          <option value="">Khi độ ẩm &gt; {mois} %</option>
        </select>
        <button className="automode__save border">Lưu</button>
      </form>
    </div>
  );
};

export default FormSensor;
