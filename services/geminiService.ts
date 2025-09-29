
import { GoogleGenAI, Type } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const planSchema = {
  type: Type.OBJECT,
  properties: {
    workoutPlan: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: "A catchy title for the workout plan." },
        warmup: { type: Type.STRING, description: "A brief description of the warm-up routine." },
        exercises: {
          type: Type.ARRAY,
          description: "A list of exercises.",
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Name of the exercise." },
              sets: { type: Type.STRING, description: "Number of sets, e.g., '3-4'." },
              reps: { type: Type.STRING, description: "Number of repetitions, e.g., '8-12'." },
            },
            required: ["name", "sets", "reps"],
          },
        },
        cooldown: { type: Type.STRING, description: "A brief description of the cool-down routine." },
      },
       required: ["title", "warmup", "exercises", "cooldown"],
    },
    mealPlan: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: "A catchy title for the meal plan." },
        breakfast: { type: Type.STRING, description: "Description of the breakfast meal." },
        lunch: { type: Type.STRING, description: "Description of the lunch meal." },
        dinner: { type: Type.STRING, description: "Description of the dinner meal." },
        snacks: {
          type: Type.ARRAY,
          description: "A list of healthy snack options.",
          items: {
            type: Type.STRING,
          },
        },
      },
       required: ["title", "breakfast", "lunch", "dinner", "snacks"],
    },
  },
  required: ["workoutPlan", "mealPlan"],
};

export const generatePlan = async (goal: string, experience: string) => {
  const prompt = `You are an expert fitness coach and nutritionist for a men's lifestyle magazine. Create a personalized, one-day sample workout and meal plan for a user with the following profile. Goal: ${goal}. Experience Level: ${experience}. The plan should be motivating, clear, and actionable.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: planSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error generating plan from Gemini API:", error);
    throw new Error("Failed to generate a plan. Please try again.");
  }
};
