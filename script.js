//function popPicture() {
    //const picture = document.querySelector("#profilePicture");

    //picture.classList.add("pop");

    //setTimeout(function(){
    //    picture.classList.remove("pop");
  //  }, 300);
//}   
//document.querySelector("#profilePicture").addEventListener("click", popPicture)

//lesson 2//
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
    img.classList.add("pop");
    setTimeout(() => {
    img.classList.remove("pop");
    }, 300);
    });
    });

const classmateSearch = document.getElementById('classmateSearch');
classmateSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let classmate = document.querySelectorAll('h1.title');
    classmate.forEach(classmate => {
        if(classmate.textContent.toLowerCase().includes(currentValue)){
            classmate.parentNode.parentNode.style.display = 'block';
        } else {
            classmate.parentNode.parentNode.style.display = 'none';

        }
    })
});