const pannels = document.querySelectorAll('.panel');
pannels.forEach((panel)=>{
panel.addEventListener('click',()=> {
    removeActiveClasses()
    panel.classList.add('active')
})
})


function removeActiveClasses(){
    pannels.forEach((panel)=>{
    panel.classList.remove('active')
    })
}
