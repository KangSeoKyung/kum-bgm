<template>
  <div>
    <div class="d-flex flex-column align-items-center">
      <div id="hadder">
        <h1>
          <strong>
            <span>
              <img
                src="@/assets/img/maple.jpg"
                alt="메이플로고"
                style="width: 80px; margin-right : 20px"
              />
            </span>
            <span id="kum-hadder">KUM</span>
            BGM 테이블
          </strong>
          <span>
            <img
              src="@/assets/img/ample.jpg"
              alt="앰프로고"
              style="width: 90px"
            />
          </span>
        </h1>
      </div>

      <div id="bgm_table" class="d-md-flex flex-column">
        <div id="upper_badge" class="d-flex justify-content-end"></div>

        <div id="middle_badge" class="d-flex flex-row justify-content-between">
          <div
            id="left_badge"
            class="d-flex flex-column justify-content-around"
          >
            <div v-for="i in categories" :key="i">
              <b-button style="width: 150px" size="lg" disabled>
                {{ i }}
              </b-button>
            </div>
          </div>

          <div
            id="table_content"
            class="d-flex flex-column justify-content-around"
          >
            <div v-for="i in categories" :key="i">
              <div class="d-flex flex-row justify-content-around">
                <div v-for="index in score" :key="index">
                  <b-button
                    :id="i + index.name"
                    :variant="index.variant"
                    style="width: 100px"
                    size="lg"
                    @click="findIdx(i, index.name, i + index.name)"
                  >
                    {{ index.name }}
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["메이플월드", "아케인리버", "그란디스", "이벤트", "커버곡"],
      score: [
        { name: "10", variant: "primary" },
        { name: "20", variant: "success" },
        { name: "30", variant: "warning" },
        { name: "40", variant: "info" },
        { name: "50", variant: "danger" },
      ],
      content: [
        {
          map: "메이플월드",
          score: "10",
          BGM: require("@/assets/Music/Reverse_City.mp3"),
        },
        {
          map: "메이플월드",
          score: "20",
          BGM: require("@/assets/Music/Reverse_City2.mp3"),
        },
        { map: "메이플월드", score: "30", BGM: "" },
        { map: "메이플월드", score: "40", BGM: "" },
        { map: "메이플월드", score: "50", BGM: "" },
        { map: "아케인리버", score: "10", BGM: "" },
        { map: "아케인리버", score: "20", BGM: "" },
        { map: "아케인리버", score: "30", BGM: "" },
        { map: "아케인리버", score: "40", BGM: "" },
        { map: "아케인리버", score: "50", BGM: "" },
        { map: "그란디스", score: "10", BGM: "" },
        { map: "그란디스", score: "20", BGM: "" },
        { map: "그란디스", score: "30", BGM: "" },
        { map: "그란디스", score: "40", BGM: "" },
        { map: "그란디스", score: "50", BGM: "" },
        { map: "이벤트", score: "10", BGM: "" },
        { map: "이벤트", score: "20", BGM: "" },
        { map: "이벤트", score: "30", BGM: "" },
        { map: "이벤트", score: "40", BGM: "" },
        { map: "이벤트", score: "50", BGM: "" },
        { map: "커버곡", score: "10", BGM: "" },
        { map: "커버곡", score: "20", BGM: "" },
        { map: "커버곡", score: "30", BGM: "" },
        { map: "커버곡", score: "40", BGM: "" },
        { map: "커버곡", score: "50", BGM: "" },
      ],
      nowPlaying: "",
    };
  },
  methods: {
    findIdx(map, score, name) {
      const idx = document.getElementById(name);
      idx.innerText = "선택됨";

      this.content.forEach((e) => {
        if (e.map === map && e.score === score) {
          if (this.nowPlaying === "") {
            const audio = new Audio(e.BGM);
            audio.play();
            this.nowPlaying = audio;
          } else {
            this.nowPlaying.pause();
            this.nowPlaying = "";
            idx.disabled = true;
          }
        }
      });
    },
  },
};
</script>

<style>
#hadder {
  margin: 5%;
}

#kum-hadder {
  color: crimson;
}

#upper_badge {
  margin-inline-end: 40%;
}

#left_badge {
  width: 150px;
}

#table_content {
  width: 750px;
}

#middle_badge {
  width: 950px;
  height: 400px;
}
</style>