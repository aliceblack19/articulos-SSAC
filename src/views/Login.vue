<template>
  <main>
     <section class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="jumbotron">
                <h1 class="display-4">Articulos SSAC</h1>
                <p class="lead">Articulos al alcance de tu mano</p>
            </div>
        </div>
    </div>
    <form method="POST" @submit.prevent="logen()">
                <div class="input-group mb-3 ">
                    <span class="input-group-text text-primary" id="basic-addon1">Email</span>
                    <input class="form-control" type="text" name="usuario" id="usuario" v-model="usuario" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1" >Contraseña </span>
                    <input class="form-control"  type="password" name="contraseña" maxlenght="20" placeholder="contraseña " v-model="contraseña" required= required>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">iniciar sesion</button>
    </form>
    </section>

<section class="container-fluid mt-5">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-4">
                    <ul class="list-group">
                        <li class="list-group-item">Telefono: 317 829 2595</li>
                        <li class="list-group-item">Correo: articulosssac@gmail.com</li>
                    </ul>
                </div>
                <div class="col-md-4 offset-md-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8413684659013!2d-74.15433480525992!3d4.622375259175991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e9b8b228423%3A0x33bad6f2e9d5cdf5!2sINEM%20Kennedy!5e0!3m2!1ses!2sco!4v1603830899340!5m2!1ses!2sco" width="100%" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
    
  </main>
</template>

<script>
export default {
    data(){
        return{
            usuario:null,
            contraseña:null
        }
    },
    methods:{
        logen(){
            const peticion=new XMLHttpRequest();
            peticion.onreadystatechange=function(){
                if(this.readyState ==4 && this.status ==200){
                    let respuesta =JSON.parse(this.response)
                    console.log(respuesta);
                }
                
            }
            peticion.open('POST',this.$store.state.rootpath+'api/login');
            const usuarioycontrseña={
                usuario:this.usuario,
                password:this.contraseña
            }
            peticion.send(JSON.stringify(usuarioycontrseña));
        }
    }
}
</script>

<style>

</style>