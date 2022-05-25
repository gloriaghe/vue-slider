var myApp= new Vue ({
    el: "#app",
    data:{
        activeSlide: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },
    
    mounted() {
        setInterval(this.autoplay,3000);

    },

    methods: {
        prevSlide(){
            this.activeSlide--;
            if (this.activeSlide < 0){
                this.activeSlide = this.slides.length - 1;
            }
        },

        nextSlide(){
            this.activeSlide++;
            if (this.activeSlide > this.slides.length -1) {
                this.activeSlide = 0;
            }
        },

        activeClick(slideAttiva){
            this.activeSlide = slideAttiva;
        },
        
        autoplay(){
            this.activeSlide++
            if (this.activeSlide > this.slides.length -1){
                this.activeSlide = 0;

            }
        }
        
    }
    
});




