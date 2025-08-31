import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_EMAIL_SEND_TO: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
  },
  runtimeEnv: {
    RESEND_EMAIL_SEND_TO: process.env.RESEND_EMAIL_SEND_TO,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  emptyStringAsUndefined: false,
});
