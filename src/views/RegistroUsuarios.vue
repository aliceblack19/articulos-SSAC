<template>
    <main class="container">
        <form class="row justify-content-center vh-100" @submit.prevent="ingresarUsuario()" method="post">
            <div class="col-md-5 align-self-center">
                <div class="input-group mb-3 ">
                    <span class="input-group-text text-primary" id="basic-addon1">Documento:</span>
                    <input class="form-control" type="number" name="documento" id="documento" v-model="documento" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Nombres: </span>
                    <input class="form-control"  type="text" name="nombres" id="nombres" v-model="nombres" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Correo electronico: </span>
                    <input class="form-control"  type="email" name="email" id="email" v-model="email" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Password: </span>
                    <input class="form-control"  type="password" name="contrasenia" id="contrasenia" v-model="clave" required>
                </div>
                <div class="input-group mb-3">
                    <label for="rol" class="input-group-text text-primary" id="basic-addon1">Selecciona rol:</label>
                    <select name="rol" id="rol" class="form-select" v-model="rol" required>
                        <option v-for="rol in roles" :key="rol.id" :value="rol.id">{{rol.nombre}}</option>
                    </select>
                </div>
                <div class="alert alert-primary" role="alert" v-if="correcto">
                    Datos almacenados correctamente...
                </div>
                <div class="alert alert-danger" role="alert" v-if="error">
                    Datos no ingresados...
                </div>
            </div>
            <div class="col-md-3 align-self-center">
                <input type="submit" class="btn btn-primary mb-3 w-100" value="Guardar">
                <a class="btn btn-primary mb-3 w-100" href="xxxxxxxxx">Iniciar sesión</a>
            </div> 
        </form>
    </main>
</template>

<script>
export default {

    name: 'RegistroUsuarios',
    data(){
        return{
            correcto:false,
            error:false,
            documento:null,
            nombres:null,
            email:null,
            clave:null,
            rol:null,
            roles:[]
        }
    },
    mounted(){
        this.getrol();
    },
    methods:{
        getrol(){
            let http = new XMLHttpRequest();
            let self = this;
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let rols = JSON.parse(this.response);
                    self.roles = rols;
                    console.log(self.roles);
                }
            }
            http.open('GET',this.$store.state.rootpath+'articulosSsac_php/api/rol');
            http.send();
        },
        ingresarUsuario(){
            let http = new XMLHttpRequest();
            let self = this;
            http.onreadystatechange = function(){
                let respuesta = JSON.parse(this.response);
                    if(respuesta.state){
                        self.correcto = true;
                    }
                    else{
                        self.error = true;
                    }
                    console.log(respuesta);
            }
            let datos = {
                documento:this.documento,
                nombres:this.nombres,
                email:this.email,
                password:this.clave,
                rol:this.rol

            }
            console.log(datos);
            http.open('POST',this.$store.state.rootpath+'articulosSsac_php/api/usuarios');

            http.send(JSON.stringify(datos));
        }
        
    },


}
</script>

<style>

</style>