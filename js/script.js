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
        },

        methods: {
            isActive: function() {
                for (let i = 0; i < this.itemList.length; i++){
                    // aggiungiamo la classe active alla prima slide 
                    // if ((i == 0) ? this.activeElem = true : this.activeElem = false);
                }            
            },

            
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
            }
        }
    }
    
)