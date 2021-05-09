<template>
    <div class="chapman-cares">
        <HeadingText>Chapman Cares</HeadingText>

        <img
            :src="require('@/assets/cares-banner.jpg')"
            alt="Chapman Cares"
            class="banner-img"
        />

        <div v-for="(event, index) in events" :key="index" class="event">
            <h3 class="event-name">{{ event.name }}</h3>

            <div class="event-img">
                <img
                    class="event-img"
                    :src="require('@/assets/' + event.imgSrc)"
                    :alt="event.imgAlt"
                    height="300px"
                />
            </div>

            <p class="event-text">{{ event.text }}</p>
        </div>
    </div>
</template>

<script>
import HeadingText from '@/components/heading-text';

export default {
    name: 'ChapmanCares',
    components: {
        HeadingText,
    },
    data() {
        return {
            events: [
                {
                    name: 'Making Strides Against Cancer',
                    text:
                        'Thousands of people, young and old, participated in the Making Strides Against Breast Cancer event at Tempe Beach Park. As a sponsorship partner, Chapman Auto brought the Breast Cancer Pace Car, driven by Danica Patrick. Chapman Auto employees participated in the walk, helping to raise thousands of dollars for breast cancer research.',
                    imgSrc: 'making-strides.jpg',
                    imgAlt: 'Crowd surrounding the Breast Cancer Pace Car',
                },
                {
                    name: 'Canine Companions For Independence',
                    text:
                        'Chapman Auto has been a proud supporter of Canine Companions for Independence for more than 10 years. From sponsoring a golf tournament to puppy training, Chapman Auto employees are proud to work with CCI as they help others live happy, independent lives.',
                    imgSrc: 'canine-companions.jpg',
                    imgAlt: 'Three happy puppies',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.banner-img {
    width: 100%;
}
.event {
    margin-top: 2rem;
}
.event-name {
    margin-bottom: 1rem;
}

.event {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: center;
}
.event-name {
    -webkit-flex: 0 1 100%;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
    font-style: italic;
    font-size: 1.4rem;
}
.event-img {
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    margin: 0 auto;
    max-height: 350px;
}
.event-img img {
    width: 100%;
    height: auto;
    box-shadow: 12px 10px 0px rgb(220, 220, 220);
}
.event-text {
    -webkit-flex: 1 1 50%;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    line-height: 1.5;
    padding: 1rem;
    font-size: 1rem;
    align-self: center;
    text-indent: 20px;
}
@media only screen and (min-width: 500px) {
    .event-text {
        font-size: 1.2rem;
        padding: 1.3rem 2.4rem;
    }
}
</style>
