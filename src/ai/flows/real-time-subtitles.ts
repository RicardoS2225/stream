// 'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating real-time subtitles from audio.
 *
 * - generateRealTimeSubtitles - A function that takes audio data and returns a stream of subtitles.
 * - GenerateRealTimeSubtitlesInput - The input type for the generateRealTimeSubtitles function.
 * - GenerateRealTimeSubtitlesOutput - The return type for the generateRealTimeSubtitles function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRealTimeSubtitlesInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The audio data URI, which must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});

export type GenerateRealTimeSubtitlesInput = z.infer<
  typeof GenerateRealTimeSubtitlesInputSchema
>;

const GenerateRealTimeSubtitlesOutputSchema = z.object({
  subtitles: z.string().describe('The generated subtitles.'),
});

export type GenerateRealTimeSubtitlesOutput = z.infer<
  typeof GenerateRealTimeSubtitlesOutputSchema
>;

export async function generateRealTimeSubtitles(
  input: GenerateRealTimeSubtitlesInput
): Promise<GenerateRealTimeSubtitlesOutput> {
  return generateRealTimeSubtitlesFlow(input);
}

const generateRealTimeSubtitlesPrompt = ai.definePrompt({
  name: 'generateRealTimeSubtitlesPrompt',
  input: {schema: GenerateRealTimeSubtitlesInputSchema},
  output: {schema: GenerateRealTimeSubtitlesOutputSchema},
  prompt: `Genera subtítulos en tiempo real a partir de los datos de audio proporcionados.

  Audio: {{media url=audioDataUri}}
  `,
});

const generateRealTimeSubtitlesFlow = ai.defineFlow(
  {
    name: 'generateRealTimeSubtitlesFlow',
    inputSchema: GenerateRealTimeSubtitlesInputSchema,
    outputSchema: GenerateRealTimeSubtitlesOutputSchema,
  },
  async input => {
    // Call the prompt to generate subtitles
    const {output} = await generateRealTimeSubtitlesPrompt(input);
    return output!;
  }
);
