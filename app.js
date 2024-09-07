// EmailJS initialization
emailjs.init("nJj8wW8QPsifD9BA1");

// Հղումը դեպի կոճակը և մուտքագրումը
const button = document.querySelector("button");
const input = document.querySelector("input");

// Երբ կոճակը սեղմվում է, նամակն ուղարկում ենք
button.addEventListener("click", () => {
  const templateParams = {
    to_name: "me",
    from_name: "me",
    message: input.value,
  };

  // EmailJS հաղորդագրության ուղարկում
  emailjs.send("service_dny056e", "template_hz42nfb", templateParams)
    .then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function(error) {
        console.log("FAILED...", error);
      }
    );
});
