new Vue({
    el: '#crud',
    created: function() {
        this.getKeeps();
    },
    data: {
        keeps: [],
        newKeep: '',
        fillKeep: { 'id': '', 'keep': '' },
        errors: '',
    },
    methods: {
        getKeeps: function() {
            urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        editKeep: function(keep) {
            this.fillKeep.id = keep.id;
            this.fillKeep.keep = keep.keep;

            $('#edit').modal('show');

        },
        updateKeep: function(id) {
            var url = 'tasks/' + id;
            axios.put(url, this.fillKeep).then(response => {
                this.getKeeps();
                this.fillKeep = { 'id': '', 'keep': '' };
                this.errors = [];
                $('#edit').modal('hide');
                toastr.success('Tarea Actualizada con exito');
            }).catch(error => {
                this.errors = 'Corrija para poder actualizar con exito'
            });
        },
        deleteKeep: function(keep) {
            var url = 'tasks/' + keep.id;
            axios.delete(url).then(response => { //eliminamos
                this.getKeeps(); //listamos
                toastr.success('Eliminado Correctamente'); //confirmamos
            });
        },
        createKeep: function() {
            var url = "tasks";
            axios.post(url, {
                keep: this.newKeep
            }).then(response => {
                this.getKeeps();
                this.newKeep = '';
                this.errors = [];
                $('#create').modal('hide');
                toastr.success('Nueva Tarea Creada con Exito.');
            }).catch(error => {
                this.errors = 'Corrija para poder crear con exito'
            });
        }
    }

});