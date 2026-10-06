const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            name: 'John Doe',
            personAge: 0,
            skjulliste: false,
            liste:[1,2,3,4,5],
            listenavne:[{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}]    
        }
    },
    methods: {
        myMethod(){

        },
        add(){
            this.liste.push(this.name);
        },
        addPerson(){
            this.listenavne.push({
                name: this.name,
                age: this.personAge
            });
        },
        skjul(){
            this.skjulliste=!this.skjulliste;

        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
