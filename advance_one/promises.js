// ==========================
// 🔹 1. Basic Promise
// ==========================

const promiseOne = new Promise(function(resolve, reject) {
    // async task (1 sec delay)
    setTimeout(function() {
        console.log("async task is completed"); // pehle ye print hoga
        resolve(); // promise ko success mark kar diya
    }, 1000);
});

// promise consume kar rahe hai
promiseOne.then(function() {
    console.log("promise consumed"); // resolve ke baad ye chalega
});


// ==========================
// 🔹 2. Promise with Data
// ==========================

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve ke andar data pass kar rahe hai
        resolve({ name: "Tanvi", branch: "CSE" });
    }, 1000);
});

// yaha data receive hoga
promiseTwo.then((user) => {
    console.log(user); // object print hoga
});


// ==========================
// 🔹 3. Promise with Reject (Error handling)
// ==========================

const promiseThree = new Promise((resolve, reject) => {
    let error = true; // agar true hai to reject hoga

    if (!error) {
        resolve("Success"); // jab error false hoga
    } else {
        reject("Something went wrong"); // jab error true hoga
    }
});

// then success ke liye, catch error ke liye
promiseThree
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err); // error handle ho raha hai
    });


// ==========================
// 🔹 4. Promise Chaining
// ==========================

const promiseFour = new Promise((resolve, reject) => {
    resolve({ username: "Tanvi", id: 101 });
});

promiseFour
    .then((user) => {
        console.log(user); // pehle pura object print
        return user.username; // next then ko ye value milegi
    })
    .then((username) => {
        console.log(username); // sirf username print
    })
    .catch((err) => {
        console.log(err);
    });


// ==========================
// 🔹 5. finally() (always run)
// ==========================

const promiseFive = new Promise((resolve, reject) => {
    let success = true;

    if (success) resolve("Done"); // success case
    else reject("Failed"); // failure case
});

promiseFive
    .then((res) => console.log(res)) // success handle
    .catch((err) => console.log(err)) // error handle
    .finally(() => console.log("Always runs")); // ye hamesha chalega


// ==========================
// 🔹 6. async/await usage
// ==========================

async function consumePromiseFive() {
    try {
        const response = await promiseFive; 
        // await ka matlab hai promise resolve hone ka wait karo

        console.log(response); // yaha bhi "Done" print hoga
    } catch (error) {
        console.log(error); // agar reject hua to yaha aayega
    }
}

consumePromiseFive();


// ==========================
//IMPORTANT NOTES 
// ==========================

//  Promise ke 3 states:
// 1. Pending
// 2. Fulfilled (resolve)
// 3. Rejected (reject)

//  then() → success handle karta hai
//  catch() → error handle karta hai
//  finally() → hamesha run hota hai

// async/await → promises ko simple bana deta hai

//  .then() chaining → ek ke baad ek operations