// @ts-nocheck

import { accelerate } from '../../../src/components/s3'

describe('defaults', () => {
  test('Default input', () => {
    expect(accelerate()).toEqual({ AccelerateConfiguration: { AccelerationStatus: 'Enabled' } })
  })
  test('Give Turn Off', () => {
    expect(accelerate(false)).toEqual({
      AccelerateConfiguration: { AccelerationStatus: 'Suspended' }
    })
  })
})
