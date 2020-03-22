import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://12345@sentry.io/12345"
});

document.querySelector("main").classList.remove("error");
document.querySelector("main").classList.add("success");
document.querySelector("main").innerHTML = "Everything is working as expected";
