const users = [
    {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
    },
    {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'David',
      scores: 75,
      skills: ['HTM', 'CSS'],
      age: 22
    },
    {
      name: 'John',
      scores: 85,
      skills: ['HTM'],
      age: 25
    },
    {
      name: 'Sara',
      scores: 95,
      skills: ['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name: 'Martha',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'Thomas',
      scores: 90,
      skills: ['HTM', 'CSS', 'JS'],
      age: 20
    }
  ];
  
  //function for view scores greater than 85
  const scoresGreaterThan85 = arr => {
    const scores = [];
    for (const element of arr) {
      if (element.scores > 85) {
        scores.push(element.scores);
      }
    }
    return scores;
  };
  console.log(scoresGreaterThan85(users));


  // add newuser to array
  const newUser = {
    name: 'Billy',
    scores: 800,
    skills: ['HTML', 'CSS', 'JS'],
    age: 25
  };
  const addUser = (arr, newUser) => {
    for (const user of arr) {
      if (user['name'] === newUser.name) {
        return ' user already exist';
      }
    }
    arr.push(newUser);
    return arr;
  };
  console.log(addUser(users, newUser));


  //add user skill in array
  const addUserSkill = (arr, name, skill) => {
    let isPresent = false;
    for (const user of arr) {
      if (user['name'] === name) {
        user.skills.push(skill);
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      return ' user is not exist';
    }
  
    return arr;
  };
  console.log(addUserSkill(users, 'Martha', 'SQL'));
  

  //edit user details
  const editUser = (arr, name, newUser) => {
    let found = false;
    for (const user of arr) {
      if (user['name'] === name) {
        user.name = newUser.name;
        user.scores = newUser.scores;
        user.skills = newUser.skills;
        user.age = newUser.age;
        found = true;
        break;
      } 
    }
    if(!found) {
        return 'A user does not exist';
      }
  
    return arr;
  };
  console.log(editUser(users, "John", newUser));
  console.log(users);