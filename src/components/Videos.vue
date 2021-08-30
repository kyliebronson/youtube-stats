<template>
  <div>
    <div class="channel-info">
      <p class="channel-title">{{ channelName }}</p>
      <p class="subscriber-count">Subscribers: {{ subscriberCount }}</p>
    </div>
    <div class="videos">
      <div class="video" v-for="v in videos" :key="v">
        <img :src="v.thumbnail" alt="" srcset="" />
        <p>{{ v.video_name }}</p>
        <div class="video-text">
          <p>Views: {{ v.views }}</p>
          <p>Watch Hours: {{ v.watch_hours }}</p>
        </div>
        <div class="video-text">
          <p>Likes: {{ v.likes }}</p>
          <p>Dislike: {{ v.dislike }}</p>
          <p>Comments Count: {{ v.comments }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  name: "Videos",
  props: {
    msg: String,
  },
  data() {
    return {
      videos: [],
      channelName: "",
      subscriberCount: 0,
    };
  },
  mounted() {
    axios
      .get("http://192.168.1.80:9898/stats")
      .then((response) => {
        // handle success
        let d = response.data.response;

        for (let i = 0; i < d.length; i++) {
          //console.log(this.$route.path);
          if ("/" + d[i].channel_name == this.$route.path) {
            console.log(d[i].channel_name);
            this.channelName = d[i].channel_name;
            this.subscriberCount = d[i].subscriber;
            this.videos = d[i].videos;
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.videos img {
  width: 200px;
  border-top: solid white;
  border-bottom: solid white;
  border-width: 3px;
}
.videos {
  padding: 30px;
  display: flex;
  justify-content: center;
  color: black;
  flex-wrap: wrap;
}
.video {
  margin-right: 50px;
  max-width: 300px;
  padding-top: 20px;
}
.video-text p {
  font-size: 12px;
  display: inline-block;
  padding-right: 10px;
}
.channel-title {
  font-size: 20px;
  color: #00b887;
  padding-top: 15px;
}
.channel-info {
  text-align: center;
}
@media (max-width: 500px) {
  .videos {
    display: block;
    justify-content: inherit;
  }
}
</style>
