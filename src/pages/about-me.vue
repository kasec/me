<template>
    <top-bar/>
    <section>
        <img class="lazy cover-image" loading="lazy" :src="img_src" alt="random picture">
        <div class="cover-text">
            <p class="main-text -title">Hi guys!</p>
            <p class="main-text -subtitle">It is not another Meme's Page, its me in that picture.</p> 
            <p class="main-text">I'm a <span class="-strong">Web Developer</span>  and blogger from <span class="-strong">Durango, Mexico.</span></p> 
        </div>
    </section>
    <Footer/>
</template>
<script>
import Footer from 'components/Footer.vue'
import TopBar from 'components/TopBar.vue'

export default {
    components: { Footer, TopBar },
    data() {
        return { img_src: '' }
    },
    mounted() {
        const getImageNumber = (() => Math.ceil(Math.random() * 7))();
        const image = document.querySelector('#cover-image');
        const SRC = './assets/images/pics/' + getImageNumber + '.jpg';
        console.log('adding something', SRC);

        if (image) {
            image.dataset.src = SRC;
            image.dataset.srcset = SRC;
        }

        this.img_src = SRC
    }
}
</script>
<style lang="postcss" scoped>
section {
    @apply 
    py-8
    px-8
    max-w-xl
    mx-auto
    bg-white
    rounded-xl
    shadow-md
    space-y-2
    sm:py-4
    sm:flex
    sm:items-center
    sm:space-y-0
    sm:space-x-6
}
section > .cover-image {
    @apply  block mx-auto h-40
}
section > .cover-text {
    @apply text-center space-y-2 sm:text-left
}
</style>