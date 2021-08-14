const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    link: "barney",
  }, 
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    link: "robin",
  }, 
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    link: "anonimus",
  }, 
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    link: "lilia",
  }, 
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    link: "marschen",
  }, 
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    link: "theodore",
  }];

  const state = {};
  state.contacts = contacts;
  state.search = contacts;

for (let i = 0; i < state.contacts.length; i++) {
  if (state.contacts[i].gender === "female") {
    state.contacts[i].gender = "♀";
  }
  if (state.contacts[i].gender === "male") {
    state.contacts[i].gender = "♂";
  }
  if (state.contacts[i].gender === undefined) {
    state.contacts[i].gender = "?";
  }
}

for (let i = 0; i < state.contacts.length; i++) {
  state.contacts[i].id = i + 1;
}



console.log(state.contacts)

export {contacts};

export default state;