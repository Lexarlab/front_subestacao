<template>
    <section class="login">
        <h1 class="titulo" >Sistema de Subestação</h1>
        <div class="container">
        <h3 class="">
            Login
        </h3>
        <form class="form q-pt-xl">
            <label for="email">Email</label>
            <input type="email" nome="email" id="email">
            <label for="senha">Senha</label>
            <input type="password" nome="senha" id="senha">
            <q-btn @click="entrar" label="Entrar" class="q-mt-md" color="primary"/>
        </form>
    </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Subestacoes',
  setup() {
    const router = useRouter();

    const entrar = () => {
      router.push('/subestacao');
    };

    return {
      entrar
    };
  }
});
</script>
<style>
.titulo{
    color: "#ffff";
    margin-bottom: 60px;
    font-size: 50px;
    font-weight: bolder;
    
}
.login {
  background-image: url('../assets/foto_subestacao.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titulo_login{
    margin-bottom: 10px
}
.container{
    padding: 50px;
    border-radius: 7px;
    width: 40vh;
    height: 50vh;
    background-color: #ffff;
    background-position: center;
    text-align: center;
    position: relative;
}
button{
    margin-top: 15px;
}
input{
    border-radius: 5px;
    height: 25px;
}
.form{

    align-items: center;
}
</style>