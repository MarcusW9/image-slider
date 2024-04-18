// import _ from "lodash";
import "./style.css";
import img1 from './images/bailey-zindel-NRQV-hBF10M-unsplash.jpg';
import img2 from './images/mark-harpur-K2s_YE031CA-unsplash.jpg';
import img3 from './images/pine-watt-2Hzmz15wGik-unsplash.jpg';

let imageNumber = 0;

const updateActiveImage = (number) => {
    document.querySelectorAll(".active").forEach((activeElement) => activeElement.classList.remove("active"))
    document.querySelectorAll(".image")[number].classList.add("active");

    document.querySelectorAll(".navigation-dot")[number].classList.add("active");
}

const scrollUp = () => {
    if (imageNumber >= 2) {
        imageNumber = 0
    } else {
        imageNumber += 1
    }
}

document.querySelectorAll(".slider-button").forEach((sliderButton) => {
    if (sliderButton.classList.contains("slider-left")) {
            sliderButton.addEventListener(("click"), () => {
                if (imageNumber <= 0) {
                    imageNumber = 2
                } else {
                    imageNumber -= 1
                }
            updateActiveImage(imageNumber);
        }) 
    }
    
    if (sliderButton.classList.contains("slider-right")) {
            sliderButton.addEventListener(("click"), () => {
            scrollUp()
            updateActiveImage(imageNumber);
        }) 
    }
})

// Navigation dot buttons
document.querySelectorAll(".navigation-button").forEach((navigationButton, index) => {
    navigationButton.addEventListener("click", () => {
        imageNumber = index
        updateActiveImage(index)
    })
})

// Automatic scrolling
setInterval(() => {
    scrollUp()
    updateActiveImage(imageNumber)
}, 5000)