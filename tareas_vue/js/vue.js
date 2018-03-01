new Vue({
    el: "#taskApp",
    data: {
        nameApp: "Tareas Vue js",
        tareas: [{
                titulo: "tarea 1",
                hecho: true
            },
            {
                titulo: "tarea 2",
                hecho: false
            },
            {
                titulo: "tarea 3",
                hecho: false
            }
        ]
    },
    methods: {
        eliminarTarea: function(tarea) {
            this.tareas.splice(this.tareas.indexOf(tarea), 1)
        },
        agregarTarea: function(e) {
            e.preventDefault();
            this.tareas.push({
                titulo: this.tareas.titulo,
                hecho: false
            });
            this.tareas.titulo = ' '
        }
    }
});