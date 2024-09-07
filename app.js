const button = document.querySelector("button");
const input = document.querySelector("input");

emailjs.init({
  publicKey: "nJj8wW8QPsifD9BA1",
});

button.addEventListener("click", () => {
  const templateParams = {
    to_name: "me",
    from_name: "me",
    message: input.value,
  };
  emailjs.send("service_dny056e", "template_hz42nfb", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
});
