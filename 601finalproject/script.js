Vue.component('carousel', {
    props: {
        images: Array
    },
    template: `
        <div class="carousel">
            <div class="carousel-images">
            <div class="carousel-image" v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Carousel Image">
            </div>
            </div>
        </div>
    `
});

new Vue({
    el: '#carousel-app',
    data: {
        carouselImages: [
            'images/gallery/1.png',
            'images/gallery/2.png',
            'images/gallery/3.png',
            'images/gallery/4.png',
            'images/gallery/5.png',
            'images/gallery/6.png'
        ]
    }
});


Vue.createApp({
    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            subject: '',
            message: '',
            isValidForm: true,
            errorMessage: ''
        };
    },
    methods: {
        validateForm() {
            this.isValidForm = true;
            this.errorMessage = '';
    
            if (!this.fname || !this.lname || !this.email || !this.subject || !this.message) {
            this.isValidForm = false;
            return;
            }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            this.isValidForm = false;
            return;
            }
        },
        submitForm() {
            this.validateForm();
            if (this.isValidForm) {
            const mailtoLink = `mailto:redirectlauren@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
            window.location.href = mailtoLink;
            } else {
            this.errorMessage = 'Please fill in all required fields and provide a valid email address.';
            }
        }
    }
}).mount('#app');
