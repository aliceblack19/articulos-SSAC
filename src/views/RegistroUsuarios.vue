<template>
    <main class="container">
        <form class="row justify-content-center vh-100" action="xxxxxxxxxxx" method="post">
            <div class="col-md-5 align-self-center">
                <div class="input-group mb-3 ">
                    <span class="input-group-text text-primary" id="basic-addon1">Documento:</span>
                    <input class="form-control" type="number" name="documento" id="documento" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Nombres: </span>
                    <input class="form-control"  type="text" name="nombres" id="password" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Correo electronico: </span>
                    <input class="form-control"  type="email" name="email" id="email" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Password: </span>
                    <input class="form-control"  type="password" name="contrasenia" id="password" required>
                </div>
                <div class="input-group mb-3">
                    <label for="rol" class="input-group-text text-primary" id="basic-addon1">Elige rol:</label>
                    <select name="rol" id="rol" class="form-control" v-model="rol">
                    <option>Cliente</option>
                    <option>Empleado</option>
                    </select>
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
            text:''
        }
    }
}
</script>

<style>

</style>