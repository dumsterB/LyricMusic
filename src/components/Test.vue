<template>
  <div id="" class="test">
    <!-- <p>{{Musics}}</p> -->
  <div class="" v-for="item of Musics" :key="item.author">
  <h1>data :</h1>  <p>{{item.title}}</p>
   <p>{{item.description}}</p>
     <img :src="item.coverImage" height="400" alt="">
  <audio controls>
    <source :src="item.music"    type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

  <p>{{item.category}}</p>
<!-- <div class="image-container" :data-url="book.coverImagePath"></div> -->
  </div>
  </div>
</template>
<script>
// const imageContainer=document.querySelector('.image-container')
//
// const url = imageContainer.dataset.url;
//
// let isAudio= url.search('audio')
//
// if(isAudio === -1){
//   const imageTmp='<img class="book-cover" src="<%= book.coverImagePath %>">'
//   imageContainer.innerHTML=imageTmp;
//   console.log('is Image');
// }
// else{
//   const audioTemp=`
//     <div class="book-cover">
//       <img src="https://source.unsplash.com/user/@cdx2/PDX_a_82obo/200x200"
//     </div>
//     <div class="audio-container">
//       <audio controls>
//         <source src="<%= book.coverImagePath %>" type="audio/mp3">
//         <source src="<%= book.coverImagePath %>" type="audio/ogg">
//         <source src="<%= book.coverImagePath %>" type="audio/mpeg">
//         <source src="<%= book.coverImagePath %>" type="audio/mpeg3">
//         <source src="<%= book.coverImagePath %>" type="audio/x-mpeg-3">
//         <source src="<%= book.coverImagePath %>" type="video/mpeg">
//         <source src="<%= book.coverImagePath %>" type="video/x-mpeg">
//         <source src="<%= book.coverImagePath %>" type="audio/flac">
//         <source src="<%= book.coverImagePath %>" type="audio/lrc">
//       </audio>
//     </div>`
//   imageContainer.innerHTML=audioTemp;
//   console.log('is Audio');
// }
import axios from 'axios'
export default {
  name: "",
  data: () => ({
    Musics:[],

  }),
  mounted(){
    axios.get('http://localhost:3000')
    .then((response)=>{
      //this.Musics=response.data,
      //console.log(Buffer.from("Hello World").toString('base64'));
      this.Musics = response.data.map( item => ({
        ...item,
        music: "data:audio/mpeg;base64," + Buffer.from(item.music).toString('base64'),
        coverImage: "data:image/jpeg;base64," +  Buffer.from(item.coverImage).toString('base64')
      }))

      console.log(this.Musics, 'this info');
    }).catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>
.test{
  height: 800px;
}
</style>
