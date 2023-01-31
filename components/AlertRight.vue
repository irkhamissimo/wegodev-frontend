<template>
  <div class="v-alert-right">
    <v-alert outlined border="left" type="error" class="v-bg-white">
      <v-row>
        <v-col class="grow">
          Tess
        </v-col>
        <v-col class="shrink">
          <v-btn small color="error" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>

    </v-alert>
  </div>

</template>

<style scoped>
.v-bg-white {
  background-color: #fff !important;
}

.v-alert-right {
  max-width: 40%;
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 9;
}

@media (max-width: 768px) {
  .v-alert-right {
    max-width: 70%;
  }

}
</style>