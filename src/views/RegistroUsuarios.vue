<template>
    <form id="app" @submit="checkForm" action="" method="post">
    <p>
        <label for="documento">Documento:</label>
        <input type="number" name="documento" id="documento" v-model="documento" min="0" required>
    </p>
    <p>
        <label for="name">Nombres</label>
        <input type="text" name="nombres" id="nombres" v-model="nombres" required>
    </p>

    <p>
        <label for="email">Correo electronico:</label>
        <input type="email" name="email" id="email" v-model="email" required>
    </p>
    <p>
        <label for="password">:</label>
        <input type="password" name="password" id="password" v-model="email" required>
    </p>

    <p>
        <label for="rol">elige rol:</label>
        <select name="rol" id="rol" v-model="rol">
        <option>1. Cliente</option>
        <option>2. Empleado</option>
        </select>
    </p>

    <p>
    <input type="submit" value="Guardar">  
    </p>
</form>
</template>

<script>
export default {

}
</script>

<style>

</style>