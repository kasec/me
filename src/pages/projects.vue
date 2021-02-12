<template>
    <TopBar/>
    <section id="content">
        <div class="title-content">
            <p class="main-text -subtitle">I'm Web Developer, And below are what I've done ?</p>
            <p class="description">These are the main projects deployed.</p>
        </div>
        <div class="cards">
            <div class="card">
                <div class="header">
                    <p class="title">Vaul Platform</p>
                </div>
                <p class="data-tech">Built with Nextjs Server Side Renderer, NodeJS, ExpressJS, TypeORM, MariaDB, Cookies Auth Approach</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/vaul-gif.gif" data-srcset="/assets/images/pics/projects/vaul-gif.gif" src="/assets/images/pics/projects/vaul-gif.gif" alt="insert gif about platform"/>
                <p class="description">
                    I was a requested by a client the first module about mineral process its done, similar modules are coming.
                    It repo I cannot show it 'cause its a private project and I must not show proccess about it.
                    I have DDD, Solid Principles and Design patterns implemented here in Backend and Frontend as well.
                </p> 
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">IGFE Platform</p>
                </div>
                <p class="data-tech">Built with React, Golang, MaterialUI and Parcel</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/igfe-gif.gif" data-srcset="/assets/images/pics/projects/igfe-gif.gif" src="/assets/images/pics/projects/igfe-gif.gif" alt="insert gif about platform"/>
                <p class="description">
                    It's a custom web system requested by a client.
                    Was deployed in this month so its literraly young.
                    It's a private web system, so i cannot show code about it.
                </p> 
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">Payment Service - Stripe Implementation</p>
                    <div class="repository-link">
                        <a href="https://github.com/kasec/stripe-implementation" target="_blank">REPO</a>
                    </div>
                </div>
                <p class="data-tech">It is a payment service built with express and react deployed as a serverless lambda function in netlify</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/payment-gif.gif" data-srcset="/assets/images/pics/projects/payment-gif.gif" src="/assets/images/pics/projects/payment-gif.gif" alt="insert gif about platform"/>
                <p class="description">
                    Was originally a customer request.
                    I made a research in stripe documentation and samples and create this repo and with minimal configuration it was deployed.
                </p> 
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">Login Authentication</p>
                    <div class="repository-link">
                        <a href="https://github.com/kasec/angular-mongo-auth-challenge" target="_blank">REPO</a>
                    </div>
                </div>
                <p class="data-tech">Built with Angular, MongoDB, ExpressJS, PassportJS</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/auth.gif" data-srcset="/assets/images/pics/projects/auth.gif" src="/assets/images/pics/projects/auth.gif" alt="insert gif about platform"/>
                <p class="description">Was originally a challenge request it by a interviewer, in that moment I didn't pass the interview, but I made some improves and the best of everything I learn about it.</p> 
                <div class="footer">
                    <a href="https://angular-mongo-express.herokuapp.com/" target="_blank">Heroku Deploy</a>
                    <a href="https://mongo-angular-auth-dot-bionic-aspect-268100.uc.r.appspot.com/" target="_blank">GCP Deploy</a>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">Mini CRM</p>
                    <div class="repository-link">
                        <a href="https://gitlab.com/galfan/mini-crm-web" target="_blank">WEB</a>
                        <a href="https://gitlab.com/galfan/mini-crm-api" target="_blank">API-REST</a>

                    </div>
                </div>
                <div class="data-tech">
                    Split in 2(web & api)
                    <ul>
                        <li>Web built with NextJS(React) and Material UI</li>
                        <li>Api has been built with Node, Express and MariaDB.</li>
                    </ul>
                </div>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/mini-crm.gif" data-srcset="/assets/images/pics/projects/mini-crm.gif" src="/assets/images/pics/projects/mini-crm.gif" alt="insert gif about platform"/>
                <p class="description">Mainly I was creating a tool for my last job, but i never finished it, later, I fix some details to deploy it, now it is nor ready at all but it works.</p> 
                <div class="footer">
                    <a href="https://mini-crm-web-6b1me29or.now.sh/" target="_blank">Visit it</a>
                </div> 
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">Cruz Platform</p>
                    <div class="repository-link">
                        <a href="https://gitlab.com/galfan/cruz-platform-proto" target="_blank">REPO</a>
                    </div>
                </div>
                <p class="data-tech">Built with NextJS(React), Typescript and MaterialUI</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/cruz-proto.gif" data-srcset="/assets/images/pics/projects/cruz-proto.gif" src="/assets/images/pics/projects/cruz-proto.gif" alt="insert gif about platform"/>
                <p class="description">It was a system custom prototype with specific use case request by a particular customer.</p> 
                <div class="footer">
                    <a href="https://cruz-platform-proto.now.sh/" target="_blank">Visit it</a>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">Somos Tribu Landing Page Proposal</p>
                    <div class="repository-link">
                        <a href="https://gitlab.com/tribu.io/somos-tribu-landing" target="_blank">REPO</a>
                    </div>
                </div>
                <p class="data-tech">Built with Gatsby(React) and SASS(CSS Preprocessor)</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/somos-tribu.gif" data-srcset="/assets/images/pics/projects/somos-tribu.gif" src="/assets/images/pics/projects/somos-tribu.gif" alt="insert gif about platform"/>
                <p class="description">It was a Landing Page Proposal to a project team.</p> 
                <div class="footer">
                    <a href="https://somos-tribu.netlify.app/" target="_blank">Visit it</a>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <p class="title">Kitten Store Challenge</p>
                    <div class="repository-link">
                        <a href="https://gitlab.com/galfan/kitten-store-challenge" target="_blank">REPO</a>
                    </div>
                </div>
                <p class="data-tech">Built with React, Mobx, Formik and Antd</p>
                <img class="cover-img" lazy="loading" data-src="/assets/images/pics/projects/kitten-store.gif" data-srcset="/assets/images/pics/projects/kitten-store.gif" src="/assets/images/pics/projects/kitten-store.gif" alt="insert gif about platform"/>
                <p class="description">Kitten Store was originally a challenge. The goal was to learn about a different tech stack</p> 
                <div class="footer"><a href="https://reverent-leakey-05423b.netlify.app" target="_blank">Visit it</a></div>
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script setup>
import { useHead } from '@vueuse/head'

useHead({
    // Can be static or computed
    title: "Currently you are watching my projects",
    meta: [
        {
            name: `description`,
            content: "In this page are all my projects what I have built with differents techinlogies, check it out!",
        },
    ],
})

</script>
<style lang="postcss" scoped>
section#content {
    @apply pt-10 overflow-auto max-w-max flex flex-col
}
section#content > .title-content {
    @apply flex flex-col items-center mb-5 px-4
}
section#content > .cards {
    @apply flex flex-col flex-wrap sm:flex-row justify-around flex-shrink
}
section#content > .cards > .card {
    @apply sm:w-8/12 md:w-3/5 lg:w-5/12 xl:w-3/12 2xl:w-3/12 border-2 border-black p-4 m-4 flex flex-col justify-around flex-grow-0
}
section#content > .cards > .card > .header {
    @apply flex flex-row justify-between items-center border-b-2 border-black shadow-xl pb-2 flex-shrink
}
section#content > .cards > .card > .header > .title {
    @apply font-semibold
}
section#content > .cards > .card > .header > .repository-link > a {
    @apply border-black border-2 mx-1 p-1 hover:bg-black hover:text-white hover:bg-opacity-70
}
section#content > .cards > .card > .data-tech {
    @apply bg-gray-300 p-4 border-green-700 border-l-8 my-4 flex-shrink
}
section#content > .cards > .card > .cover-img {
    @apply m-auto max-w-sm flex-shrink
}
section#content > .cards > .card > .description {
    @apply text-xs font-normal pt-3 flex-shrink
}
section#content > .cards > .card > .footer {
    @apply flex flex-row items-center justify-end flex-shrink
}
section#content > .cards > .card > .footer > a {
    @apply bg-green-800 text-white p-2 mx-1 mt-4 hover:bg-green-900
}
</style>