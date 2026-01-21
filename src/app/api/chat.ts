const DEFAULT_CHAT_API_URL = '/api/chat';

type ChatApiPayload = {
  session_id: string;
  message: string;
};

export type ChatApiResult = {
  text: string;
  raw: unknown;
};

const resolveChatApiUrl = () => {
  const env = (import.meta as { env?: Record<string, string> }).env;
  const envUrl = env?.VITE_CHAT_API_URL;
  const url = envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0
    ? envUrl
    : DEFAULT_CHAT_API_URL;
  console.log('Chat API URL:', url);
  return url;
};

const extractResponseText = (data: Record<string, unknown>): string | null => {
  const candidates = [
    data.reply,
    data.response,
    data.message,
    data.text,
    data.answer,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim().length > 0) {
      return candidate;
    }
  }

  return null;
};

export async function sendChatMessage(
  message: string,
  sessionId: string,
  signal?: AbortSignal
): Promise<ChatApiResult> {
  const env = (import.meta as { env?: Record<string, string> }).env;
  const debugStop = env?.VITE_CHAT_DEBUG === 'true';
  const url = resolveChatApiUrl();

  if (debugStop) {
    console.log('Chat API URL:', url);
    throw new Error('Chat API debug stop enabled (VITE_CHAT_DEBUG=true)');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ session_id: sessionId, message } satisfies ChatApiPayload),
    signal,
  });

  console.log('Chat API request:', { sessionId, message });
  console.log('Chat API response:', response);

  if (!response.ok) {
    throw new Error(`Chat API request failed (${response.status})`);
  }

  const contentType = response.headers.get('content-type') ?? '';
  let data: Record<string, unknown> = {};
  let rawText: string | null = null;

  if (contentType.includes('application/json')) {
    data = (await response.json()) as Record<string, unknown>;
  } else {
    rawText = await response.text();
    data = { text: rawText };
  }

  const text = extractResponseText(data)
    ?? rawText?.trim()
    ?? 'Thanks! I am thinking about that.';

  return { text, raw: data };
}
