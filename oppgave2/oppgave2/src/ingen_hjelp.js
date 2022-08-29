const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];
  
  // TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. 
  const userUl = document.getElementById("users");
  
  const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
      userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
  };
  
  // TODO: Hent HTML #id med getElementById
  const nameInput = document.getElementById('name');
  const ageInput  = document.getElementById("age");
  const filterBtn = document.getElementById("filter");

  
  // TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
  const nameInputEventListener = () => {
    nameInput.addEventListener("keyup", function() {
      let value = this.value
      console.log(value);

      let data = handleSearch(value, users)
      createTableUI(data);
    });
  };

  // TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
  const handleSearch = (value, data)=>{
    var filteredData = []

    for (let i = 0; i < data.length; i++) {
      value = value.toLowerCase();
      let name = data[i].name.toLowerCase();

      if (name.includes(value)) {
        filteredData.push(data[i])
      }
    }
    return filteredData
  };
  nameInputEventListener();


  // TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
  const filterBtnEventListener =() =>{
    filterBtn.addEventListener("click", function(event){
      let age = ageInput.value;
      console.log(age);
      
      let data = handleFilter(age, users);
      createTableUI(data);
    });
  };

  // TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
  const handleFilter = (ageInput, data)=>{
    var filteredData = []

    for (let i = 0; i < data.length; i++) {
      let userAge = data[i].age;

      if (userAge > ageInput) {
        filteredData.push(data[i])
      }
    }
    return filteredData
  };

  filterBtnEventListener();

  
  const main = () => {
    createTableUI(users);
  };
  
  main();