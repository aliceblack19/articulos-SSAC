<template>
    <main class="container">
        <form class="row justify-content-center vh-100" action="xxxxxxxxxxx" method="post">
            <div class="col-md-5 align-self-center">
                <div class="input-group mb-3 ">
                    <span class="input-group-text text-primary" id="basic-addon1">Nombre articulo:</span>
                    <input class="form-control" type="text" name="nomarticulo" id="nomarticulo" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Descripcion:</span>
                    <input class="form-control"  type="text" name="descripcion" id="descripcion" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text text-primary" id="basic-addon1">Valor: </span>
                    <input class="form-control"  type="number" name="precio" id="precio" required>
                </div>
                <div class="input-group mb-3">
                    <label for="estado" class="input-group-text text-primary" id="basic-addon1">Estado del articulo:</label>
                    <select name="estado" id="estado" class="form-control" v-model="estado" required>
                    <option>En inventario</option>
                    <option>Sin inventario</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label for="categoria" class="input-group-text text-primary" id="basic-addon1">Categoria:</label>
                    <select name="categoria" id="categoria" class="form-control" v-model="categoria" required>
                    <option>vivieres</option>
                    <option>tecnologia</option>
                    <option>mascotas</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label for="proveedor" class="input-group-text text-primary" id="basic-addon1">Categoria:</label>
                    <select name="proveedor" id="proveedor" class="form-control" v-model="proveedor" required>
                    <option>alpina</option>
                    <option>super ricas</option>
                    <option>lenovo</option>
                    </select>
                </div>
                
            </div>
            <div class="col-md-3 align-self-center">
                <input type="submit" class="btn btn-primary mb-3 w-100" value="Guardar">
                <a class="btn btn-primary mb-3 w-100" href="xxxxxxxxx">Volver</a>
            </div> 
        </form>
    </main>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            text:''
        }
    }
}
</script>

<style>

</style>