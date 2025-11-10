import { describe, it, expect } from 'vitest';
import * as spc from '../../src';

describe('spc package skeleton', () => {
  it('can import SPC barrel without throwing', () => {
    expect(spc).toBeDefined();
  });
});

