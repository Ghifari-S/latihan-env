
import { describe, it, expect } from 'vitest';
import { getEnvironment } from './getEnv';

describe('Environment Function', () => {
  it('mengembalikan variabel environment dengan benar', () => {
   
    process.env.NAME = 'test';
    process.env.DATABASE_URL = 'test-db-url';

    const env = getEnvironment();

   
    expect(env.name).toBe('test');
    expect(env.databaseUrl).toBe('test-db-url');
  });

  it('mengembalikan default jika variabel tidak terdefinisi', () => {
    
    delete process.env.NAME;
    delete process.env.DATABASE_URL;

    const env = getEnvironment();

    
    expect(env.name).toBe('unknown');
    expect(env.databaseUrl).toBe('no-url');
  });
  });