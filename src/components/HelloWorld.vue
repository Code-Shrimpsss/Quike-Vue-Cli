<template>
  <div class="hello">
    <div class="container">    
      <img alt="logo" class="logo" src="../assets/img/logo.png" />
      <h1 class="subtitle">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    let logo = document.querySelector(".logo");
    let subTitle = document.querySelector(".subtitle");
    let fadeAndMove = [
      {
        opacity: 0,
        transform: `translateY(-20px)`,
      },
      {
        opacity: 1,
        transform: `translateY(0px)`,
      },
    ];

    let titleTiming = {
      duration: 2000,
      easing: "ease-in-out",
    };

    const titleChange = logo.animate(fadeAndMove, titleTiming);

    let expand = [
      {
        letterSpacing: "-0.5em",
        opacity: 0,
      },
      {
        letterSpacing: "initial",
        opacity: 1,
      },
    ];

    let subTitleTiming = {
      duration: titleChange.effect.getComputedTiming().duration / 2,
      easing: "ease-in-out",
    };

    const subTitleChange = subTitle.animate(expand, subTitleTiming);
    subTitleChange.pause();

    logo.addEventListener("click", () => {
      // idle, running, paused, finished
      if (subTitleChange.playState !== "running") {
        subTitleChange.play();
      }
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

main {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.container {
  text-align: center;
}

.logo {
  width: 300px;
  height: 300px;
}
</style>
