const formatarDigito = (digito)=> `0${digito}`.slice(-2)

const atualizar = (tempo) => {
    const day = document.querySelector(".day-label");
    const hours = document.querySelector(".hours-label");
    const minutes = document.querySelector(".minutes-label");
    const seconds = document.querySelector(".seconds-label")

    const qtSegundos = tempo % 60;
    const qtMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtDias = Math.floor(tempo /  (60 * 60 * 24));

    day.textContent = formatarDigito(qtDias)
    hours.textContent = formatarDigito(qtHoras);
    minutes.textContent = formatarDigito(qtMinutos);
    seconds.textContent = formatarDigito(qtSegundos)

}

//contador regressivo
const contagemRegressiva = (tempo) => {

    //parar Contagem
    const pararContagem = () => clearInterval(id);

    //contar
    const contar = () => {
        if(tempo === 0) {
            pararContagem()
        }

        atualizar(tempo)
        tempo--;
    }
    const id = setInterval(contar, 1000)
}

contagemRegressiva(777600)


