import React, {useEffect, useState} from 'react'

const Country = ({ getCountry }) => {
  const [country, setCountry] = useState();

  const updateCountry = async (code) => {
    setCountry(code);
  };

  useEffect(() => {
    updateCountry();
  }, []);

  useEffect(() => {
    getCountry(country);
  }, [country]);

  return (
    <div>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          updateCountry(e.target.value);
        }}
      >
        <option selected>Country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="ch">China</option>
        <option value="ca">Canada</option>
        <option value="ru">Russia</option>
      </select>
      <div>
      </div>
    </div>
  );
};

export default Country