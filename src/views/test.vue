<template>
  <div
    class="bg-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <h2 class="text-center text-3xl font-extrabold text-pink-500">Sign Up</h2>
      <form class="mt-8 space-y-6" @submit.prevent="submitForm">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              v-model="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-pink-500 placeholder-pink-500 text-pink-500 rounded-t-md focus:outline-none focus:shadow-outline-pink focus:border-pink-500 focus:z-10 sm:text-sm sm:leading-5"
              :class="{ 'border-red-500': usernameError }"
              placeholder="Username"
            />
            <p v-if="usernameError" class="text-red-500 text-xs italic">
              {{ usernameError }}
            </p>
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-pink-500 placeholder-pink-500 text-pink-500 focus:outline-none focus:shadow-outline-pink focus:border-pink-500 focus:z-10 sm:text-sm sm:leading-5"
              :class="{ 'border-red-500': emailError }"
              placeholder="Email address"
            />
            <p v-if="emailError" class="text-red-500 text-xs italic">
              {{ emailError }}
            </p>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-pink-500 placeholder-pink-500 text-pink-500 rounded-b-md focus:outline-none focus:shadow-outline-pink focus:border-pink-500 focus:z-10 sm:text-sm sm:leading-5"
              :class="{ 'border-red-500': passwordError }"
              placeholder="Password"
            />
            <p v-if="passwordError" class="text-red-500 text-xs italic">
              {{ passwordError }}
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-pink-400 group-hover:text-pink-300 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm12.045-4.242a.5.5 0 00-.708 0L9.5 9.793 7.163 7.456a.5.5 0 00-.707.707L8.793 11l-2.337 2.337a.5.5 0 00.707.707L9.5 11.707l2.337 2.337a.5.5 0 00.707-.707L10.207 11l2.338-2.342z"
                />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const usernameError = ref("");
    const emailError = ref("");
    const passwordError = ref("");

    const validateUsername = () => {
      if (!username.value) {
        usernameError.value = "Username is required.";
      } else {
        usernameError.value = "";
      }
    };

    const validateEmail = () => {
      if (!email.value) {
        emailError.value = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.value = "Invalid email format.";
      } else {
        emailError.value = "";
      }
    };

    const validatePassword = () => {
      if (!password.value) {
        passwordError.value = "Password is required.";
      } else if (password.value.length < 6) {
        passwordError.value = "Password must be at least 6 characters.";
      } else {
        passwordError.value = "";
      }
    };

    const submitForm = () => {
      validateUsername();
      validateEmail();
      validatePassword();

      if (!usernameError.value && !emailError.value && !passwordError.value) {
        // Submit form logic goes here
      }
    };

    return {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
      submitForm,
    };
  },
};
</script>
<style>
input:focus {
  border-color: #f687b3 !important;
  box-shadow: 0 0 0 2px rgba(246, 135, 179, 0.2) !important;
}
</style>
