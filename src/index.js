// import _ from "lodash";
import "./style.css";
import img1 from './images/bailey-zindel-NRQV-hBF10M-unsplash.jpg';
import img2 from './images/mark-harpur-K2s_YE031CA-unsplash.jpg';
import img3 from './images/pine-watt-2Hzmz15wGik-unsplash.jpg';

let number = 0;

function updateActiveImage() {
    document.querySelectorAll(".active").forEach((activeElement) => activeElement.classList.remove("active"))
    document.querySelectorAll(".image")[number].classList.add("active");

    document.querySelectorAll(".navigation-dot")[number].classList.add("active");
}

document.querySelectorAll(".slider-button").forEach((sliderButton) => {
    if (sliderButton.classList.contains("slider-left")) {
            sliderButton.addEventListener(("click"), () => {
                console.log("left")
                if (number <= 0) return
                    number -= 1
                    updateActiveImage();
        }) 
    }
    
    if (sliderButton.classList.contains("slider-right")) {
        sliderButton.addEventListener(("click"), () => {
            console.log("right")
            if (number >= 2) return
                number += 1
                updateActiveImage();
        }) 
    }
})



