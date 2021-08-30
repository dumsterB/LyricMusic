<template>
  <div id>
    <div class="main">
      <v-container fluid class="container">
        <v-row>
            <template>
              <v-carousel height="500" class="carousel">
                <v-carousel-item
                  v-for="(item, i) in trends"
                  :key="i"
                  :src="item.img"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <div class="container">
                    <div class="row d-block">
                      <div class=" mainTextCarousel">
                        <h1 class=" mainTextCarouselh1">
                          Download your favorite song <br />and listen to it
                          with us
                        </h1>
                      </div>
                      <br />
                      <div class="">
                        <v-btn rounded color="white" large class="btnKnowMore">
                          GET MORE INFORMATION
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </template>
            <!-- <div class="container">
              <div class="row">
                <div class="col-6" v-for="item of data">
                  {{item.musics}}
                </div>
              </div>
            </div> -->
            <div class="blockMusics">
              <v-toolbar-title dark>Trends</v-toolbar-title>
              <!-- data: {{musics}} -->

              <v-list-item-subtitle
                >Топ популярных треков среди слушателей DUMSTER Обновляется
                ежедневно</v-list-item-subtitle
              >
              <div
                class="toolbarMusicsList"
                dark
                v-for="(music, index) of musics.slice(0, 6)"
                :key="index"
                :class="
                  music.src == currentMusic.src ? 'music playing' : 'music'
                "
              >
                <v-list-item dark class="blocktext">
                  <label class="mr-2">{{ index + 1 }}</label>
                  <v-list-item-avatar size="50">
                    <v-img
                      class="elevation-6  avatarMusic"
                      alt
                      :src="music.image"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content class="d-flex ml-2">
                    <v-list-item-title>{{ music.title }}</v-list-item-title>
                    <br />
                    <v-list-item-subtitle>
                      {{ music.singer }}
                    </v-list-item-subtitle>
                    <v-spacer></v-spacer>
                  </v-list-item-content>
                  <v-spacer></v-spacer>

                  <v-bottom-sheet inset hide-overlay>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mx-2 btnPlayAndPause"
                        fab
                        v-bind="attrs"
                        v-on="on"
                        dark
                        color="indigo"
                        @click="playMusic(music)"
                      >
                        <v-icon dark>mdi-play</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 btnUpload"
                        fab
                        dark
                        color="warning"
                        rel="icon"
                        :href="music.path"
                        :download="music.path"
                      >
                        <v-icon dark>mdi-upload</v-icon>
                      </v-btn>
                    </template>
                    <v-card tile>
                      <v-progress-linear
                        :value="50"
                        class="my-0"
                        height="3"
                      ></v-progress-linear>

                      <v-list>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>The Walker</v-list-item-title>
                            <v-list-item-subtitle
                              >Fitz & The Trantrums</v-list-item-subtitle
                            >
                          </v-list-item-content>

                          <v-spacer></v-spacer>

                          <v-list-item-icon>
                            <v-btn icon>
                              <v-icon @click="previosMusic">mdi-rewind</v-icon>
                            </v-btn>
                          </v-list-item-icon>
                          <v-list-item-icon>
                            <v-btn icon v-if="!isPlaying">
                              <v-icon @click="playMusic(music)"
                                >mdi-play</v-icon
                              >
                            </v-btn>
                            <v-btn icon v-else>
                              <v-icon @click="pauseMusic">mdi-pause</v-icon>
                            </v-btn>
                          </v-list-item-icon>
                          <v-list-item-icon class="ml-0">
                            <v-btn icon>
                              <v-icon @click="nextMusic"
                                >mdi-fast-forward</v-icon
                              >
                            </v-btn>
                          </v-list-item-icon>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-bottom-sheet>
                </v-list-item>
                <v-divider></v-divider>
              </div>
            </div>
        </v-row>
      </v-container>
    </div>
    <div class="" v-for="tes of test2" :key="tes.id">
      <audio controls>
        <source :src="tes.src" type="audio/mpeg" :download="test.path" />
        Your browser does not support the audio element.
      </audio>
    </div>


    <PlayList></PlayList>
  </div>
</template>
<script>
import axios from 'axios'
import PlayList from "./Playlist.vue";

export default {
  props: [],
  data() {
    return {
      // musics:[],
      test:[],
      test2: [
        {
          title: "Ab",
          singer: "Fousheé",
          category: "Pop",
          value: true,
          subtitle: "",
          image:
            "https://avatars.yandex.net/get-music-content/4406810/71c4f57d.a.13713315-1/200x200",
          src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
          path: "musicImagonDragonsNatural/"
        },
        {
          title: "Get Lucky",
          singer: "Ab",
          category: "Pop",
          value: true,
          subtitle: "",
          image: 'https://i2.wp.com/dailytrojan.com/wp-content/uploads/2017/06/evolve.jpg?fit=1400%2C1400&ssl=1',
          src: require("../assets/QualityControl/QualityControlBaby/Quality Control - Baby.flac"),
          path: 'QualityControlBaby',
        },
      ],
      currentMusic: {},
      index: 1,
      trends: [
        {
          img:
            "https://www.studentenvacature.nl/wp-content/uploads/2019/01/Festival.jpg",
          title: "Скриптонит"
        },
        {
          img:
            "https://thepianouniversityutah.com/wp-content/uploads/2020/01/adult-3086307_1920.jpg",
          title: "Скриптонит2"
        },
        {
          img: "https://static.locals.md/2018/10/scriptonit.jpg",
          title: "Скриптонит3"
        }
      ],
      isPlaying: false,
      player: new Audio()
    };
  },
  components: {
    PlayList: PlayList
  },
  methods: {
    playMusic(musics) {
      if (typeof musics.src != "undefined") {
        this.currentMusic = musics;
        this.player.src = this.currentMusic.src;
      }
      this.player.play();
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.musics.length - 1) {
            this.index = 0;
          }
          this.currentMusic = this.musics[this.index];
          this.play(this.currentMusic);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pauseMusic() {
      this.player.pause();
      this.isPlaying = false;
    },
    previosMusic() {
      this.index - 1;
      if (this.index > this.musics.length - 1) {
        this.index = 0;
      }
      this.currentMusic = this.musics[this.index];
      this.player.src = this.currentMusic.src;
    },
    nextMusic() {
      this.index + 1;
      this.currentMusic = this.musics[this.index];
      this.player.src = this.currentMusic.src;
      console.log(this.currentMusic);
    }
  },
  computed: {
    musics() {
      return this.$store.getters.musics;
    },
    musicsaudio() {
      return this.$store.getters.musicsaudio;
    }
  },
  created() {
    this.currentMusic = this.musics[this.index];
    this.player.src = this.currentMusic.src;
  },
  mounted(){
    axios.get('http://localhost:3000')
    .then((response)=>{
      this.test=response.data;
      console.log(response.data)
      console.log(typeof this.test);
      console.log(this.test.description, 'this info');
    }).catch((err)=>{
      console.log(err);
    })
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Libre+Franklin:wght@100&display=swap");
.pictureOfmusic {
  background: url("https://1051thebounce.com/wp-content/uploads/sites/31/2017/06/GettyImages-670034938-1024x1024.jpg");
  /* https://foreignpolicyi.org/wp-content/uploads/2019/06/Music-750x500.jpg */
  background-position: center center center center;
  background-repeat: no-repeat;
  box-shadow: 0 0 10px black; /* Параметры тени */
  padding: 10px;
  height: 400px;
  width: auto;
  margin-top: 10px;
  max-width: 600px;
}
.blockPicture {
  color: white;
}
.avatarMusic {
  width: 40px;
  height: 50px !important;
}
.hrTag {
  width: 300px;
  height: 1px;
  background: white;
}
.soundSetting {
  margin: -10px;
}
.durationSettings {
  width: 100px;
}
.toolbarMusicsList {
  font-size: 20px;
}
.blockMusics {
  color: white;
  padding: 10px;
}
.btnPlayAndPause {
  height: 47px;
  width: 47px;
}
.btnUpload {
  height: 47px;
  width: 47px;
}
.secondlyTextCarousel {
  margin-top: 100px;
  font-size: 30px;
  font-family: "Libre Franklin", sans-serif;
}
.mainTextCarousel {
  margin-top: 100px;
  font-family: "Archivo Black", sans-serif;
  font-size: 25px;
  color: white;
  font-weight: 900;
  letter-spacing: -0.04em;

  line-height: 1.6;
  /* #492cdd */
}
.mainTextCarouselh1{
   text-shadow:  3px 4px  6px #ad38e2;
}
.btnKnowMore {
  color: black;
  background: white;
}
.container {
  padding: 0px;
}
.mainCol {
  padding: 0px;
}
@media only screen and (max-width: 400px) {
  .col {
    padding: 0 0px;
  }
  .v-list-item {
    padding: 0 0px;
  }
  .blockMusics[data-v-54d3a52e] {
    color: white;
    padding: 0px;
  }
}
</style>
