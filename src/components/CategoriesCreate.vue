<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{ 'btn_create' | locale }}</h4>
      </div>

      <form @submit.prevent="createCategory">
        <div class="input-field">
          <input
            id="createName"
            type="text"
            v-model="name"
            :class="{ invalid: validateName }"
          >
          <label for="createName">{{ 'title' | locale }}</label>
          <span
            v-if="validateName"
            class="helper-text invalid">{{ 'input_category_validate' | locale }}</span>
        </div>

        <div class="input-field">
          <input
            id="createLimit"
            type="number"
            v-model.number="limit"
            :class="{ invalid: validateLimit }"
          >
          <label for="createLimit">{{ 'limit' | locale }}</label>
          <span
            v-if="validateLimit"
            class="helper-text invalid">
            {{ 'input_limit_validate' | locale }} {{ $v.limit.$params.minValue.min }}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          {{ 'btn_create' | locale }}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators';

export default {
  name: 'CategoriesCreate',
  validations: {
    name: { required },
    limit: { minValue: minValue(100) },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    M.updateTextFields();
  },
  methods: {
    async createCategory() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.$store.dispatch('createCategory', {
          name: this.name,
          limit: this.limit,
        });
        this.resetCategoryForm();
      } catch (e) {}
    },
    resetCategoryForm() {
      this.name = '';
      this.limit = 100;
      this.$emit('update-categories');
      this.$v.reset();
    },
  },
  computed: {
    validateName() {
      return this.$v.name.$dirty && !this.$v.name.required;
    },
    validateLimit() {
      return this.$v.limit.$dirty && !this.$v.limit.minValue;
    },
  },
  data: () => ({
    name: '',
    limit: 100,
  }),
};
</script>
