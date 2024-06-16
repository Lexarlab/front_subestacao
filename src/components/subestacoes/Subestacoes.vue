<template>
  <div>
    <h1>Sistema de Subestação</h1>
    <div class="q-pa-md">
      <q-table
        title="Subestações"
        :rows="subestacoes"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:body-cell-editar="props">
          <q-td :props="props">
            <q-btn color="primary" label="Editar" @click="editarSubestacao(props.row.id)" />
          </q-td>
        </template>
        <template v-slot:body-cell-excluir="props">
          <q-td :props="props">
            <q-btn color="primary" label="Excluir" @click="deletarSubestacao(props.row.id)" />
          </q-td>
        </template>
        <template v-slot:body-cell-visualizar="props">
          <q-td :props="props">
            <q-btn color="secondary" label="Maps" @click="visualizarNoMaps(props.row.latitude, props.row.longitude)" />
          </q-td>
        </template>
      </q-table>
    </div>
    <q-btn color="primary" label="Adicionar Subestação" @click="navigateToForm" />
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { QBtn, QTable } from 'quasar';
import { Subestacao } from '../../type';
import { buscarTodos, deletar } from '../../services/Service';
import router from '../../router';

interface TableColumn {
  name: string;
  label: string;
  field: string | ((row: any) => any);
  required?: boolean;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  sort?: (a: any, b: any, rowA: any, rowB: any) => number;
  headerClasses?: string;
}

export default defineComponent({
  name: 'Subestacoes',
  components: {
    QBtn,
    QTable,
  },
  setup() {
    const subestacoes = ref<Subestacao[]>([]);
    const columns = ref<TableColumn[]>([
      { name: 'codigo', label: 'Código', align: 'left', field: 'codigo', sortable: true },
      { name: 'nome', label: 'Nome', align: 'left', field: 'nome', sortable: true },
      { 
        name: 'editar', 
        label: 'Editar', 
        align: 'center', 
        field: (row) => {
          return `<q-btn color="primary" label="Editar" @click="editarSubestacao(${row.id})" />`;
        }, 
        sortable: false 
      },
      {
        name: 'excluir',
        label: 'Excluir',
        align: 'center',
        field: (row) => {
          return `<q-btn color="primary" label="Excluir" @click="editarSubestacao(${row.id})" />`;
        }, 
        sortable: false 
      },
      { 
        name: 'visualizar', 
        label: 'Visualizar no Maps', 
        align: 'center', 
        field: (row) => {
          return `<q-btn color="secondary" label="Maps" @click="visualizarNoMaps(${row.latitude}, ${row.longitude})" />`;
        }, 
        sortable: false 
      },
    ]);

    const carregarSubestacoes = async () => {
      try {
        const dados = await buscarTodos();
        subestacoes.value = dados;
      } catch (error) {
        console.error('Erro ao carregar subestações:', error);
      }
    };

    const deletarSubestacao = async (id: number) => {
      try {
        await deletar(id);
        carregarSubestacoes(); 
      } catch (error) {
        console.error('Erro ao deletar subestação:', error);
      }
    };

    const editarSubestacao = (id: number) => {
      router.push({ name: 'FormSubestacao', params: { id } });
    };

    const visualizarNoMaps = (latitude: string, longitude: string) => {
      window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
    };

    onMounted(carregarSubestacoes);

    const navigateToForm = () => {
      router.push({ name: 'FormSubestacao' });
    };

    return {
      subestacoes,
      columns,
      navigateToForm,
      editarSubestacao,
      visualizarNoMaps,
      deletarSubestacao,
    };
}
});

</script>

<style>
h1{
  margin-bottom: 10px
}

</style>
