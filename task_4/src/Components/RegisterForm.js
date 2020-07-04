import React, { Component, useState } from 'react'
import '../Styles/RegisterForm.css'

const useHandler = () => {
    const [value, changeValue] = useState("");
    const changeData = (e) => changeValue((e && e.target) ? e.target.value : '');
    return [
        value,
        changeData
    ];
};

const RegisterForm = () => {
    const [userName, setUserName] = useHandler("");
    const [email, setEmail] = useHandler("");
    const [city, setCity] = useHandler("");
    const [users, setUsers] = useState([]);

    const addUser = () => {
        const newUser = {
            UserName: userName,
            Email: email,
            City: city
        };

        setUsers([...users, newUser]);
        setUserName('');
        setEmail('');
        setCity('');
    }

    const isValid = (userName.length === 0 || email.length === 0 || city.length === 0);


    return (
        <>
            <div
                className="register-container"
            >
                <h1>Guest registration</h1>
                <p>Please fill in this form to register new guest.</p>
                <hr />

                <label
                    for="username"
                >
                    <b>UserName</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    id="username"
                    onChange={setUserName}
                    value={userName}
                    required
                >
                </input>

                <label
                    for="email"
                >
                    <b>Email</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    onChange={setEmail}
                    value={email}
                    required
                >
                </input>

                <label
                    for="city"
                >
                    <b>City</b>
                </label>
                <select
                    name="city"
                    id="city"
                    onChange={setCity}
                >
                    <option
                        value=""
                        defaultValue
                    >
                    </option>
                    <option
                        value="Kyiv"
                    > Kyiv
                    </option>
                    <option
                        value="Lviv"
                    > Lviv
                    </option>
                    <option
                        value="Harkiv"
                    > Harkiv
                    </option>
                    <option
                        value="Odesa"
                    > Odesa
                    </option>
                </select>

                <hr />

                <button
                    type="submit"
                    className="form-send-btn"
                    onClick={addUser}
                    disabled={isValid}
                >
                    Register
                </button>

                <br />

                <ul>
                    {
                        users.map((todo, key) => (
                            <li
                                key={key}
                            >
                                User: <b>
                                    {todo.UserName}
                                </b> with email: <b>
                                    {todo.Email}
                                </b> from: <b>
                                    {todo.City}
                                </b>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}


export default RegisterForm;