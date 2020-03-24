const timeout = new Promise((resolve) => setTimeout(() => resolve(), 100));

timeout.then(() => {
  document.querySelector("main").classList.remove("error");
  document.querySelector("main").classList.add("success");
  document.querySelector("main").innerHTML =
    "Everything is working as expected";
});