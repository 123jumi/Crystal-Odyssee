<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watchEffect, watch } from "vue";
import YouTube from "vue3-youtube";

const videoSize = ref({ width: window.innerWidth, height: window.innerHeight });
const playerRef = ref<any>(null);
const isMuted = ref(false);

const onReady = (event: any) => {

  playerRef.value = event.target;
	playerRef.value.getVideoEmbedCode();
	playerRef.value.playVideo();
	setInterval(() => {
		playerRef.value.playVideo();
	}, 141 * 1000);
};

const toggleMute = () => {
	if (playerRef.value) {
		playerRef.value.isMuted()
			? (playerRef.value.unMute(), (isMuted.value = true))
			: (playerRef.value.mute(), (isMuted.value = false));
	}
};

const playerVars = {
	controls: 0,
	modestbranding: 1,
	showinfo: 0,
	rel: 0,
};

const updateVideoSize = () => {
	const aspectRatio = 16 / 9;
	const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight];

	if (videoSize.value.width !== windowWidth || videoSize.value.height !== windowHeight) {
		windowWidth / windowHeight > aspectRatio
			? (videoSize.value = {
					width: windowHeight * aspectRatio,
					height: windowHeight,
			  })
			: (videoSize.value = {
					width: windowWidth,
					height: windowWidth / aspectRatio,
			  });
	}
};

onMounted(() => {
	window.addEventListener("resize", updateVideoSize);
	updateVideoSize();
});

onBeforeUnmount(() => {
	window.removeEventListener("resize", updateVideoSize);
});

watchEffect(() => {
  if (videoSize.value.width !== window.innerWidth || videoSize.value.height !== window.innerHeight) {
    console.log('update video size');
    updateVideoSize();
  }
});
</script>

<template>
	<BRow class="flex-grow-1">
		<BCol class="margin-top d-flex align-items-center justify-content-center">
			<div class="video-wrapper">
				<div
					class="screen"
					:class="{ mute: isMuted, unmute: !isMuted }"
					@click="toggleMute">
				</div>
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
</template>

<style lang="sass" scoped>
.video-wrapper
  width: 100%
  height: fit-content
  padding-bottom: 40% 
  position: relative
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden

.video-wrapper iframe
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

.screen
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 3

.margin-top
  margin-top: 15vh
.mute
  cursor: url('src/assets/icons/mute.svg'),auto

.unmute
  cursor: url('src/assets/icons/unmute.svg'),auto

@media screen and (max-width: 730px)
  .margin-top
    margin-top: 10vh
  .video-wrapper
    height: 20vh
    
  #embed-code
   width: 100%
   height: auto
   padding-top: 11vh 
</style>
