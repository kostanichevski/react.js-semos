import { useState, useEffect } from "react";

export const SimpleForm = () => {
  const initialValues = { username: "", email: "", password: "", captcha: "" };
  const [formValues, setFormValues] = useState(initialValues);

  // ne e prakticno
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  // e = event
  let handleChange = (e) => {
    // let value = e.target.value;
    console.log(e.target); // se dobiva cel html element, se targetira (target e valjda kako funkcija)
    // console.log(value);
    const { name, value } = e.target; // destrukturiranje

    // ...formValue - ova pravi kopija na site propertija vo nov objekt
    // [name] : value - so ova go setirame propertito (klucot) sto nam ni treba
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <h1>Login form</h1>
        <div>
          <div>
            <label>Username: </label>
            <input
              name="username"
              placeholder="enter username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              placeholder="enter email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              name="password"
              placeholder="enter password"
              values={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Captcha</label>
            <input
              name="captcha"
              placeholder="captcha"
              value={formValues.captcha}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
