"use server";

import { contactSchema } from "@/lib/contact-schema";

export type ContactActionState =
  | { ok: true }
  | { ok: false; message: string };

export async function submitContact(
  input: unknown,
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Sprawdź pola formularza i spróbuj ponownie.",
    };
  }

  // Delivery to an inbox is not connected yet. The payload is validated and
  // ready to forward once a phone number or mailbox is available.
  console.info("Wydma contact inquiry", {
    topic: parsed.data.topic,
    nameLength: parsed.data.name.length,
  });

  return { ok: true };
}
