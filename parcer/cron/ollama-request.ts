import axios, { AxiosError } from "axios";

export async function queryOllama(
  prompt: string,
  maxAttempts = 5
): Promise<boolean | null> {
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      const response = await axios.post("http://localhost:11434/api/generate", {
        model: "llama3.2:3b",
        prompt: prompt,
        stream: false,
      });

      const rawAnswer = response.data.response.trim().toLowerCase();

      let finalAnswer: boolean | null = null;

      if (rawAnswer.includes("true") && !rawAnswer.includes("false")) {
        finalAnswer = true;
      } else if (rawAnswer.includes("false") && !rawAnswer.includes("true")) {
        finalAnswer = false;
      } else {
        console.warn(
          `❓ Спроба ${attempt + 1}: нечітка відповідь — повторюємо запит...`
        );
        attempt++;
        continue;
      }

      console.log("✅ Raw model response:\n", rawAnswer);
      console.log("✅ Parsed answer:", finalAnswer);
      return finalAnswer;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("❌ Error status:", error.response.status);
        console.error("❌ Answer:", error.response.data);
      } else {
        console.error("❌ Невідома помилка:", error);
      }

      break;
    }
  }

  console.error("❌ Не вдалося отримати чітку відповідь після кількох спроб.");
  return null;
}
