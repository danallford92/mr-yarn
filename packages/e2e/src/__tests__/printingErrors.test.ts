import { resolve } from 'path'
import { exec } from '../utils'

/**
 * Fixtures directory containing variants of workspace setup to assert against
 */
const fixturesDir = resolve(process.cwd(), 'src/__fixtures__')

it('Should print an errors', async () => {
  const { stdout } = await exec('mr add deep-freeze', { cwd: resolve(fixturesDir, 'invalid') })

  expect(stdout).toMatchSnapshot()
})
