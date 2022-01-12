class CalcController {

        constructor(){
            //poderia ter iniciado com var de variavel mas como iremos utilizar em todos os locais do aplicativo calculadora, é interessante utilizar o this, que ele manipula metodos e atributos 
            //quando está com este _ underline na frente do atributo significa que ele está como private então não poderá ser acessado
            this._displayCalc = "0";
            this._dataAtual;
        }
//toda vez que eu criar um atributo privado seja no construtor ou em outro metodo, ele precisa de como será retirado e mostrado ou seja get e set dele senão nao funciona
        get displayCalc(){
            return this._displayCalc;
        }

        set displayCalc(valor){
            this._displayCalc = valor;
        }

        get dataAtual(){
            return this._dataAtual;
        }

        set dataAtual(valor){
            this._dataAtual = valor;
        }

}