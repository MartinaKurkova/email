const goodbye = (name) => {
    const closingEl = document.querySelector(".email__closing");

    closingEl.textContent = `S pozdravem ${name}`;
}

goodbye("Pavel Ovesný");

const fillSubject = (subject) => {
    const subjectEl = document.querySelector(".email__subject");
    subjectEl.textContent = `${subject}`;
}

fillSubject("junior frontend vývojářka");

const fillBody = (body, name) => {
    const bodyEl = document.querySelector(".email__body");
    bodyEl.textContent = `${body}`;
    goodbye("Pavel Ovesný")
}

fillBody("odpovídám na váš inzerát ohledně nabídky práce.");