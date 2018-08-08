<template>
    <v-card class="primary">
        <v-tabs id="forms" v-model="active" color="primary" grow dark slider-color="secondary">
          <v-tab ripple>Member</v-tab>
          <v-tab ripple>Guest</v-tab>
          <v-tab-item>
            <v-card flat class="primary">
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="name" label="Account ID" box loading="success"></v-text-field>
                  <v-layout>
                    <v-flex md6>
                      <v-select v-model="select" :items="currencies" :readonly="!valid" label="Currency" box></v-select>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field v-model="select" :disabled="!valid" label="Amount" box></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex md6>
                      <v-btn flat>To</v-btn>
                    </v-flex>
                    <v-flex md6>
                      <v-select v-model="select" :items="currencies" :disabled="!valid" label="Currency" box></v-select>
                    </v-flex>
                  </v-layout>
                  <p class="error--text center">Sorry, quota for this month has been exceeded</p>
                  <v-btn :disabled="!valid" flat>sell</v-btn>
                  <v-btn @click="clear" flat>cancel</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="primary">
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout>
                    <v-flex md6>
                      <v-select v-model="select" :items="['Voter', 'NHIS', 'VISA']" label="Card Type" box></v-select>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field v-model="name" label="Card ID" box loading="success"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex md6>
                      <v-select v-model="select" :items="currencies" :readonly="!valid" label="Currency" box></v-select>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field v-model="select" :disabled="!valid" label="Amount" box></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex md6>
                      <v-btn flat>To</v-btn>
                    </v-flex>
                    <v-flex md6>
                      <v-select v-model="select" :items="currencies" :disabled="!valid" label="Currency" box></v-select>
                    </v-flex>
                  </v-layout>
                  <p class="error--text center">Sorry, quota for this month has been exceeded</p>
                  <v-btn :disabled="!valid" flat>sell</v-btn>
                  <v-btn @click="clear" flat>cancel</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
    </v-card>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      active: 1,
      valid: false,
      select: null,
      currencies: ["USD", "GHS", "GBP", "XAF", "JPY", "EUR"]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
  #forms {
    min-height: 455px;
    height: 455px;
  }

  * {
    font-family: Quicksand;
  }
</style>
