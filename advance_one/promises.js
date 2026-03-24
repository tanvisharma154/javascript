const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task is completed");
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("promise consumed");
});
// 2. Promise with Data (resolve value)
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Tanvi", branch: "CSE" });
    }, 1000);
});

promiseTwo.then((user) => {
    console.log(user);
});
//🧩 3. Promise with Reject (Error handling)
const promiseThree = new Promise((resolve, reject) => {
    let error = true;

    if (!error) {
        resolve("Success");
    } else {
        reject("Something went wrong");
    }
});

promiseThree
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
    //🧩 4. Promise Chaining
    const promiseFour = new Promise((resolve, reject) => {
    resolve({ username: "Tanvi", id: 101 });
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    });
    //🧩 5. finally() (runs always)
    const promiseFive = new Promise((resolve, reject) => {
    let success = true;

    if (success) resolve("Done");
    else reject("Failed");
});

promiseFive
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Always runs"));
   async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
   }
   consumePromiseFive() 