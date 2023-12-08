
import React from 'react';

const Survey = () => {
  return (
    <div>
      <h1>Survey Page</h1>
      <p>Please answer the following questions:</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          How did you hear about us?
          <input type="text" name="referral" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default Survey;
