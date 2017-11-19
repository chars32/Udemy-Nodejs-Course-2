// En este archivo:
// 1ero creamos 2 promesas (getUser, getGrades) y las uniremos para 
// crear un resultado deseado.

const users = [{
  id: 1,
  name: 'Andrew',
  schoolId: 101
}, {
  id: 2,
  name: 'Jess',
  schoolId: 999
}];

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
}, {
  id: 2,
  schoolId: 999,
  grade: 100
}, {
  id: 3,
  schoolId: 101,
  grade: 80
}];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);

    if (user) {
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}.`)
    }
  })
};

const getGrades = (schoolId) => {
   return new Promise((resolve, reject) => {
     resolve(grades.filter((grade) => grade.schoolId === schoolId));
   })
};

// Andrew has a 83% in the class
const getStatus = (userId) => {
  let user;
  return getUser(userId).then((tempUser) => {
    user = tempUser;
    return getGrades(user.schoolId);
  }).then((grades) => {
    let average = 0;

    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) /grades.length;
    }
    return `${user.name} has a ${average}% in the class`
    console.log(average);
  })
};

// Async Await

// async sera la funcion padre (por asi decirlo), con esto
// sabemos que dentro de ella hay funciones await
const getSatusAlt = async (userId) => {
  // // throw es el equivalente a reject en las promises
  // throw new Error('This is an error');
  // // return es el equivalente a resolve en las promises
  // return 'Mike';
  // ------------------------------------------------
  // las funciones que tienen antes await se ejecutaran segun el
  // orden de aparicion y no se podran ejecutar hasta que termine
  // la anterior
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);
  let average = 0;

  if (grades.length > 0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) /grades.length;
  }
  return `${user.name} has a ${average}% in the class`

};
// Llamamos async await
getSatusAlt(1).then((status) => {
  console.log(status);
}).catch((e) => console.log(e));


// getStatus(3).then((status) => {
//   console.log(status);
// }).catch((e) => {
//   console.log(e);
// });
// getGrades(999).then((grades) => {
//   console.log(grades);
// }).catch((e) => {
//   console.log(e);
// })

// getUser(2).then((user) => {
//   console.log(user);
// }).catch((e) => {
//   console.log(e);
// })
