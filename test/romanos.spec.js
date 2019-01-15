import { expect } from 'chai'
import { Nromanos } from '../src/romanos'

describe('Numeros Romanos', () => {

  describe("Quando passo 7-----------------", () => {
    it("Deve retornar 'VII'", () => {
      let n = new Nromanos();
      expect(n.retorne(7)).to.equal('VII')
    })
  })

  describe("Quando passo 8-----------------", () => {
    it("Deve retornar 'VIII'", () => {
      let n = new Nromanos();
      expect(n.retorne(8)).to.equal('VIII')
    })
  })

  describe("Quando passo 10-----------------", () => {
    it("Deve retornar 'X'", () => {
      let n = new Nromanos();
      expect(n.retorne(10)).to.equal('X')
    })
  })

  describe("Quando passo 88-----------------", () => {
    it("Deve retornar 'LXXXVIII'", () => {
      let n = new Nromanos();
      expect(n.retorne(88)).to.equal('LXXXVIII')
    })
  })

  describe("Quando passo 786-----------------", () => {
    it("Deve retornar 'DCCLXXXVI'", () => {
      let n = new Nromanos();
      expect(n.retorne(786)).to.equal('DCCLXXXVI')
    })
  })

  describe("Quando passo 9-----------------", () => {
    it("Deve retornar 'IX'", () => {
      let n = new Nromanos();
      expect(n.retorne(9)).to.equal('IX')
    })
  })
  
  describe("Quando passo 99-----------------", () => {
    it("Deve retornar 'XCIX'", () => {
      let n = new Nromanos();
      expect(n.retorne(99)).to.equal('XCIX')
    })
  })

  describe("Quando passo 949-----------------", () => {
    it("Deve retornar 'CMXLIX'", () => {
      let n = new Nromanos();
      expect(n.retorne(949)).to.equal('CMXLIX')
    })
  })

  describe("Quando passo 3496-----------------", () => {
    it("Deve retornar 'MMMCDXCVI'", () => {
      let n = new Nromanos();
      expect(n.retorne(3496)).to.equal('MMMCDXCVI')
    })
  })

  describe("Quando passo 3999-----------------", () => {
    it("Deve retornar 'MMMCMXCIX'", () => {
      let n = new Nromanos();
      expect(n.retorne(3999)).to.equal('MMMCMXCIX')
    })
  })

  describe("Quando passo 4500-----------------", () => {
    it("Deve retornar 'Fora do intervalo'", () => {
      let n = new Nromanos();
      expect(n.retorne(4500)).to.equal('Fora do intervalo')
    })
  })
})
