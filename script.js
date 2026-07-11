// ==========================
// Typing Animation
// ==========================

const typingElement = document.getElementById("typing");

const words = [
    "Harsh Shukla",
    "Frontend Developer",
    "Full Stack Developer",
    "B.Tech CSE Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ==========================
// Active Navbar
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ==========================
// Scroll Reveal
// ==========================

const revealElements = document.querySelectorAll(

".about,.skills,.projects,.contact,.skill-card,.project-card"

);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// ==========================
// Contact Button
// ==========================

const contactBtn = document.querySelector(".hero-content button");

if(contactBtn){

    contactBtn.addEventListener("click",()=>{

        document.querySelector("#contact").scrollIntoView({

            behavior:"smooth"

        });

    });

}


// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}
/* ===========================
   CONTACT FORM
=========================== */
const contactForm = document.getElementById("contactForm");
const submitBtn = contactForm.querySelector("button");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
  Swal.fire({
    icon: "warning",
    title: "Missing Fields",
    text: "Please fill all the fields.",
  });

  submitBtn.disabled = false;
  submitBtn.innerText = "Send Message";
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  Swal.fire({
    icon: "warning",
    title: "Invalid Email",
    text: "Please enter a valid email address.",
  });

  submitBtn.disabled = false;
  submitBtn.innerText = "Send Message";
  return;
}
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: data.message,
        confirmButtonColor: "#3085d6",
      });

      contactForm.reset();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Something went wrong!",
      confirmButtonColor: "#d33",
    });

    console.log(error);
  }

  submitBtn.disabled = false;
  submitBtn.innerText = "Send Message";
});
