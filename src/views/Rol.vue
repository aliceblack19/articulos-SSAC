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
    <div class="btn-group" role="group"><br>
        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Rol
        </button><br>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a class="dropdown-item" href="#">Empleado</a></li>
            <li><a class="dropdown-item" href="#">administrador</a></li>  
        </ul>
    </div>
    <p>
        <label for="id">:</label><br>
        <input type="nombre" name="nombre" id="nombre" v-model="id" required>
    </p>
    <button type="button" class="btn btn-primary btn-lg">enviar</button>
    
</section>
    </main>
</template>
<script>
export default{

}
</script>
<style>

</style>
