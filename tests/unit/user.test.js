const bcrypt = require('bcryptjs')
const { User } = require('../../src/app/models')

const truncate = require('../util/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('Should encrypt user password', async () => {
    const user = await User.create({ 
      name: 'Henrique Vieira', 
      email: 'henrique.vieira@luby.software', 
      password: '123123' 
    })

    const compareHash = await bcrypt.compare(user.password, user.password_hash)

    expect(compareHash).toBe(true)
  })
})