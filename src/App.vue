<template>
  <v-app dark>
    <v-toolbar app color="primary">
      <img src="/images/favicon.png" alt="" class="py-1">
      <v-toolbar-title class="mr-4">BRANCH FOREX BUREAU</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down ml-4">
        <v-btn flat selected class="secondary centered">branch 
          <v-chip>adum</v-chip>
        </v-btn>
        <v-btn flat class="secondary centered">Teller
          <v-chip>09</v-chip>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Exchange</v-btn>
        <v-btn flat>Trending</v-btn>
        <v-btn flat disabled>Market Cap</v-btn>
        <v-btn flat disabled>Tools</v-btn>
      </v-toolbar-items>
      <v-btn icon>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="secondary">
      <v-container  grid-list-md fluid class="mt-0">
        <v-layout row wrap>
          <v-flex md3>
            <exchange-form/>
          </v-flex>
          <v-flex sm6 md6>
            <v-card>
              <GraphCard/>
            </v-card>
          </v-flex>
          <v-flex sm2 md3>
            <v-card>
              <TabbedTable :more='["GBP", "XAF", "JPY", "EUR"]'  :headers="fxHeaders" :values="fxData"/>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-3">
          <v-flex xs4 sm8 md6>
            <v-card>
              <TabbedTable :headers="history"/>
            </v-card>
          </v-flex>
          <v-flex sm4 md6>
            <v-card>
              <tabbed-table :headers="fxHeaders" :values="fxData"/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer fixed app color="primary" class="darken-2">
      <ticker></ticker>
    </v-footer>
  </v-app>
</template>

<script>
import GraphCard from "./components/GraphCard.vue";
import TabbedTable from "./components/TabbedTable.vue";
import ExchangeForm from "./components/ExchangeForm.vue";
import Ticker from "./components/Ticker.vue";

export default {
  name: "app",
  components: {
    GraphCard,
    TabbedTable,
    ExchangeForm,
    Ticker
  },
  data() {
    return {
      fxHeaders: [
        { text: "Key" },
        { text: "TT Buying" },
        { text: "TT Selling" },
        { text: "Cash Buying" },
        { text: "Cash Selling" },
      ],
      history: [
        {
          text: "Transaction Id",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "From", value: "calories" },
        { text: "To", value: "fat" },
        { text: "Amount", value: "carbs" },
        { text: "Date / Time", value: "protein" },
      ],
      fxData: [
        {
          key: "usdrateId",
          currencyFrom: "USD",
          currencyTo: "GHS",
          "Cash Buying": "4.61",
          "Cash Selling": "4.84",
          "TT Buying": "4.61",
          "TT Selling": "4.81"
        },
        {
          key: "eurrateId",
          currencyFrom: "EUR",
          currencyTo: "GHS",
          "Cash Buying": "5.3236",
          "Cash Selling": "5.6299",
          "TT Buying": "5.3236",
          "TT Selling": "5.5950"
        },
        {
          key: "gbprateId",
          currencyFrom: "GBP",
          currencyTo: "GHS",
          "Cash Buying": "5.9575",
          "Cash Selling": "6.2954",
          "TT Buying": "5.9575",
          "TT Selling": "6.2564"
        },
        {
          key: "zarrateId",
          currencyFrom: "ZAR",
          currencyTo: "GHS",
          "Cash Buying": "0.3415",
          "Cash Selling": "0.3695",
          "TT Buying": "0.3415",
          "TT Selling": "0.3672"
        },
        {
          key: "cnyrateId",
          currencyFrom: "CNY",
          currencyTo: "GHS",
          "Cash Buying": "0.6728",
          "Cash Selling": "0.7110",
          "TT Buying": "0.6728",
          "TT Selling": "0.7066"
        },
        {
          key: "audrateId",
          currencyFrom: "AUD",
          currencyTo: "GHS",
          "Cash Buying": "0",
          "Cash Selling": "0",
          "TT Buying": "3.4082",
          "TT Selling": "3.5950"
        },
        {
          key: "jpyrateId",
          currencyFrom: "JPY",
          currencyTo: "GHS",
          "Cash Buying": "0",
          "Cash Selling": "0",
          "TT Buying": "0.0412",
          "TT Selling": "0.0435"
        },
        /*{
          key: "cadrateId",
          currencyFrom: "CAD",
          currencyTo: "GHS",
          "Cash Buying": "0",
          "Cash Selling": "0",
          "TT Buying": "3.5434",
          "TT Selling": "3.7212"
        },
        {
          key: "sekrateId",
          currencyFrom: "SEK",
          currencyTo: "GHS",
          "Cash Buying": "0",
          "Cash Selling": "0",
          "TT Buying": "0.5159",
          "TT Selling": "0.5411"
        },
        {
          key: "chfrateId",
          currencyFrom: "CHF",
          currencyTo: "GHS",
          "Cash Buying": "0",
          "Cash Selling": "0",
          "TT Buying": "4.6123",
          "TT Selling": "4.8537"
        }*/
      ]
    }
  }
};
</script>

<style>
*::-webkit-scrollbar,
*::-webkit-scrollbar-track,
*::-webkit-scrollbar-thumb,
*::-webkit-scrollbar-track-piece,
*::-webkit-scrollbar-button {
  height: 5px !important;
  width: 5px !important;
}

img {
  height: 100%;
  width: auto;
}
</style>

