<template>
  <nav class="navbar amber darken-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('sidebar-action')">
          <i class="material-icons black-text">menu</i>
        </a>
        <span class="black-text">{{ date | date('datetime') }}</span>
      </div>

      <drop-down-list
      :list-options="{ coverTrigger: false, alignment: 'right', constrainWidth: false }"
      :list-content="navBarDropdownList"
      :userInfo="userInfo"
      @dropdownAction="dropdownAction($event)"/>
    </div>
  </nav>
</template>

<script>
import DropDownList from './DropDownList';
import localeFilter from '../helpers/filters/localeFilter';

export default {
  name: 'MainNavbar',
  components: {
    DropDownList,
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  props: {
    userInfo: {
      type: Object,
      default() {
        return { name: 'Empty' };
      },
    },
  },
  methods: {
    dropdownAction(val) {
      if (val === 0) {
        this.$router.push('/profile');
      }
      if (val === 1) {
        this.logout();
      }
    },
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    },
  },
  computed: {
    navBarDropdownList() {
      return [
        {
          value: 0,
          path: '/profile',
          title: localeFilter('profile_title'),
          icon: 'account_circle',
        },
        {
          value: 1,
          path: '/login?message=logout',
          title: localeFilter('exit'),
          icon: 'assignment_return',
        },
      ];
    },
  },
  data: () => ({
    date: new Date(),
    interval: null,
  }),
};
</script>
