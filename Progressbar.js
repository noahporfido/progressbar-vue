import {
  mapGetters,
  mapMutations
} from 'vuex';
export default {
  name: 'MainContent',
  components: {},
  data() {
    return {
      progress: this.percent,
      width: this.percent
    };
  },
  props: ['name', 'percent', 'color'],
  methods: {},
  computed: {
    ...mapGetters(['getIsLoading']),
    getWidth() {
      let progressWidth = 0;
      if (this.getIsLoading) {
        progressWidth = this.width;
      } else {
        progressWidth = 0;
      }
      return progressWidth;
    }
  },
}
