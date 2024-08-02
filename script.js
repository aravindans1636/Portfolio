


// Text Typed

var typingEffect = new Typed(".typedText",{
    strings:["Designer","Coder","Developer"],
    
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
})

// Scroll Reveal

const sr=ScrollReveal({
    origin:"top",
    distance:"8px",
    duration:2000,
    reset:true,
});


sr.reveal(".sb1",{delay:50});


const srLeft=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})


srLeft.reveal(".sr1",{delay:100});



const srRight=ScrollReveal({
    origin:"right",
    distance:"80px",
    duration:2000,
    reset:true,
})

srRight.reveal(".sl1",{delay:200});



const srBottom=ScrollReveal({
    origin:"bottom",
    distance:"80px",
    duration:2000,
    reset:true,
})


srBottom.reveal(".st1",{delay:100});

//active-link

// Get all the links in the navigation
const navLinks = document.querySelectorAll('nav a');

// Function to update active link based on scroll position
function updateActiveLink() {
    const scrollPosition = window.scrollY;

    // Loop through each section to check if it's in the viewport
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 90; // Adjust the offset if needed

        if (scrollPosition >= sectionTop) {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Get the corresponding link and add the active class
            const targetId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`nav a[href="#${targetId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', updateActiveLink);

// Call the function once to set the initial active link
updateActiveLink();



// Mode Changing

document.getElementById('btnSwitch').addEventListener('click',()=>{
    if(document.getElementsByTagName('body')[0].className == 'lightMode'){
        document.getElementsByTagName('body')[0].className ='darkMode';
        $('#darkMode').css("display","none");
        $('#lightMode').css("display","block");
    }
    else{
            document.getElementsByTagName('body')[0].className ='lightMode';
            $('#darkMode').css("display","block");
            $('#lightMode').css("display","none");
    }
})



// Onsubmit

var inputs = document.querySelectorAll("input")



function updated(){
    inputs.values = "";

    
}

