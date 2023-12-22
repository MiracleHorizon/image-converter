import { describe, expect, it } from 'vitest'

import { cropFileName } from './cropFileName'

describe('cropFileName', () => {
  it('should crop file name', () => {
    expect(cropFileName('hello-world.png')).toBe('hello-world')
    expect(cropFileName('foo.jpeg')).toBe('foo')
    expect(cropFileName('bar.jpg')).toBe('bar')
    expect(cropFileName('baz.webp')).toBe('baz')
    expect(cropFileName('my-file-name.jpeg.webp')).toBe('my-file-name.jpeg')
    expect(cropFileName('my-file-name-1.webp.webp')).toBe('my-file-name-1.webp')
    expect(cropFileName('jpeg')).toBe('jpeg')
    expect(cropFileName('.png')).toBe('.png')
    expect(cropFileName('.')).toBe('.')
  })
})