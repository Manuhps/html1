window.onload = () => {
    const video = document.querySelector('video')
    const tema = document.querySelector("#tema").innerHTML
    let annotationsObjs = [
        {
            modulo: 'Elementos',
            frame: 53,
            pergunta: "É necessário fechar a tag &lt;p&gt?",
            resposta: "",
            respostaCerta: "sim",
        },
        {
            modulo: 'Elementos',
            frame: 159,
            pergunta: "As chamadas void tags podem conter algúm conteudo?",
            resposta: "",
            respostaCerta: "não",
        },
        {
            modulo: 'Elementos',
            frame: 423,
            pergunta: "&lt;h1&gtconteúdo&lt;/h1&gt.O que é o elemento?",
            resposta: "",
            respostaCerta: "conteúdo",
        },
        {
            modulo: 'Tabelas',
            frame: 45,
            pergunta: "O que significa tr?",
            resposta: "",
            respostaCerta: "table row",
        },
        {
            modulo: 'Tabelas',
            frame: 109,
            pergunta: "Quantas linhas tem a tabela?",
            resposta: "",
            respostaCerta: "2",
        },
        {
            modulo: 'Formulários',
            frame: 12,
            pergunta: "É necessário fechar a tag &lt;form&gt?",
            resposta: "",
            respostaCerta: "sim",
        },
        {
            modulo: 'Formulários',
            frame: 66,
            pergunta: "É uma boa prática definir o label e o input id com o mesmo nome?",
            resposta: "",
            respostaCerta: "sim",
        },
        {
            modulo: 'Formulários',
            frame: 97,
            pergunta: "Qual o melhor input para o nome de uma pessoa?",
            resposta: "",
            respostaCerta: "text",
        },
        {
            modulo: 'Media',
            frame: 29,
            pergunta: "Qual o atributo que vais buscar o url do vídeo?",
            resposta: "",
            respostaCerta: "src",
        },
        {
            modulo: 'Media',
            frame: 50,
            pergunta: "É obrigatorio uitlizar o atributo controls?",
            resposta: "",
            respostaCerta: "não",
        },
        {
            modulo: 'Media',
            frame: 26,
            pergunta: "A tag <img precisa de ser fechada?",
            resposta: "",
            respostaCerta: "não",
        },

    ];

    annotationsObjs=annotationsObjs.filter(obj => obj.modulo == tema)

    localStorage.setItem("annotations", JSON.stringify(annotationsObjs));

    video.addEventListener('timeupdate', () => {
        document.querySelector("#resposta").value = ""
        const annotation = annotationsObjs.find(
            (annotation) =>
                Math.trunc(video.currentTime) == annotation.frame &&
                annotation.resposta == "" && tema == annotation.modulo
        );

        if (annotation) {
            pergunta.innerHTML = annotation.pergunta;
            $("#mdPergunta").modal("show");
            video.pause();
            document.querySelector("#frmPergunta").addEventListener("submit", (event) => {
                event.preventDefault();
                const respostaUser = document.querySelector("#resposta").value;
                if (respostaUser == annotation.respostaCerta) {
                    displayMessage("msgResposta", "Resposta certa", "success");
                    setTimeout(() => {
                        $("#mdPergunta").modal("hide");
                    }, 1000);
                } else {
                    displayMessage("msgResposta", "Resposta errada", "danger");
                    setTimeout(() => {
                        $("#mdPergunta").modal("hide");
                    }, 1000);
                }

                annotation.resposta = respostaUser;
                video.play();
            });
        }
    })
}

function displayMessage(modal, message, type) {
    const divMessage = document.getElementById(modal);
    divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
    setTimeout(() => {
        divMessage.innerHTML = "";
    }, 2000);
}