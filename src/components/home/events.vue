<!-- <template>
    <div class="gg">
        <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          :color="isSelected ? 'primary' : 'grey-lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
    </div>
</template>
 <script>
 export default {
    components: {},
    data: () => ({
      model: null,
    }),
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style>
 .gg{
    background-color: aqua;
 }
</style> -->

<template></template>
 <script>
 export default {
 name: 'ProjectApp',
    components: {},
  data() {
   return {};
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>