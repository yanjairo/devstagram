import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const dropzone = new Dropzone("#dropzone", {
    dictDefaultMessage: "Sube aqui tu imagen",
    acceptedFiles: ".png,.jpg,.jpeg,.gif",
    addRemoveLinks: "Borrar Archivo",
    maxFiles:1,
    uploadMultiple:false,
});

/* dropzone.on("sending", function (file, xhr, forData) {
    console.log(forData);
}); */

dropzone.on("succes", function (file, response) {

    document.querySelector('[name="imagen"]').value = response.imagen;
});

// dropzone.on("error", function (file, message) {
//     console.log(message);
// });

dropzone.on("removedfile", function () {});