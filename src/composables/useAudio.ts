let audioCtx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext()
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

const pentatonicMajor = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]
function getNote(index: number): number {
  return pentatonicMajor[index % pentatonicMajor.length]
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.15, startTime = 0) {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime)
  gain.gain.setValueAtTime(volume, ctx.currentTime + startTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(ctx.currentTime + startTime)
  osc.stop(ctx.currentTime + startTime + duration)
}

export function useAudio() {
  function playMergeSound(value: number) {
    const octave = Math.min(Math.floor(Math.log2(value)), 10)
    const noteCount = Math.min(Math.floor(Math.log2(value) / 2), 8)

    for (let i = 0; i < noteCount; i++) {
      const note = getNote(octave + i)
      playTone(note, 0.12, 'triangle', 0.12, i * 0.04)
    }
  }

  function playSlideSound() {
    const ctx = getCtx()
    const noise = ctx.createBufferSource()
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.1 * (1 - i / data.length)
    }
    noise.buffer = buffer

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)

    const filter = ctx.createBiquadFilter()
    filter.type = 'highpass'
    filter.frequency.setValueAtTime(800, ctx.currentTime)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    noise.start()
    noise.stop(ctx.currentTime + 0.05)
  }

  function playExpandSound() {
    const notes = [523.25, 659.25, 783.99, 1046.50]
    for (let i = 0; i < 4; i++) {
      playTone(notes[i], 0.3, 'triangle', 0.18, i * 0.15)
    }
  }

  function playGameOverSound() {
    const ctx = getCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(200, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.8)
    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.8)
  }

  function playUndoSound() {
    for (let i = 3; i >= 0; i--) {
      const note = getNote(i)
      playTone(note, 0.1, 'sine', 0.08, (3 - i) * 0.04)
    }
  }

  return {
    playMergeSound,
    playSlideSound,
    playExpandSound,
    playGameOverSound,
    playUndoSound,
  }
}
