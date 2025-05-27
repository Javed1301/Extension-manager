let darkmode = localStorage.getItem('darkmode') === 'true';
const toggle = document.getElementById('toggleTheme');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

if(darkmode === "active") {
    enableDarkmode();
}   
toggle.addEventListener('click', () => {
    // console.log("Toggle clicked");
    darkmode = localStorage.getItem('darkmode') ;
    darkmode !== "active"?enableDarkmode():disableDarkmode();
    
    
}); 

const filterButtons = document.querySelectorAll('.filter-btn');
const filterableCards = document.querySelectorAll('#filterable-cards .card');

const filterCards = (e)=>{
    // console.log("enter")
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active");
    // console.log(e.target.dataset.name);

    filterableCards.forEach(card => {
        // console.log(card);
        card.classList.add("hide")
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click",filterCards));

const removeExt = document.querySelectorAll(".card-bottom button");
const activeExt = document.querySelectorAll(".card-bottom .tgl")
const removeCard = (e) => {
    e.target.parentElement.parentElement.classList.add("hide");
}

const addToActive = (e) => {
    console.log(e.target)
    const card = e.target.closest('.card');
    if(e.target.checked){
        // card.classList.add("active");
        card.dataset.name = "active";
        console.log(card.dataset.name);
    }else{
         card.dataset.name = "inactive";
    }
}

activeExt.forEach(ext => ext.addEventListener("change", addToActive));
removeExt.forEach(ext => ext.addEventListener("click", removeCard));