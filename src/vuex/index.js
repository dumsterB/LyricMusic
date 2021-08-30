import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    musicss: [],
    musics: [
      {
        title: "Ab",
        singer: "Fousheé",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://avatars.yandex.net/get-music-content/4406810/71c4f57d.a.13713315-1/200x200',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
        path: 'musicImagonDragonsNatural/',
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
      {
        title: "The Walker",
        singer: "Fitz & The Trantrums",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://avatars.yandex.net/get-music-content/1781407/b7cf2a66.a.12786183-5/200x200',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Natural.mp3"),
        path: 'musicImagonDragonsNatural/',
      },
      {
        title: "Deep End",
        singer: "Fousheé",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://i2.wp.com/dailytrojan.com/wp-content/uploads/2017/06/evolve.jpg?fit=1400%2C1400&ssl=1',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
        path: 'QualityControlBaby/',
      },
      {
        title: "Get Lucky",
        singer: "Jack Koden",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://i2.wp.com/dailytrojan.com/wp-content/uploads/2017/06/evolve.jpg?fit=1400%2C1400&ssl=1',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
        path: 'musicImagonDragonsNatural/',
      },
      {
        title: "Blinding Lights",
        singer: "The Weeknd",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://i2.wp.com/dailytrojan.com/wp-content/uploads/2017/06/evolve.jpg?fit=1400%2C1400&ssl=1',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
        path: 'musicImagonDragonsNatural/',
      },
      {
        title: "Astronaut In The Ocean",
        singer: "Masked Wolf",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://i2.wp.com/dailytrojan.com/wp-content/uploads/2017/06/evolve.jpg?fit=1400%2C1400&ssl=1',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
        path: 'musicImagonDragonsNatural/'
      },
      {
        title: "что то на рус",
        singer: "Masked Wolf",
        category: "Pop",
        value: true,
        subtitle: "",
        image: 'https://i2.wp.com/dailytrojan.com/wp-content/uploads/2017/06/evolve.jpg?fit=1400%2C1400&ssl=1',
        src: require("../assets/musicImagonDragons/Imagine Dragons - Bad Liar.mp3"),
        path: 'musicImagonDragonsNatural/'
      },
    ]
  },
  actions: {
    getMusics({
      commit
    }) {
      axios.get('localhost:3000/songs')
        .then(r => r.data)
        .then(musicss => {
          commit('SET_MUSICS', musicss)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mutations: {
    SET_MUSICS(state, musicss) {
      state.musicss = musicss
    }
  },
  getters: {
    musics(state) {
      return state.musics
    },
    allMusics: (state) => state.musicss
  }
})
export default store
