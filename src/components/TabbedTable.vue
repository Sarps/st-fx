<template>

    <v-card flat dark class="primary">

      <v-card-actions v-if="more">
        <v-btn flat>USD</v-btn>
        <v-btn flat>GHS</v-btn>
        <v-menu  v-if="more.length" bottom class="v-tabs__div" left>
          <a slot="activator" class="v-tabs__item">
            more
            <v-icon>arrow_drop_down</v-icon>
          </a>
          <v-list class="primary">
            <v-list-tile v-for="item in more" :key="item">
              {{ item }}
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-actions>
      
      <v-data-table :headers="headers" :items="values" hide-actions class="primary">
        <template slot="items" slot-scope="props" class="primary">
          <td>{{ props.item.currencyFrom }}_{{ props.item.currencyTo }}</td>
          <td class="text-xs-right">{{ props.item["TT Buying"] }}</td>
          <td class="text-xs-right">{{ props.item["TT Selling"] }}</td>
          <td class="text-xs-right">{{ props.item["Cash Buying"] }}</td>
          <td class="text-xs-right">{{ props.item["Cash Selling"] }}</td>
        </template>
      </v-data-table>
    </v-card>
</template>

<script>
export default {
  props: [
    'more', 'headers', 'values'
  ],

  data: () => ({
    desserts: [
      {
        value: false,
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        value: false,
        name: "Ice cream",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        value: false,
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        value: false,
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        value: false,
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      },
      {
        value: false,
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%"
      },
      {
        value: false,
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%"
      }
    ]
  }),

  methods: {}
};
</script>

<style lang="scss">
thead > tr {
    background-color: #101849;
    &>th {
      color: #0ec7fc !important;
    }
}
tbody {
  
    max-height: 550px;

    & > tr {
      &:nth-of-type(2n + 1) {
        background-color: #101849;
      }

      &:nth-of-type(2n) {
        background-color: #111f50;
      }
    }
}
</style>
