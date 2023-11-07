import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Nurul");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
  { name: "Yazid", age: 25, major: "Computer Science" },
  { name: "Arya", age: 30, major: "Engineering" },
  { name: "Ustadz Fauzan", age: 22, major: "Programmer" },
  { name: "Hasan", age: 28, major: "Psychology" },
  { name: "Haeril", age: 21, major: "Mathematics" }
];



  

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
  for (const user of users) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`);
  }
};




// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
  users.push(user);
};



// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
  if (index >= 0 && index < users.length) {
    users[index] = user;
  } else {
    console.log("Index tidak valid.");
  }
};


// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    users.splice(index, 1);
  } else {
    console.log("Index tidak valid.");
  }
};


export default Todo;
