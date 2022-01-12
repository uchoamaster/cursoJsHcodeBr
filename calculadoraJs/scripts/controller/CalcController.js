class CalcController {

        constructor(){
            //poderia ter iniciado com var de variavel mas como iremos utilizar em todos os locais do aplicativo calculadora, � interessante utilizar o this, que ele manipula metodos e atributos 
            //quando est� com este _ underline na frente do atributo significa que ele est� como private ent�o n�o poder� ser acessado
            this._displayCalc = "0";
            this._currentDate;
            this.initialize();
        }
        //metodo que iremos utilizar para quando eu quiser que aconte�a algo ele inicialize automaticamente ou com uma a��o
        initialize(){   
            //aqui consigo selecionar os campos selecionados pelos determinados id no caso id display, data e hora.
           let displayCalEl =  document.querySelector("#display");
           let dateEl =  document.querySelector("#data");
           let timeEl = document.querySelector("#hora");
            //aqui com este atributo innerHTML ele pede para por a informa��o dentro do html no campo que foi selecionado
           displayCalEl.innerHTML = ("4567");
           dateEl.innerHTML = ("12/01/2022");
           timeEl.innerHTML = ("15:09");
        }

//toda vez que eu criar um atributo privado seja no construtor ou em outro metodo, ele precisa de como ser� retirado e mostrado ou seja get e set dele sen�o nao funciona
        get displayCalc(){
            return this._displayCalc;
        }

        set displayCalc(valor){
            this._displayCalc = valor;
        }

        get currentDate(){
            return this._currentDate;
        }

        set currentDate(valor){
            this._currentDate = valor;
        }

}