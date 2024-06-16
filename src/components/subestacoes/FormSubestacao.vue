<template>
  <div class="form-container">
    <h2>Adicionar Subestação</h2>
    <q-form @submit="onSubmit">
      <q-input filled v-model="form.codigo" label="Código" />
      <q-input filled v-model="form.nome" label="Nome" />
      <q-input filled v-model="form.latitude" label="Latitude" type="number" />
      <q-input filled v-model="form.longitude" label="Longitude" type="number" />
      <q-btn type="submit" label="Adicionar" color="primary" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { cadastrar } from '../../services/Service';

const form = ref({
  codigo: '',
  nome: '',
  longitude: 0,
  latitude: 0,
});

const router = useRouter();

const onSubmit = async () => {
  try {
    await cadastrar({
      codigo: form.value.codigo,
      nome: form.value.nome,
      longitude: Number(form.value.longitude),
      latitude: Number(form.value.latitude)
    });

    form.value = {
      codigo: '',
      nome: '',
      longitude: 0,
      latitude: 0,
    };

    router.push('/subestacao');
  } catch (error) {
    console.error('Erro ao cadastrar nova subestação:', error);
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
h2 {
  margin-bottom: 16px;
}
</style>
