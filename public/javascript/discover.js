const postSection = document.querySelector(".postDis");

import img from "./data.js";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

(function randomData() {
    let dat = "";
    let currentIndex = 0;
    
    const shuffledImages = shuffleArray(img);

    for (let i = 0; i < img.length * 10; i++) {
        const randomImage = shuffledImages[currentIndex].img;

        if (i % 2 == 0) {
            if (i % 5 == 0 && i != 0) {
                // Group of five images, alternate pattern
                dat += `
                    <div class="random relative bg-blue-500 w-[calc(33.33% - 0.6rem)] border-2 border-collapse border-r-4 row-span-2 border-black h-[700px] overflow-hidden">
                        <img src="${randomImage}" class="w-full absolute z-10 h-full object-cover object-center" alt="">
                        <div class="det z-0  absolute w-full h-full flex gap-[20px] justify-center items-center bg-zinc-500/50 " >
                        <div class="hea  w-max gap-[5px] text-white  flex">
                                 <i class="ri-heart-3-fill  text-3xl"></i><span class="text-xl font-light">${Math.floor(1000+ Math.random()*10000)}</span>

                         </div>
                              <div class="comm  w-max gap-[5px] text-white  flex">
                                 <i class="ri-chat-3-fill text-3xl "></i><span class="text-xl font-light ml-2">${Math.floor(Math.random()*1000)}</span>

                                </div>
                        </div>
                
                    </div>
                `;
            } else if ((i - 2) % 5 == 0 || (i - 3) % 5 == 0) {
                // Second and third images in the group
                dat += `
                    <div class="random relative bg-blue-500 w-[calc(33.33% - 0.6rem)] border-2 border-collapse border-black h-[350px] overflow-hidden">
                        <img src="${randomImage}" class="w-full z-10 h-full absolute object-cover object-center" alt="">
                        <div class="det z-0  absolute w-full h-full flex gap-[20px] justify-center items-center bg-zinc-500/50 " >
    <div class="hea  w-max gap-[5px] text-white  flex">
        <i class="ri-heart-3-fill  text-3xl"></i><span class="text-xl font-light">${Math.floor(1000+ Math.random()*10000)}</span>

    </div>
    <div class="comm  w-max gap-[5px] text-white  flex">
        <i class="ri-chat-3-fill text-3xl "></i><span class="text-xl font-light ml-2">${Math.floor(Math.random()*1000)}</span>

    </div>
</div>
                    </div>
                `;
            } else {
                // First, fourth, and fifth images in the group
                dat += `
                    <div class="random relative bg-blue-500 w-[calc(33.33% - 0.5rem)] border-2 border-collapse border-black h-[350px] overflow-hidden">
                        <img src="${randomImage}" class="w-full z-10 h-full absolute object-cover object-center" alt="">
                        <div class="det z-0  absolute w-full h-full flex gap-[20px] justify-center items-center bg-zinc-500/50 " >
    <div class="hea  w-max gap-[5px] text-white  flex">
        <i class="ri-heart-3-fill  text-3xl"></i><span class="text-xl font-light">${Math.floor(1000+ Math.random()*10000)}</span>

    </div>
    <div class="comm  w-max gap-[5px] text-white  flex">
        <i class="ri-chat-3-fill text-3xl "></i><span class="text-xl font-light ml-2">${Math.floor(Math.random()*1000)}</span>

    </div>
</div>
                    </div>
                `;
            }
        } else {
            if ((i - 2) % 5 == 0 || (i - 3) % 5 == 0) {
                // Second and third images in the group
                dat += `
                    <div class="random relative bg-blue-500 w-[calc(33.33% - 0.6rem)] border-2 border-collapse border-r-4 row-span-2 border-black h-[700px] overflow-hidden">
                        <img src="${randomImage}" class="w-full z-10 h-full absolute object-cover object-center" alt="">

                        <div class="det z-0  absolute w-full h-full flex gap-[20px] justify-center items-center bg-zinc-500/50 " >
                        <div class="hea  w-max gap-[5px] text-white  flex">
                                 <i class="ri-heart-3-fill  text-3xl"></i><span class="text-xl font-light">${Math.floor(1000+ Math.random()*10000)}</span>

                         </div>
                              <div class="comm  w-max gap-[5px] text-white  flex">
                                 <i class="ri-chat-3-fill text-3xl "></i><span class="text-xl font-light ml-2">${Math.floor(Math.random()*1000)}</span>

                                </div>
                        </div>
                
                    </div>
                `;
            } else {
                // First, fourth, and fifth images in the group
                dat += `
                    <div class="random relative bg-blue-500 w-[calc(33.33% - 0.5rem)] border-2 border-collapse border-black h-[350px] overflow-hidden">
                        <img src="${randomImage}" class="w-full z-10 absolute h-full object-cover object-center" alt="">
                        <div class="det z-0  absolute w-full h-full flex gap-[20px] justify-center items-center bg-zinc-500/50 " >
                            <div class="hea  w-max gap-[5px] text-white  flex">
                                     <i class="ri-heart-3-fill  text-3xl"></i><span class="text-xl font-light">${Math.floor(1000+ Math.random()*10000)}</span>

                             </div>
                                  <div class="comm  w-max gap-[5px] text-white  flex">
                                     <i class="ri-chat-3-fill text-3xl "></i><span class="text-xl font-light ml-2">${Math.floor(Math.random()*1000)}</span>

                                    </div>
                            </div>
                    </div>
                `;
            }
        }

        currentIndex++;
        if (currentIndex >= shuffledImages.length) {
            currentIndex = 0; // Reset index to 0 if end is reached
        }
    }

    postSection.innerHTML += dat;
})();

const det = document.querySelectorAll(".random img");
const det2 = document.querySelectorAll(".det");

det.forEach((val) => {
    val.addEventListener("mouseenter", () => {
        val.style.zIndex = "0"; // Set zIndex on each individual img element
    });
});

det2.forEach((val) => {
    val.addEventListener("mouseout", () => {
        det.forEach((imgElement) => {
            imgElement.style.zIndex = "10"; // Set zIndex on each individual img element
        });
        val.style.zIndex = "0"; // Set zIndex on the .det element
    });
});


