import AgoraRTC from 'agora-rtc-sdk-ng'

export default class RTC {
  instance
  client
  localAudioTrack
  localVideoTrack
  appId = 'b45decf701cc4d6a91ba2ff7104e303c'

  /**
   * 订阅频道
   */
  subscribes = []

  /**
   * mode { 'rtc' ,'live'}
   * codec { 'h264', 'vp8' }
   * Safari < 12.1  codec = 'h264'
   */
  config

  /**
   * 不要直接用new来使用
   * @param {*} config
   */
  constructor(config) {
    this.config = config
    this.client = AgoraRTC.createClient(config)
  }

  /**
   * 单例
   * @param {config} config
   */
  static getInstance(config) {
    if (!RTC.instance) {
      RTC.instance = new RTC(config)
    }
    return RTC.instance
  }

  destroy() {
    this.instance = null
  }

  /**
   * 加入房间
   * @param {*} channel
   * @param {*} userId
   * @param {*} token
   */
  async join(channel, userId = null, token = null) {
    return await this.client.join(this.appId, channel, token, userId)
  }

  /**
   * 发布本地流
   * @param {*} type
   */
  async publish(type = { audio: true, video: true }) {
    const publish = []
    if (type.audio) {
      this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack()
      publish.push(this.localAudioTrack)
    }
    if (type.video) {
      this.localVideoTrack = await AgoraRTC.createCameraVideoTrack()
      publish.push(this.localVideoTrack)
    }
    if (publish.length) {
      return await this.client.publish(publish)
    } else {
      throw new Error('请填写使用正确的参数!')
    }
  }
}
