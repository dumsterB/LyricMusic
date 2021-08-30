<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="Music.title"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              dark
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="Music.singer"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
              dark
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="Music.info"
              dark
              :rules="nameRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-file-input
     accept=""
     dark
     type="file"
     label="File input"
   ></v-file-input>
          </v-col>
          <v-row></v-row>
          <!-- <v-col col="12" md="3" @input="selectInput">
            <v-file-input
              truncate-length="15"
              dark
              multiple
              type="file" name="files"
              ></v-file-input>
            <div class="">
                <input type="file" primary name="" value="">
            </div>
          </v-col> -->
              </v-row>
          <v-btn class="primary" @click="create">Создать</v-btn> {{Music.file}}
        <br>  {{allMusics}}
      </v-container>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "",
  data: () => ({
    Music:{
      title: "",
      singer: "",
      file:'',
      info: "",
    },
    allMusics:'',
    message:'',
    text:'',
    fileValue:'',
    submit: "",
    valid: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
  methods: {
    create() {
      const newMusic={
        title:this.Music.title,
        singer:this.Music.singer,
        info:this.Music.info,
        file:this.Music.file
      }
      console.log(newMusic);
      axios.post('http://localhost:3000/songs',newMusic)
        .then(()=>{
          console.log('get data');
        })
        .catch((err)=>{
          console.log(err);
        })
        this.Music.title=''
        this.Music.singer=''
        this.Music.info=''
        this.Music.file=''
    },
    onFileChange(e) {
      console.log(e);
      var files = e.target.files || e.dataTransfer.files;
      this.Music.file=files
    },
  },
  computed:{
    // musicss(){
    //   return this.$store.state.musicss
    // },
  },
  mounted() {
      axios.get('http://localhost:3000/songs')
      .then((res)=>{
        console.log(res.data);
        this.allMusics=res.data
      }).catch((err)=>{
        console.log(err);
      })
  }
};
</script>
<style lang="scss" scoped></style>
