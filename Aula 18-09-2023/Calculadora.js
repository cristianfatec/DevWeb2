const {createApp}=Vue;
createApp({
    data(){
        return{
            display:"0",
            numeroAtual:null,
            numeroAnterior:null,
            operador:null
        }
    },
    methods:{
        handleButton(button){
            //console.log(button)
            switch(button) {
                case "+":
                    case "-":
                    case "*":
                    case "/":
                        this.lidarOperador(button);
                        break;
                    case"=":
                        this.lidarIgual(button);
                        break;
                    case".":
                        this.lidarDecimal(button);
                        break;
                    default:
                        this.lidarNumeros(button);
                        break;
            }
           
        },

        lidarNumeros(numero){
            if(this.display===0){
    
            } else {
                this.display += numero.toString()
            }
        }
    }
}).mount('#app')