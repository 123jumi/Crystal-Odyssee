<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import YouTube from 'vue3-youtube';

const [videoWidth,videoHeight] = [ref(window.innerWidth),ref(window.innerHeight)];


const onReady = (event: any) => {
  event.target.playVideo();
};
const toggleMute = (event: any) => {
  event.target.isMuted()
    ? event.target.unMute()
    :event.target.mute();
};

const playerVars = {
  autoplay: 1,
  loop: 10,
  controls: 0,
  modestbranding: 1,
  showinfo: 0,
  rel: 0,
  playlist: 'ySqSChzNv2U',
};

const updateVideoSize = () => {
  videoWidth.value = window.innerWidth;
  videoHeight.value = window.innerHeight;
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
          <div class="screen"></div>
          <YouTube
            src="https://www.youtube.com/watch?v=ySqSChzNv2U"
            :vars="playerVars"
            @ready="onReady"
            :width="videoWidth"
            :height="videoHeight"
          />
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>


