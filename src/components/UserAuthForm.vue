<template>
  <div class="login_form">
    <h1>
      <slot name="title"></slot>
    </h1>
    <form @submit.prevent>
      <my-input
          :class="['input__login', {'error_input':v$.userLog.email.$error}]"
          placeholder="Email"
          v-model="v$.userLog.email.$model"/>
      <p class="error_message" v-if="!v$.userLog.email.$error"></p>
      <p class="error_message" v-for="error in v$.userLog.email.$errors" :key="error.uid"> {{ error.$message }}</p>
      <my-input
          :class="['input__login', {'error_input':v$.userLog.password.$error}]"
          placeholder="Password"
          v-model="v$.userLog.password.$model"
          type="password"/>
      <p class="error_message" v-if="!v$.userLog.password.$error"></p>
      <p class="error_message" v-for="error in v$.userLog.password.$errors" :key="error.uid">{{ error.$message }}</p>
      <my-button class="btn__login" @click="submitForm">
        <slot name="btn_form"></slot>
      </my-button>
      <slot name="title__choice"></slot>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {minLength, required, email} from '@vuelidate/validators'
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";

export default {
  name: "UserAuthForm",
  components: {MyButton, MyInput},
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      userLog: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    submitForm() {
      if (this.v$.$validate()) {
        this.$emit("submitForm", this.userLog);
      }
    }
  },
  validations() {
    return {
      userLog: {
        email: {required, email},
        password: {required, minLength: minLength(10)},
      }
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 40px;
  margin: 10px 0 20px 0;
}

.input__login {
  margin-top: 10px;
  margin-bottom: 5px;
  height: 60px;
  background-color: #f8f8f8;
  border: 2px solid #ccc !important;
}

.btn__login {
  margin-top: 10px;
  font-size: 20px;
}

.error_message {
  height: auto;
  min-height: 20px;
  margin: 0 0 0 10px;
  color: red;
  font-size: 16px;
}

.error_input {
  border: 2px solid red !important;
  background-color: #fff0f0;
}

form {
  margin-bottom: 20px;
}
</style>