// For Open Navbar

const Open = () => {
    const nav = document.getElementById("menu")
    const arr = [
        nav.style.visibility = "visible",
        nav.style.opacity = 1,
        nav.style.zIndex = 99,
    ]


    nav.classList.add(arr)

}

// For Open Navbar/////



// For Close Navbar/////////
const Close = () => {
    const nav = document.getElementById("menu")
    const arr = [
        nav.style.visibility = "hidden",
        nav.style.opacity = 0,
        nav.style.zIndex = 99,
    ]
    nav.classList.add(full_menu_open);

}

// For Close Navbar////////



// Vertical Scroll Navigation //////////////
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.position = "fixed";
        document.getElementById("nav").style.zIndex = 99;
        document.getElementById("nav").style.transition = "300ms linear all"
        document.getElementById("nav").style.backgroundColor = "rgba(36,36,36,0.9)"


    } else {

        document.getElementById("nav").style.top = "0px";
    }
}

/////////////   ////  ///   ////////  //  //  End     //////   /////// ///////////