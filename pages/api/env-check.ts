
import type { NextApiRequest, NextApiResponse } from 'next';
import { getEnvironment } from '../../__test__/function/getEnv';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const env = getEnvironment();
  res.status(200).json(env);
}