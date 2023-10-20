import React from "react";
import MyInput from "./MyInput";
const UserForm = () => {
  return (
    <div>
      <form className="container">
        <h1>Login Form</h1>
        <MyInput error="Поле не может быть пустым" labelText="FirstName" />
        <MyInput error="Поле не может быть пустым" labelText="Last Name" />
        <MyInput error="Невалидный емайл @" labelText="Email" type="email" />
        <MyInput
          error="Пароль должен содержать больше чем 6 символов"
          labelText="Password"
          type="Password"
        />
        <MyInput error="Поле не может быть пустым" labelText="Address" />
        <MyInput
          error="Поле не должно быть пустым"
          labelText="City"
          type="text"
        />
        <MyInput
          error="Возрасть должен быть старше 18 лет"
          labelText="Age"
          type="Number"
        />
        <button type="button">Register</button>
      </form>
    </div>
  );
};

export default UserForm;
