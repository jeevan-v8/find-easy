import { getResponse } from "@/libs/chatbot/chatgpt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.query;
  const response = await getResponse(prompt as string);
  // const response = process.env.OPEN_AI_API_KEY;

  res.status(200).json({ name: response });
}
