import { Switch, Route, NavLink, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { contacts } from "./components/contacts/components/Contacts";
import HomeComponent from "./components/home/Home";
import PublicationsComponent from "./components/publications/Publications";
import PhotosComponent from "./components/photos/Photos";
import ContactsComponent from "./components/contacts/Contacts";

import "./App.css";

function Person() {
  const [name, setName] = useState("Name");
  const [gender, setGender] = useState("?");
  const [phone, setPhone] = useState("+************");
  const { link } = useParams();

  useEffect(() => {
    const newPerson = contacts.find((person) => person.link === link);
    setName(newPerson.firstName + " " + newPerson.lastName);
    setGender(newPerson.gender);
    setPhone(newPerson.phone);
  });

  console.log(useParams());

  return (
    <>
      <h1>Name: {name}</h1>
      <h3>Gender: {gender}</h3>
      <h3>Phone: {phone}</h3>
      <Link to="/contacts">Back to Contacts</Link>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/spa-navigation"  activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/publications" activeClassName="selected">
          Publications
        </NavLink>
        <NavLink to="/photos" activeClassName="selected">
          Photos
        </NavLink>
        <NavLink to="/contacts" activeClassName="selected">
          Contacts
        </NavLink>
      </nav>
      <Switch>
        <Route  path="/spa-navigation" exact component={HomeComponent} />
        <Route path="/publications" component={PublicationsComponent} />
        <Route path="/photos" component={PhotosComponent} />

        <Route exact path="/contacts/:link" children={<Person />} />
        <Route path="/contacts" component={ContactsComponent} />
      </Switch>
    </div>
  );
}

export default App;
