<template>
    <main class="container">
        <form class="row justify-content-center vh-100" @submit.prevent="nuevoArticulo()" method="post">
            <div class="col-md-5 align-self-center">
                <div class="input-group mb-3 ">
                    <span class="input-group-text text-primary" id="basic-addon1">Nombre articulo:</span>
                    <input class="form-control" type="text" name="nomarticulo" id="nomarticulo" v-model="nomarticulo" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Descripcion:</span>
                    <input class="form-control"  type="text" name="descripcion" id="descripcion" v-model="descripcion" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Valor: </span>
                    <input class="form-control"  type="number" name="precio" id="precio" v-model="precio" required>
                </div>
                <div class="input-group mb-3">
                    <label for="categoria" class="input-group-text text-primary" id="basic-addon1">Categoria:</label>
                    <select name="categoria" id="categoria" class="form-select" v-model="catego" required>
                        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{categoria.nombre}}</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label for="proveedor" class="input-group-text text-primary" id="basic-addon1">Proveedor:</label>
                    <select name="proveedor" id="proveedor" class="form-select" v-model="proveedor" required>
                        <option v-for="proveedor in proveedores" :key="proveedor.id" :value="proveedor.id">{{proveedor.proveedor}}</option>
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
                <router-link class="btn btn-primary mb-3 w-100" to="/login">Regresar</router-link>
            </div> 

        </form>
    </main>
</template>

<script>
export default {

    name: 'NuevoArticulo',
    data(){
        return{
            correcto:false,
            error:false,
            nomarticulo:null,
            descripcion:null,
            precio:null,
            catego:null,
            proveedor:null,
            categorias:[],
            proveedores:[]
        }
    },
    mounted(){
        this.getcategorias();
        this.getproveedores();
    },
    methods:{
        getcategorias(){
            let http = new XMLHttpRequest();
            let self = this;
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let cate = JSON.parse(this.response);
                    self.categorias = cate;
                    console.log(self.categorias);
                }
            }
            http.open('GET',this.$store.state.rootpath+'articulosSsac_php/api/categorias');
            http.send();
        },
        getproveedores(){
            let http = new XMLHttpRequest();
            let self = this;
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let prove = JSON.parse(this.response);
                    self.proveedores = prove;
                    console.log(self.proveedores);
                }
            }
            http.open('GET',this.$store.state.rootpath+'articulosSsac_php/api/proveedores');
            http.send();
        },
        nuevoArticulo(){
            let http = new XMLHttpRequest();
            let self = this;
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let respuesta = JSON.parse(this.response);
                    if(respuesta.state){
                        self.correcto = true;
                    }
                    else{
                        self.error = true;
                    }
                    console.log(respuesta);
                }
            }
            let datos = {
                nombre:this.nomarticulo,
                descripcion:this.descripcion,
                precio:this.precio,
                categoria:this.catego,
                proveedor:this.proveedor
            }
            console.log(datos);
            http.open('POST',this.$store.state.rootpath+'articulosSsac_php/api/articulos');

            http.send(JSON.stringify(datos));
        }
        
    },
}
</script>

<style>

</style>