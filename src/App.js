import React from "react";
import Infoinput from "./Components/InfoInput/InfoInput";
import "./App.css";
import { useState } from "react";
import InfoList from "./Components/InfoList/InfoList";

function App() {
  const [userList, setuserList] = useState([]);

  function addUserHandler(uname, uage) {
    setuserList((prevuserList) => {
      const updateuserInfo =[
        ...prevuserList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
      return updateuserInfo;
    });
  }

  return (
    <div>
      <section id="goal-form">
        <Infoinput onAddUser={addUserHandler} />
      </section>
      <section id="goals">
        <InfoList items={userList} />
      </section>
    </div>
  );
}

export default App;
