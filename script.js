let valorAtual = '';
let valorAnterior = ''; 
let operador = '';

function adicionarNumero(numero) { 
    valorAtual += numero;
    atualizarDisplay();
}

function definirOperacao(op) {
    if (valorAtual === '') return;
    if (valorAnterior !== '') { 
        calcularResultado();
    }
    operador = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

function calcularResultado() {
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);

    if (isNaN(anterior) || isNaN(atual)) return;

    switch (operador) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }
    valorAtual = resultado.toString();
    operador = '';
    valorAnterior = '';
    atualizarDisplay();
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('display').value =
        valorAnterior + (operador ? ' ' + operador + ' ' : '') + valorAtual;
}