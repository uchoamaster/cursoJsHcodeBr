class CalcController {

        constructor(){

            //poderia ter iniciado com var de variavel mas como iremos utilizar em todos os locais do aplicativo calculadora, é interessante utilizar o this, que ele manipula metodos e atributos 
            //quando está com este _ underline na frente do atributo significa que ele está como private então não poderá ser acessado
            //aqui consigo selecionar os campos selecionados pelos determinados id no caso id display, data e hora.
            this._locale = 'pt-BR';
            this._displayCalcEl =  document.querySelector("#display");
            this._dateEl =  document.querySelector("#data");
            this._timeEl = document.querySelector("#hora");
            this._currentDate;
            this.initialize();
        }
        //metodo que iremos utilizar para quando eu quiser que aconteça algo ele inicialize automaticamente ou com uma ação
        initialize(){   
            //aqui com este atributo innerHTML ele pede para por a informação dentro do html no campo que foi selecionado
       
        //    this._dateEl.innerHTML = ("12/01/2022");
        //    this._timeEl.innerHTML = ("15:09");
        setInterval(function(){

            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

        }.bind(this),1000);
        }

//toda vez que eu criar um atributo privado seja no construtor ou em outro metodo, ele precisa de como será retirado e mostrado ou seja get e set dele senão nao funciona
        get displayTime(){
            return this._timeEl.innerHTML;
        }

        set displayTime(value){
             this._timeEl.innerHTML = value;
        }
        
        get displayDate(){
            return this._dateEl.innerHTML;
        }

        set displayDate(value){
             this._dateEl.innerHTML = value;
        }

        get displayCalc(){
            return this._displayCalcEl.innerHTML;
        }

        set displayCalc(value){
            this._displayCalcEl.innerHTML = value;
        }

        get currentDate(){
            return this._currentDate;
        }

        set currentDate(value){
            this._currentDate = value;
        }

}