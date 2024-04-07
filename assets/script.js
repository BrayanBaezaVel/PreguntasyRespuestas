class Pregunta {
    constructor(enunciado, opciones, respuestaCorrecta) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}

let pregunta1 = new Pregunta("¿Cuál es la capital de Francia?", ["a) Paris", "b) Bogotá", "c) Londres", "d) Barcelona"], "a");
let pregunta2 = new Pregunta("¿Cuál es la mitad de 2 + 1?", ["a) 3", "b) 1.5", "c) 1", "d) 2"], "d");
let pregunta3 = new Pregunta("¿Quién escribió Romeo y Julieta?", ["a) Charles Dickens", "b) William Shakespeare", "c) Jane Austen", "d) Mark Twain"], "b");
let pregunta4 = new Pregunta("¿Cuál es la fórmula química del agua?", ["a) H", "b) O2", "c) H2o", "d) CO2"], "c");

class JuegoPreguntas {
    constructor(preguntas, puntuacion, preguntaActual) {
        this.preguntas = preguntas;
        this.puntuacion = puntuacion;
        this.preguntaActual = preguntaActual;
    }

    obtenerPreguntaActual() {
        let preguntaActual = this.preguntas[this.preguntaActual];
        document.getElementById("pregunta").innerHTML = preguntaActual.enunciado;

        let opciones = '';
        preguntaActual.opciones.forEach(opcion => {
            opciones += `<p>${opcion}</p>`;
        });
        document.getElementById("opciones").innerHTML = opciones;
        return preguntaActual;
    }

    actualizarPuntuacion() {
        document.getElementById("score").innerHTML = "Puntuación: " + this.puntuacion;
    }

    obtenerRespuesta() {
        let that = this;
        // let respuesta = document.getElementById("respuesta").value;
        // let preguntaActual = that.obtenerPreguntaActual();
        document.getElementById("validar").addEventListener("click", function () {
            let respuesta = document.getElementById("respuesta").value;
            let preguntaActual = that.obtenerPreguntaActual();
            console.log(preguntaActual);
            console.log(preguntaActual.respuestaCorrecta);
            document.getElementById("respuesta").value = "";
            let resultado = document.getElementById("resultado")
            if (preguntaActual.respuestaCorrecta === respuesta) {
                let resultado = ("Respuesta Correcta");
                document.getElementById("resultado").innerText = resultado;
                console.log(resultado);
                that.puntuacion += 100;
                console.log("Puntuación actual: " + that.puntuacion);
            } else {
                let resultado = ("Respuesta Incorrecta");
                document.getElementById("resultado").innerText = resultado;
                console.log("Respuesta incorrecta");
                console.log("Puntuación actual: " + that.puntuacion);
            }
            that.actualizarPuntuacion();
        })
        document.getElementById("avanzar").addEventListener("click", function () {
            if (that.preguntaActual < that.preguntas.length - 1) {
                that.preguntaActual++;
                that.obtenerPreguntaActual();
            } else {
                document.getElementById("fin-juego").style.display = "block";
                console.log('Fin del juego');
            }

        })




    };
}

let juegoPreguntas = new JuegoPreguntas([pregunta1, pregunta2, pregunta3, pregunta4], 0, 0);
juegoPreguntas.obtenerPreguntaActual();
juegoPreguntas.obtenerRespuesta();
juegoPreguntas.actualizarPuntuacion();
