class Pregunta {
    constructor(enunciado, opciones, respuestaCorrecta) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}

let pregunta1 = new Pregunta("¿Cuál es la capital de Francia?", ["Paris", "Bogotá", "Londres", "Barcelona"], "Paris");
let pregunta2 = new Pregunta("¿Cuál es la mitad de 2 + 1?", ["3", "1.5", "1", "2"], "2");
let pregunta3 = new Pregunta("¿Quién escribió Romeo y Julieta?", ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], "William Shakespeare");
let pregunta4 = new Pregunta("¿Cuál es la fórmula química del agua?", ["H", "O2", "H2o", "CO2"], "H2o");

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
        document.getElementById("avanzar").addEventListener("click", function () {
            let respuesta = document.getElementById("respuesta").value;
            let preguntaActual = that.obtenerPreguntaActual();
            console.log(preguntaActual);
            console.log(preguntaActual.respuestaCorrecta);
            document.getElementById("respuesta").value = "";
            if (preguntaActual.respuestaCorrecta === respuesta) {
                console.log("¡Respuesta correcta!");
                that.puntuacion += 100;
                console.log("Puntuación actual: " + that.puntuacion);
            } else {
                console.log("Respuesta incorrecta");
                console.log("Puntuación actual: " + that.puntuacion);
            }

            that.actualizarPuntuacion();

            if (that.preguntaActual < that.preguntas.length - 1) {
                that.preguntaActual++;
                that.obtenerPreguntaActual();
            } else {
                document.getElementById("fin-juego").style.display = "block";
                console.log('Fin del juego');
            }
        });
    }
}

let juegoPreguntas = new JuegoPreguntas([pregunta1, pregunta2, pregunta3, pregunta4], 0, 0);
juegoPreguntas.obtenerPreguntaActual();
juegoPreguntas.obtenerRespuesta();
juegoPreguntas.actualizarPuntuacion();
