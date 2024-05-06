const button = document.getElementById("inputb");
const fileInput = document.getElementById("fileInput");
const bacButton = document.querySelector(".backB");
const form = document.querySelector("form");
const viewP = document.querySelector('.imageVP');
const addbu = document.querySelector(".add");
const addP = document.querySelector(".addB");
const selectedIm = document.querySelector('.selected-image') ;



let flag= 0;
addbu.addEventListener("click" , ()=>{
    if(flag == 0 || addP.style.zIndex== -5){
        addP.style.zIndex = 10;
        flag=1;
    }else{
        addP.style.zIndex =-5;
        flag = 0;
    }
})


button.addEventListener("click", () => {
    fileInput.click();
});

function imageE(sec) {
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            sec.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    return fileInput.files[0];
}

fileInput.addEventListener("change", () => {
    const selectedImage = imageE(selectedIm);
    if (selectedImage) {
        document.querySelector(".headA").innerText = "Preview";
        document.querySelector(".headP").style.display = "flex";
        document.querySelector(".backB").style.display = "block";
        document.querySelector(".next").style.display = "block";
        


        form.style.display = "none";
        viewP.style.display = "block";
    }
});

const nextb = document.querySelector('.next');
const captionP =  document.querySelector('.captionP');
const cpaI = document.querySelector(".capI");

let f =0 ;

nextb.addEventListener('click', () => {
    if (f  == 0) {
        imageE(cpaI);
        viewP.style.display = "none";
        addP.style.width = "55vw";
        nextb.innerText = "share";
        f++;
    } else {
        document.querySelector(".headA").innerText = "sharing..";
        document.querySelector(".backB").style.display = "none";
        nextb.style.display = "none";
        setTimeout(() => {
            addP.style.zIndex = -5;
            captionP.style.zIndex = 0;
        document.querySelector(".headA").innerText = "Create new post";
        document.querySelector(".backB").style.display = "";
            nextb.innerText = "Next";
            form.style.display = "" ;
        }, 3000);
        f = 0  ;
    }
});



// next caption part 

bacButton.addEventListener("click",()=>{
    document.querySelector(".headA").innerText = "Create new post";
    document.querySelector(".headP").style.display = "";
    document.querySelector(".backB").style.display = "";
    document.querySelector(".next").style.display = "";
    addP.style.width = "";
 
    form.style.display="";
    viewP.style.display = ""  
})