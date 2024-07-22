<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import YouTube from 'vue3-youtube';

const videoSize = ref({ width: window.innerWidth+350, height: window.innerHeight});
const playerRef = ref<any>(null);

const onReady = (event: any) => {
  playerRef.value = event.target;
  playerRef.value.getVideoEmbedCode();
  playerRef.value.playVideo();
};

const toggleMute = () => {
  if (playerRef.value) {
    playerRef.value.isMuted() ? playerRef.value.unMute() : playerRef.value.mute();
    console.log(playerRef.value);
  }
};

const playerVars = {
  controls: 0,
  modestbranding: 1,
  showinfo: 0,
  rel: 0,
};

const updateVideoSize = () => {
  videoSize.value = { width: window.innerWidth+300, height: window.innerHeight};
};

onMounted(() => {
  window.addEventListener('resize', updateVideoSize);
  updateVideoSize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVideoSize);
});
</script>

<template>
  <BContainer class="hero-container d-flex align-items-center justify-content-center p-0">
    <BRow class="flex-grow-1">
      <BCol class="d-flex align-items-center justify-content-center">
        <div class="video-wrapper">
          <div class="screen" @click="toggleMute"></div>
          <YouTube
          id="embed-code"
            src="https://www.youtube.com/embed/ySqSChzNv2U?playlist=ySqSChzNv2U&loop=1"
            :vars="playerVars"
            @ready="onReady"
            :width="videoSize.width"
            :height="videoSize.height"
          />
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>


