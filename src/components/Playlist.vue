<template>
  <div>
    <v-toolbar-title class="nameObject">Песни</v-toolbar-title>
      <v-list-item-subtitle class="nameObject">Новые треки, альбомы и сборники</v-list-item-subtitle>
    <v-container fluid>
      <v-row>
        <v-col v-for="(item, i) in musics.slice(0, 6)"
               :key="i"
               cols="6"
               lg="2"
               md="6"
               @click="PlayList">
          <div class="cardBasic">
            <v-card dark color="transparent" elevation="0" height="200 + 'px'">
              <v-img :src="item.image" height="220"></v-img>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-row align="center" class="mx-0">
                    <v-col cols="12">
                      <v-card-text>
                        <div class="d-flex subtitle-2">
                          {{ item.title }}
                        </div>
                        <div>{{ item.singer }}</div>
                        <v-rating :value="4.5"
                                  color="amber"
                                  dense
                                  half-increments
                                  readonly
                                  size="14"></v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413)
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>

                </div>
              </div>
            </v-card>
          </div>
          <br />
        </v-col>
      </v-row>
      <v-row>
         <h1> мои песни {{songs.book}}</h1>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    name: '',
    data: () => ({
      songs:''
    }),
    computed: {
      musics() {
        return this.$store.getters.musics
      }
    },
    methods: {
      PlayList() {
        this.$router.push('/home')
      }
    },
    mounted() {
        axios.get('http://localhost:3000')
        .then((res)=>{
          console.log(res.data);
          this.songs=res.data
        }).catch((err)=>{
          console.log(err);
        })
    }
}
</script>
<style lang="scss" scoped>
  .cardBasic:hover {
    border: 3px solid yellow;
  }
  .cardBasic {
    padding: 0px;
    cursor: pointer;
    height: 350px;
  }
  .nameObject {
    color: white;
  }
  .btnPlay {
    margin-right: 40px !important;
  }
</style>
