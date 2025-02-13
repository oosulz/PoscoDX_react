import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import "./assets/scss/App.scss";

import data from "./assets/json/data.js";

function App() {
  const [emails, setEmails] = useState(data);

  const SearchEmail = function (keyword) {
    console.log(`SearchEmail: ${keyword}`);

    const keywordLowerCase = keyword.toLowerCase();

    setEmails(
      !keywordLowerCase
        ? data
        : data.filter(({ lastName, firstName, email }) => {
            return (
              firstName.toLowerCase().indexOf(keywordLowerCase) !== -1 ||
              lastName.toLowerCase().indexOf(keywordLowerCase) !== -1 ||
              email.toLowerCase().indexOf(keywordLowerCase) !== -1
            );
          })
    );
  };

  return (
    <div id={"App"}>
      <RegisterForm />
      <SearchBar SearchEmail={SearchEmail} />
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;
