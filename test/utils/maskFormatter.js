import { expect } from 'chai'
import maskFormatter from '../../src/app/utils/maskFormatter'

describe('When mask is 00', () => {
  const mask = '00'

  describe('And oldValue is empty string', () => {
    let oldValue = ''

    it('And key is a number', () => {
      const key = '5'
      const value = maskFormatter({ mask, oldValue, key })

      expect(value).to.be.equal('5')
    })

    it('And key is Backspace', () => {
      const key = 'Backspace'
      const value = maskFormatter({ mask, oldValue, key })

      expect(value).to.be.equal('')
    })

    it('And key is not a number neither Backspace', () => {
      const key = '#'
      const value = maskFormatter({ mask, oldValue, key })

      expect(value).to.be.equal('')
    })
  })

  describe('And oldValue is not empty', () => {
    describe('And mask is unfinished', () => {
      const oldValue = '3'

      it('And key is a number', () => {
        const key = '7'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('37')
      })

      it('And key is Backspace', () => { const key = 'Backspace'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('')
      })

      it('And key is not a number neither Backspace', () => {
        const key = '#'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('3')
      })
    })

    describe('And mask is finished', () => {
      const oldValue = '12'

      it('And key is a number', () => {
        const key = '7'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('12')
      })

      it('And key is Backspace', () => {
        const key = 'Backspace'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('1')
      })

      it('And key is not a number neither Backspace', () => {
        const key = '#'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('12')
      })
    })

  })
})

describe('When mask is #0--0.0-', () => {
  const mask = '#0--0.0-'

  describe('And oldValue is empty string', () => {
    let oldValue = ''

    it('And key is a number', () => {
      const key = '5'
      const value = maskFormatter({ mask, oldValue, key })

      expect(value).to.be.equal('#5')
    })

    it('And key is Backspace', () => {
      const key = 'Backspace'
      const value = maskFormatter({ mask, oldValue, key })

      expect(value).to.be.equal('')
    })

    it('And key is not a number neither Backspace', () => {
      const key = '#'
      const value = maskFormatter({ mask, oldValue, key })

      expect(value).to.be.equal('')
    })
  })

  describe('And oldValue is not empty', () => {
    describe('And mask is unfinished', () => {
      const oldValue = '34'

      it('And key is a number', () => {
        const key = '7'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#3--4.7-')
      })

      it('And key is Backspace', () => {
        const key = 'Backspace'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#3')
      })

      it('And key is not a number neither Backspace', () => {
        const key = '#'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#3--4')
      })
    })

    describe('And mask is finished', () => {
      const oldValue = '123'

      it('And key is a number', () => {
        const key = '7'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#1--2.3-')
      })

      it('And key is Backspace', () => {
        const key = 'Backspace'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#1--2')
      })

      it('And key is not a number neither Backspace', () => {
        const key = '#'
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#1--2.3-')
      })
    })

    describe('And oldValue is not only numbers', () => {
      const oldValue = '#1--2.3-'

      it('And key is a number', () => {
        const key = '7' 
        const value = maskFormatter({ mask, oldValue, key })

        expect(value).to.be.equal('#1--2.3-')
      })
    })
  })
})
