function callbackHell(callback) {
  setTimeout(() => {
    const data = "Inside (callback hell) function";
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed First`;
    console.log(`Inside (firstFunc) Function`);
    callback(processedData);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `{data} -processed second`;
    console.log(`Inside (second func) function`);
    callback(processedData);
  }, 1500);
}

//callback hell
callbackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final resutl of all function: ${processedData2}`);
    });
  });
});

//refactory above code by promise

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callback hell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - processed data`;
      console.log("inside (first function)");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    const processedData = `${data} - processed data`;
    console.log("inside (second function)");
    resolve(processedData);
  }, 1500);
}

callbackHell()
  .then((data) => firstFunc(data))
  .then(processedData1);
