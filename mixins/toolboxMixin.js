export default {
  methods: {
    // 1313412 => 131.4W
    formatW(num) {
      if (num >= 10000) {
        num = (num / 10000 + 0.1).toFixed(1) + 'W'
      }
      return num
    },
    formateTime(time) {
      time = new Date(time).getTime()
      const dateNow = new Date()
      const dateTime = new Date(time)
      const distance = dateNow.getTime() - time

      const days = parseInt(distance / (1000 * 60 * 60 * 24))
      let dateHours = dateTime.getHours()
      if (dateHours < 10) {
        dateHours = '0' + dateHours
      }
      let dateMinutes = dateTime.getMinutes()
      if (dateMinutes < 10) {
        dateMinutes = '0' + dateMinutes
      }
      if (days === 1) {
        return '昨天' + dateHours + ':' + dateMinutes
      } else if (days === 2) {
        return days + '天前' + dateHours + ':' + dateMinutes
      } else if (days >= 2) {
        const year = dateTime.getFullYear()
        let month = dateTime.getMonth() + 1
        if (month < 10) {
          month = '0' + month
        }
        let day = dateTime.getDate()
        if (day < 10) {
          day = '0' + day
        }
        if (dateNow.getFullYear() === year) {
          return month + '月' + day + '日' + dateHours + ':' + dateMinutes
        } else {
          return (
            year +
            '年' +
            month +
            '月' +
            day +
            '日' +
            dateHours +
            ':' +
            dateMinutes
          )
        }
      }

      const hours = parseInt(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      if (hours > 0) {
        return hours + '小时前'
      }

      const minutes = parseInt((distance % (1000 * 60 * 60)) / (1000 * 60))
      if (minutes > 0) {
        return minutes + '分钟前'
      }
      return '刚刚'
    },
  },
}
