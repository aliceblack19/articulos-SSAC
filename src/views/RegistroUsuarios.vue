<template>
    <form id="app" @submit="checkForm" action="" method="post">
    <p>
        <label for="age">Documento:</label>
        <input type="number" name="documento" id="documento" v-model="documento" min="0" required>
    </p>
    <p>
        <label for="name">Nombres</label>
        <input type="text" name="nombres" id="nombres" v-model="nombres" required>
    </p>

    <p>
        <label for="age">Correo electronico:</label>
        <input type="email" name="email" id="email" v-model="email" required>
    </p>

    <p>
        <label for="movie">Favorite Movie</label>
        <select name="movie" id="movie" v-model="movie">
        <option>Star Wars</option>
        <option>Vanilla Sky</option>
        <option>Atomic Blonde</option>
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