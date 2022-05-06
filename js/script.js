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

            activeElem: true,
            currentSlide: 0,
        },

        methods: {
            isActive: function() {
                for (let i = 0; i < data.itemList.length; i++){
                    // aggiungiamo la classe active alla prima slide 
                    if ((i == 0) ? this.activeElem = true : this.activeElem = false);
                }
                
            },

            
            previousImg: function() {
               
                console.log('prev');
            },

            nextImg: function() {
               
                console.log('next');
            }
        }
    }
    
)