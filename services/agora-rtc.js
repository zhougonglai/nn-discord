import AgoraRTC from 'agora-rtc-sdk-ng'

export default class RTC {
  instance
  client
  localAudioTrack
  localVideoTrack
  remoteAudioTrack
  remoteVideoTrack
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
  config = {
    mode: 'rtc',
    codec: 'vp8',
  }

  AudioTrackConfig = {
    AEC: true, // 回声消除
    AGC: true, // 自动增益
    ANS: true, // 噪声抑制
    // https://agoraio-community.github.io/AgoraWebSDK-NG/api/cn/globals.html#audioencoderconfigurationpreset
    encoderConfig: 'high_quality_stereo',
    // microphoneId
  }

  /**
   * 不要直接用new来使用
   * @param {*} config
   */
  constructor() {
    this.client = AgoraRTC.createClient(this.config)
  }

  /**
   * 单例
   */
  static getInstance() {
    if (!RTC.instance) {
      RTC.instance = new RTC()
    }
    return RTC.instance
  }

  setConfig(config) {
    this.config = config
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
      this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack({})
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

  async leave() {
    if (this.localAudioTrack) {
      this.localAudioTrack.close()
    }

    if (this.localVideoTrack) {
      this.localVideoTrack.close()
    }

    await this.client.leave()
  }

  /**
   * @property {number} num [0~1000] 100为原始音量
   */
  set localAudioVolume(num) {
    this.localAudioTrack.setVolume(num)
  }

  /**
   * @return [0, 1] 声音质量
   */
  get localAudioVolume() {
    return this.localAudioTrack.getVolumeLevel()
  }

  async getDevices() {
    const devices = await AgoraRTC.getDevices()
    const audioDevices = devices.filter(
      (device) => device.kind === 'audioinput'
    )
    const videoDevices = devices.filter(
      (device) => device.kind === 'videoinput'
    )
    return { audioDevices, videoDevices }
  }

  changeCamera(cameraId) {
    this.localVideoTrack.setDevice(cameraId)
  }

  get localAudioTrackStatus() {
    return this.localAudioTrack.getStatus()
  }

  get localVideoTrackStatus() {
    return this.localVideoTrack.getStatus()
  }

  /**
   * @property {*} status
   * { downlinkNetworkQuality, uplinkNetworkQuality }
   * {
   *  0 = '网络质量未知。'
   *  1 = '网络质量极好。'
   *  2 = '用户主观感觉和极好差不多，但码率可能略低于极好。'
   * }
   * @param {*} callback
   */
  networkQuality(callback) {
    this.client.on('network-quality', callback)
  }
}
