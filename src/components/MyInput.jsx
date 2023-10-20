import React, { useState } from "react";

const MyInput = (props) => {
  const [message, setMessage] = useState("");
  const { error, labelText, type } = props;
  const [errors, setErrors] = useState();

  const check = (e) => {
    setMessage(e.target.value);
    console.log(message.includes("@"));
    if (labelText === "Password") {
      if (message.length >= 6) {
        setErrors("");
      } else {
        setErrors("Пароль должен содержать больше чем 6 символов");
      }
    }

    if (labelText === "Email") {
      if (message.includes("@")) {
        setErrors("");
      } else {
        setErrors("Невалидный емайл @");
      }
    }
  };
  console.log(errors);
  return (
    <div>
      <label>
        {labelText} <br />{" "}
      </label>
      <input type={type ? type : "text"} value={message} onChange={check} />
      {message === "" ? <p style={{ color: "red" }}>{error}</p> : <p></p>}
      <p style={{ color: "red" }}>{errors}</p>
    </div>
  );
};

export default MyInput;
