const postSection = document.querySelector(".postDis");
// const img = [
//     {
//       "img":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1714426533669-656bbfa37cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1714385998351-341d070aa79e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//       "img":"https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//     },
//     {
//         "img":"https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       },
//       {
//         "img":"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       },
//       {
//         "img":"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       },
//       {
//         "img":"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       },
//       {
//         "img":"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       },
//       {
//         "img":"https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       }
//       ,{
//         "img":"https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       },
//       {
//         "img":"https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1714182370392-a32d43080717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1714523479594-13c0bb72fcf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1713746834234-d2af42bb1b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1711881027254-e9ff3234d9d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1714475203443-ae9bedc7eae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"
//       }
//       ,
//       {
//         "img":"https://images.unsplash.com/photo-1714396533346-6612f8f2c5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
//       }
  
  
//   ];
  

import img from "./data.js"

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
          
            if ((i - 2) % 5 == 0 || (i - 3) % 5 == 0) {
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

/* <div class="random relative bg-blue-500 w-[calc(33.33% - 0.6rem)] border-2 border-collapse border-r-4  border-black h-[350px] overflow-hidden">
<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
class="w-full z-10 absolute  h-full object-cover object-center" alt="">

<div class="det z-0  absolute w-full h-full flex gap-[20px] justify-center items-center bg-zinc-500/50 " >
    <div class="hea  w-max gap-[5px] text-white  flex">
        <i class="ri-heart-3-fill  text-3xl"></i><span class="text-xl font-light">0</span>

    </div>
    <div class="comm  w-max gap-[5px] text-white  flex">
        <i class="ri-chat-3-fill text-3xl "></i><span class="text-xl font-light ml-2">0</span>

    </div>
</div>
</div> */
