const slider = document.querySelector(".s-slider")
class Slider {
    constructor(elem) {
        this.slider = elem
        this.currentSlide = 0
        this.duration = 1000
        this.isAnimated = false
    }

    initNav() {
        this.arrowRight = this.slider.querySelector(".arrow-right")
        this.arrowLeft = this.slider.querySelector(".arrow-left")
        this.arrowLeft.addEventListener('click', e => {
            if (!this.isAnimated) {
                this.prevSlide()
                this.isAnimated = true
                setTimeout(() => {
                    this.isAnimated = false
                }, this.duration)
            }
        })
        this.arrowRight.addEventListener('click', e => {
            if (!this.isAnimated) {
                this.nextSlide()
                this.isAnimated = true
                setTimeout(() => {
                    this.isAnimated = false
                }, this.duration)
            }

        })
        this.dots = this.slider.querySelector(".s-slider__dots").children
        this.dots[this.currentSlide].classList.toggle("active")
        for (let dot = 0; dot < this.dots.length; dot++) {
            this.dots[dot].addEventListener('click', e => {
                this.goTo(dot)
            })


        }
    }
    currentDot(from, to) {
        this.dots.item(from).classList.toggle("active")
        this.dots.item(to).classList.toggle("active")
    }
    goTo(index) {
        if (index != this.currentSlide && !this.isAnimated) {
            this.slides[this.currentSlide].classList.toggle("active-slide")
            this.currentDot(this.currentSlide, index)

            if (this.currentSlide < index) {
                this.animateForward(this.currentSlide, index, false)
                this.isAnimated = true
                setTimeout(() => {
                    this.isAnimated = false
                }, this.duration);

            } else {
                this.animateBackwards(this.currentSlide, index, false)
                this.isAnimated = true
                setTimeout(() => {
                    this.isAnimated = false
                }, this.duration);
            }
            this.currentSlide = index
            this.slides[this.currentSlide].classList.toggle("active-slide")
        }

    }

    animateForward(cur, next, dots) {
        if (dots) {
            this.currentDot(cur, next)
        }
        this.slides[cur].animate([
            { transform: 'translatex(0)' },
            { transform: 'translatex(-100%)' }],
            { duration: this.duration, easing: "ease-out", fill: "forwards" }
        )
        this.slides[next].animate([
            { transform: 'translatex(100%)' },
            { transform: 'translatex(0)' }],
            { duration: this.duration, easing: "ease-out", fill: "forwards" }
        )
    }
    animateBackwards(cur, prev, dots) {
        if (dots) {
            this.currentDot(cur, next)
        }
        this.slides[cur].animate([
            { transform: 'translatex(0)' },
            { transform: 'translatex(100%)' }],
            { duration: this.duration, easing: "ease-out", fill: "forwards" }
        )
        this.slides[prev].animate([
            { transform: 'translatex(-100%)' },
            { transform: 'translatex(0)' }],
            { duration: this.duration, easing: "ease-out", fill: "forwards" }
        )
    }
    prevSlide() {
        if (this.currentSlide != 0) {
            this.animateBackwards(this.currentSlide, this.currentSlide - 1, true)
            this.slides[this.currentSlide].classList.toggle("active-slide")
            this.currentSlide--

            this.slides[this.currentSlide].classList.toggle("active-slide")

        } else {
            this.animateBackwards(this.currentSlide, this.slides.length - 1, true)
            this.slides[this.currentSlide].classList.toggle("active-slide")
            this.currentSlide = this.slides.length - 1
            this.slides[this.currentSlide].classList.toggle("active-slide")
        }
    }

    nextSlide() {
        if (this.currentSlide != this.slides.length - 1) {
            this.animateForward(this.currentSlide, this.currentSlide + 1, true)
            this.slides[this.currentSlide].classList.toggle("active-slide")
            this.currentSlide += 1
            this.slides[this.currentSlide].classList.toggle("active-slide")
        } else {
            this.animateForward(this.currentSlide, 0, true)
            this.slides[this.currentSlide].classList.toggle("active-slide")
            this.currentSlide = 0
            this.slides[this.currentSlide].classList.toggle("active-slide")

        }
    }

    initSlider() {
        this.slider.innerHTML = `
            <div class="s-slider__arrow arrow-left">
                <div class="arrow"></div>
            </div>
            <div class="s-slider-slides">
                ${this.slider.innerHTML}
            </div>
            <div class="s-slider__arrow arrow-right">
                <div class="arrow"></div>
            </div>
        `
        this.slides = this.slider.querySelector(".s-slider-slides").children
        this.slider.innerHTML = `
            ${this.slider.innerHTML}
            <div class="s-slider__dots">
                ${'<div class="s-slider__dots__item"></div>'.repeat(this.slides.length)}
            </div>
        `
        this.slides = this.slider.querySelector(".s-slider-slides").children
        this.slides[this.currentSlide].classList.toggle("active-slide")
        this.initNav()
    }

}

const SSlider = new Slider(slider)
SSlider.initSlider()