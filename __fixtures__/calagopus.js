/**
 * This file is used to mock the `src/calagopus.js` module in tests.
 */
import { jest } from '@jest/globals'

export const sendPowerSignal = jest.fn()
export const getServerState = jest.fn()

export const createCalagopusClient = jest.fn(() => ({
  sendPowerSignal,
  getServerState
}))
