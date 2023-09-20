import { useState, useEffect } from "react";

export const Form = () => {
  return (
    <div>
      <div class="form">
        <form>
          <input placeholder="name"></input>
          <br />
          <br />
          <input placeholder="surname"></input>
          <br />
          <br />
          <input placeholder="e-mail"></input>
          <br />
          <br />
          <button class="button">Submit</button>
        </form>
      </div>
      <div class="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>E-mail</th>
          </tr>
        </thead>
      </div>
    </div>
  );
};
