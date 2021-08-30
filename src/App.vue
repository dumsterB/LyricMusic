<template>

  <v-app>
    <div class="application">
      <v-app-bar color=" app" dark app>
        <v-toolbar-title>DUMSTER</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-col class="mx-auto   mt-5"
               cols="4">
          <v-text-field filled
                        v-model="search"
                        v-on:keyup="searchStart()"
                        v-on:blur="searchLeave()"
                        label="Search your music..."
                        clearable
                        append-icon="mdi-magnify"></v-text-field>
        </v-col>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-row v-if="searchInput" class="searchItems">
            <v-col class="searchMusics" col-lg="6" col-xs="12">
              <div class="blockMusics">
                <v-toolbar-title class="nameObject">Песня</v-toolbar-title>
                <div class="toolbarMusicsList" dark
                     v-for="(music , index ) of itemsOfTitle.slice(0, 3)"
                     :key="index"
                     :class="(music.src == currentMusic.src) ? 'music playing' : 'music'">
                  <v-list-item dark>
                    <label class="mr-2">{{index +1 }}</label>
                    <v-list-item-avatar size="50">
                      <v-img class="elevation-6 avatarMusic" alt :src="music.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-4">
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
                        <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>

                        <v-list>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>The Walker</v-list-item-title>
                              <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-spacer></v-spacer>

                            <v-list-item-icon>
                              <v-btn icon>
                                <v-icon @click="previosMusic">mdi-rewind</v-icon>
                              </v-btn>
                            </v-list-item-icon>
                            <v-list-item-icon>
                              <v-btn icon v-if="!isPlaying">
                                <v-icon @click="playMusic(music)">mdi-play</v-icon>
                              </v-btn>
                              <v-btn icon v-else>
                                <v-icon @click="pauseMusic">mdi-pause</v-icon>
                              </v-btn>
                            </v-list-item-icon>
                            <v-list-item-icon class="ml-0">
                              <v-btn icon>
                                <v-icon @click="nextMusic">mdi-fast-forward</v-icon>
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
            </v-col>
            <v-col class="searchMusics" col-lg="6" col-xs="12">
              <div class="blockMusics">
                <v-toolbar-title class="nameObject">Исполнитель</v-toolbar-title>
                <div class="toolbarMusicsList" dark
                     v-for="(music , index ) of itemsOfSingers.slice(0, 3)"
                     :key="index"
                     :class="(music.src == currentMusic.src) ? 'music playing' : 'music'">
                  <v-list-item dark>
                    <label class="mr-2">{{index +1 }}</label>
                    <v-list-item-avatar size="50">
                      <v-img class="elevation-6 avatarMusic" alt :src="music.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-2">
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
                        <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>
                        <v-list>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>The Walker</v-list-item-title>
                              <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-list-item-icon>
                              <v-btn icon>
                                <v-icon @click="previosMusic">mdi-rewind</v-icon>
                              </v-btn>
                            </v-list-item-icon>
                            <v-list-item-icon>
                              <v-btn icon v-if="!isPlaying">
                                <v-icon @click="playMusic(music)">mdi-play</v-icon>
                              </v-btn>
                              <v-btn icon v-else>
                                <v-icon @click="pauseMusic">mdi-pause</v-icon>
                              </v-btn>
                            </v-list-item-icon>
                            <v-list-item-icon class="ml-0">
                              <v-btn icon>
                                <v-icon @click="nextMusic">mdi-fast-forward</v-icon>
                              </v-btn>
                            </v-list-item-icon>
                          </v-list-item>
                        </v-list>
                      </v-card>
                    </v-bottom-sheet>
                  </v-list-item>
                </div>
              </div>
            </v-col>
          </v-row>
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer dark padless>
        <v-card class="flex " flat tile>
          <v-card-title class="footer">
            <strong class="subheading">Слушай свою любимаю песня c DUMSTER !</strong>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons"
                   :key="icon.icon"
                   class="mx-4"
                   dark
                   icon>
              <a target="_blank" class="socialMedia" :href="icon.href" icon>
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </a>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>DUMSTER</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </v-app>

</template>
<script>

  export default {
    name: 'App',
    props: ['on, attrs'],
    data() {
      return {
        isLoading: false,
        model: null,
        spacer: true,
        val: '',
        searchInput: false,
        currentMusic: {},
        index: 1,
        isPlaying: false,
        player: new Audio(),
        search: '',
        drawer: false,
        inputCall: false,
        dark: false,
        icons: [
          { icon: 'mdi-facebook', href: 'https://music.yandex.com/home' },
          { icon: 'mdi-twitter', href: 'https://music.yandex.com/home' },
          { icon: 'mdi-linkedin', href: 'https://music.yandex.com/home' },
          { icon: 'mdi-instagram', href: 'https://music.yandex.com/home' },
          { icon: 'mdi-telegram', href: 'https://music.yandex.com/home' }
        ]
      }
    },

    watch: {},
    methods: {
      callInput() {
        this.inputCall = !this.inputCall
        console.log(this.inputCall)
      },

      playMusic(musics) {
        if (typeof musics.src != 'undefined') {
          this.currentMusic = musics
          this.player.src = this.currentMusic.src
        }
        this.player.play()
        this.player.addEventListener(
          'ended',
          function() {
            this.index++
            if (this.index > this.musics.length - 1) {
              this.index = 0
            }
            this.currentMusic = this.musics[this.index]
            this.play(this.currentMusic)
          }.bind(this)
        )
        this.isPlaying = true
      },
      pauseMusic() {
        this.player.pause()
        this.isPlaying = false
      },
      previosMusic() {
        this.index - 1
        if (this.index > this.musics.length - 1) {
          this.index = 0
        }
        this.currentMusic = this.musics[this.index]
        this.player.src = this.currentMusic.src
      },
      searchStart() {
        if (this.search.length >= 2) {
          this.searchInput = true
        } else {
          this.searchInput = false
        }
      },
      searchLeave: function() {
        this.searchInput = false
        this.message = ''
        console.log(this.searchInput)
      },
      nextMusic() {
        this.index + 1
        this.currentMusic = this.musics[this.index]
        this.player.src = this.currentMusic.src
        console.log(this.currentMusic)
      }
    },
    computed: {
      musics() {
        return this.$store.getters.musics
      },
      itemsOfTitle() {
        return this.musics.filter(item => {
          return item.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      itemsOfSingers() {
        return this.musics.filter(item => {
          return item.singer.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    created() {
      this.currentMusic = this.musics[this.index]
      this.player.src = this.currentMusic.src
    }
  }

</script>
<style scoped>

  .v-text-field .input {
    flex: 1 1 auto;
    line-height: 20px;
    padding: 8px 0 8px;
    /* max-width: 100%; */
    /* min-width: 0px; */
    width: 500px;
    margin-right: 50px !important;
  }
  .socialMedia {
    color: white;
    text-decoration: none;
  }
  .application {
    background-image: linear-gradient(135deg, #492cdd 0%, #ad38e2 100%);
  }

  .app {
    background-image: linear-gradient(135deg, #492cdd 0%, #ad38e2 100%);
  }
  .eachMusics {
    padding: 20px 10px;
    background: red;
  }
  .listofMusics {
    padding: 10px;
  }
  .searchInput {
    z-index: 9;
  }
  .nameObject {
    color: white;
  }
  @media only screen and (max-width: 600px) {
    .searchInput {
      width: 500px !important;
      margin-right: 100px !important;
    }
    .subheading {
      text-align: center;
      margin-left: 10px;
    }
  }
  .searchItems {
    display: block;
  }
  .footer {
    background: #ad38e2;
  }

</style>
