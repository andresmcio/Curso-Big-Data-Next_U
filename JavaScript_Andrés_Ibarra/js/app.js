var calculadora = {
    init: function () {
        pantalla = $('#display');
        calculadora.btn_press();
        resultado = 0;
        mostrar = 1; // valor en 1 para permitir escritura de un nuevo número, 0 indica que se continúa la escritura de un número
        coma = 0; //Para evitar la escritura doble de la coma
        primer_operando = 0;
        op = "no"; //Para indicar operaciones pendientes

        $('#on').click(function () {
            calculadora.on_btn();
        });
        $('#sign').click(function () {
            calculadora.neg();
        });
        $('#raiz').click(function () {
            calculadora.raizc();
        });
        $('#dividido').click(function () {
            calculadora.operar('/');
        });
        $('#7').click(function () {
            calculadora.num_input('7');
        });
        $('#8').click(function () {
            calculadora.num_input('8');
        });
        $('#9').click(function () {
            calculadora.num_input('9');
        });
        $('#por').click(function () {
            calculadora.operar('*');
        });
        $('#4').click(function () {
            calculadora.num_input('4');
        });
        $('#5').click(function () {
            calculadora.num_input('5');
        });
        $('#6').click(function () {
            calculadora.num_input('6');
        });
        $('#menos').click(function () {
            calculadora.operar('-');
        });
        $('#1').click(function () {
            calculadora.num_input('1');
        });
        $('#2').click(function () {
            calculadora.num_input('2');
        });
        $('#3').click(function () {
            calculadora.num_input('3');
        });
        $('#0').click(function () {
            calculadora.num_input('0');
        });
        $('#punto').click(function () {
            calculadora.num_input('.');
        });
        $('#igual').click(function () {
            calculadora.igualar();
        });
        $('#mas').click(function () {
            calculadora.operar('+');
        });
    },

    num_input: function (num) {
        if (resultado == "0" || mostrar == 1) {
            pantalla.html(num);
            resultado = num;
            if (num == ".") {
                pantalla.html("0.");
                resultado = num;
                coma = 1;
            }
        } else if (resultado.length <= 7) {
            if (num == "." && coma == 0) {
                pantalla.append(num);
                resultado += num;
                coma = 1;
            } else if (num == "." && coma == 1) {

            } else {
                pantalla.append(num);
                resultado += num;
            }
        }
        mostrar = 0;
    },

    btn_press: function () {
        $('.tecla').click(function () {
            $(this).css('transform', 'scale(0.93)');
        });

        $('.tecla').mouseout(function () {
            $(this).css('transform', 'scale(1)');
        })
    },

    operar: function (signo) {
        primer_operando = resultado;
        op = signo;
        mostrar = 1;
        pantalla.html("");
    },

    igualar: function () {
        if (op == "no") {
            pantalla.html(resultado);
        } else {
            ecuacion = primer_operando + op + resultado;
            resolver = eval(ecuacion);
            resolver_str = String(resolver);
            if (resolver_str.length <= 7) {
                pantalla.html(resolver);
                resultado = resolver;
            } else {
                resolver_str = resolver_str.substring(0, 8);
                resolver = Number(resolver_str);
                pantalla.html(resolver);
                resultado = resolver;
            }
            op = "no";
            mostrar = 1;
        }
    },

    raizc: function () {
        resultado = Math.sqrt(resultado);
        resultado_str = String(resultado);
        if (resultado_str.length <= 7) {
            pantalla.html(resultado);
        } else {
            resultado_str = resultado_str.substring(0, 8);
            resultado = Number(resultado_str);
            pantalla.html(resultado);
        }
        op = "no";
        mostrar = 1;
    },

    neg: function () {
        neg_num = Number(resultado);
        neg_num = -neg_num;
        resultado = String(neg_num);
        pantalla.html(resultado);
        mostrar = 1;
    },

    on_btn: function () {
        pantalla.html(0);
        resultado = 0;
        coma = 0;
        primer_operando = 0;
        op = "no";
    }
}

$(document).ready(function () {
    calculadora.init();
});