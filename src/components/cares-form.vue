<template>
    <div class="form-container">
        <h1 class="form-title">Shift your career into overdrive!</h1>
        <!-- Form start -->
        <form class="form" onsubmit="return false">
            <!-- Feedback Message start-->
            <transition name="bounce">
                <div v-if="formSuccess" class="form-feedback">
                    <span>
                        <h2>
                            <span class="form-feedback-icon">&#x2714;</span
                            >Success
                        </h2>
                        <p>You're all signed up!</p>
                    </span>
                </div>
            </transition>
            <!-- Feedback Message end -->
            <p class="form-p">
                We're seeking friendly, happy individuals up for the challenge
                to change the way people view the automotive industry. If you
                agree that a customer's time is valuable and positive human
                interaction is important, then we want to hear from you!
            </p>
            <label class="form-label" for="name">Name (required)</label>
            <input
                id="name"
                class="form-input"
                v-model="name"
                type="text"
                placeholder="Name"
                required
            />
            <h2></h2>
            <label class="form-label" for="lastName">Phone</label>
            <input
                id="phone"
                type="tel"
                class="form-input"
                v-model="phone"
                name="phone"
                placeholder="Phone"
            />

            <button
                type="submit"
                @click="submitForm"
                id="form-btn"
                class="form-submit"
            >
                I'm Interested!
            </button>
        </form>
        <!-- Form end -->
        <div class="form-img">
            <img
                :src="require('@/assets/careers.jpg')"
                alt="Excited new car owner"
            />
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: 'CaresForm',
    data() {
        return {
            name: '',
            phone: '',
            formSuccess: false,
        };
    },
    methods: {
        submitForm() {
            if (this.name != '') {
                // Commit to state update
                this.$store.commit('updateName', this.name);
                this.$store.commit('updatePhone', this.phone);

                // Disable submit btn
                document.getElementById('form-btn').disabled = true;

                // Delay 1.5s, then show form feedback message and re-enable submit btn
                setTimeout(() => {
                    this.formSuccess = true;
                    document.getElementById('form-btn').disabled = false;
                }, 1500);

                // Delay 4s, then hide form feedback message
                setTimeout(() => {
                    this.formSuccess = false;
                }, 4000);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
// Form Flex settings
.form-container {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
}
.form-title {
    -webkit-flex: 0 1 100%;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
}
.form {
    -webkit-flex: 1 1 50%;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
}
.form-img {
    flex: 0 1 100%;
}
// General styling
.form-container {
    margin-top: 4rem;
}
.form {
    position: relative;
}
.form-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
}
// Form Title, paragraph text
.form-title {
    font-size: 1.7rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    border-bottom: 7px solid var(--color-highlight);
}
.form-p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.3;
}
// Form inputs, buttons, labels
.form-input,
.form-submit {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 5px;
}
.form-label,
.form-submit {
    margin-top: 1.2rem;
    font-weight: 600;
    display: block;
}
.form-input {
    margin-top: 0.5rem;
    border: 1px solid #999;
    padding: 0.4rem 0.7rem;
}
.form-submit {
    width: 100%;
    padding: 0.9rem;
    font-size: 1.1rem;
    background: var(--color-highlight);
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
    margin-bottom: 2rem;
}
.form-submit:disabled {
    opacity: 0.4;
    cursor: wait;
}
.form-submit:hover {
    filter: brightness(0.9);
}
// Form feedback message
.form-feedback {
    background: rgb(255, 255, 255, 0.9);
    position: absolute;
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    top: 0;
    z-index: 3;
}
.form-img {
    // Set z-index higher on img to prevent feedback message from overlapping
    z-index: 5;
}
.form-feedback h2 {
    line-height: 1;
    margin: 0;
    font-size: 2.2rem;
    color: rgb(0, 136, 0);
    text-shadow: 0px 0px 3px rgb(0, 136, 0);
}
.form-feedback p {
    line-height: 1;
    margin: 0;
    font-size: 1.3rem;
    margin-top: 1rem;
}
.form-feedback-icon {
    font-size: 3.4rem;
}
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@media only screen and (min-width: 780px) {
    // Create space between form inputs and image
    .form {
        padding-right: 2rem;
    }

    .form-title {
        font-size: 2.7rem;
    }
    // On larger screens, place image to right of form
    .form-img {
        -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
    }
    .form-submit {
        margin-bottom: 0;
    }
    .form-img {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
    }
}
</style>
