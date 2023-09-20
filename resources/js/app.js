import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const dropzone = new Dropzone("#dropzone", {
    dictDefaultMessage: "Sube aqui tu imagen",
    acceptedFiles: ".png,.jpg,.jpeg,.gif",
    addRemoveLinks: true,
    dictRemoveFile: "Borrar Archivo",
    maxFiles: 1,
    uploadMultiple: false,

    init: function () {
        if (document.querySelector('[name="imagen"]').value.trim()) {
            const imagenPulicada = {};
            imagenPulicada["size"] = 1234;
            imagenPulicada = document.querySelector('[name="imagen"]').value;

            this.options.addedfile.call(this, imagenPulicada);
            this.options.thumbnail.call(
                this,
                imagenPulicada,
                "/uploads/${imagenPublicada.name}"
            );

            imagenPulicada.previewElement.classList.add(
                "dz-success",
                "dz-complete"
            );
        }
    },
});

/* dropzone.on("sending", function (file, xhr, forData) {
    console.log(forData);
}); */

dropzone.on("success", function (file, response) {
    document.querySelector('[name="imagen"]').value = response.imagen;
});

dropzone.on("removedfile", function () {
    document.querySelector('[name="imagen"]').value = "";
});

// dropzone.on("error", function (file, message) {
//     console.log(message);
// });

dropzone.on("removedfile", function () {});
