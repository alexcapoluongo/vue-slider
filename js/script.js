const app = new Vue (
    {
        el: '#root',

        data: {

            itemList: [
                {
                    image: 'img/01.jpg',
                    name: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/02.jpg',
                    name: 'Svizzera',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/03.jpg',
                    name: 'United Kingdom',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    name: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/05.jpg',
                    name: 'Paradise',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                }       
            ],

            activeIndex: 0,
            timer: null
        },

        methods: {
          
            
            previousImg: function() {

                if(this.activeIndex == 0) {
                    this.activeIndex = this.itemList.length - 1;
                } else {
                    this.activeIndex--;
                }              
            },

            nextImg: function() {
                if(this.activeIndex == this.itemList.length - 1) {
                    this.activeIndex = 0;
                } else {
                    this.activeIndex++;
                }
            },

            showImage : function(index) {
                this.activeIndex = index;
            },   

            stopTimer: function() {
                clearInterval(this.timer);
                this.timer = null
            },

            startTimer: function() {

            },
        },
        //tra le funzioni create con created richiamo la funzione e ci setto un set interval
        created() {
            setInterval(() => {
                this.nextImg();
            },3000)
        }
    }
)

// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente

// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce