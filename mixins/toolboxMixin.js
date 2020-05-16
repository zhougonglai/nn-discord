export default {
  methods: {
    // 1313412 => 131.4W
    formatW(num) {
      if (num >= 10000) {
        num = (num / 10000 + 0.1).toFixed(1) + 'W'
      }
      return num
    },
  },
}
