'use server';

/**
 * @fileOverview Implements the keyword alerts functionality, providing real-time alerts when specific keywords are mentioned in TV channels.
 *
 * - keywordAlerts - A function that initiates the keyword alerts flow.
 * - KeywordAlertsInput - The input type for the keywordAlerts function.
 * - KeywordAlertsOutput - The return type for the keywordAlerts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KeywordAlertsInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      'Audio data URI from the TV channel, must include MIME type and Base64 encoding (data:<mimetype>;base64,<encoded_data>)'
    ),
  keywords: z.array(z.string()).describe('Array of keywords to monitor.'),
  channelName: z.string().describe('Name of the TV channel being monitored.'),
});
export type KeywordAlertsInput = z.infer<typeof KeywordAlertsInputSchema>;

const KeywordAlertsOutputSchema = z.object({
  alert: z.boolean().describe('True if any of the keywords were detected in the audio.'),
  triggeredKeywords: z.array(z.string()).describe('Keywords that triggered the alert.'),
  transcript: z.string().describe('The transcript of the audio.'),
});
export type KeywordAlertsOutput = z.infer<typeof KeywordAlertsOutputSchema>;

export async function keywordAlerts(input: KeywordAlertsInput): Promise<KeywordAlertsOutput> {
  return keywordAlertsFlow(input);
}

const keywordAlertsPrompt = ai.definePrompt({
  name: 'keywordAlertsPrompt',
  input: {schema: KeywordAlertsInputSchema},
  output: {schema: KeywordAlertsOutputSchema},
  prompt: `You are a real-time news analysis tool monitoring the TV channel "{{channelName}}".

  Transcribe the following audio and identify if any of the following keywords are mentioned:
  {{keywords}}.

  Return whether an alert should be triggered, the keywords that triggered the alert, and the full transcript of the audio.

  Audio: {{media url=audioDataUri}}`,
});

const keywordAlertsFlow = ai.defineFlow(
  {
    name: 'keywordAlertsFlow',
    inputSchema: KeywordAlertsInputSchema,
    outputSchema: KeywordAlertsOutputSchema,
  },
  async input => {
    const {output} = await keywordAlertsPrompt(input);
    return output!;
  }
);
