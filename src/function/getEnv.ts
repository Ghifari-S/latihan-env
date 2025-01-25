
export function getEnvironment() {
    const nodeEnv = process.env.NODE_ENV || 'unknown';
    const name = process.env.NAME || 'unknown';
    const databaseUrl = process.env.DATABASE_URL || 'no-url';
  
    return {
      nodeEnv,
      name,
      databaseUrl,
    };
  }