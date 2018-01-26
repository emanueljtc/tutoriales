new Vue({
    el: '#crud',
    created: function() {
        this.getKeeps();
    },
    data: {
        keeps: [],
        newKeep: '',
        errors: '',
    },
    methods: {
        getKeeps: function() {
            urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
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