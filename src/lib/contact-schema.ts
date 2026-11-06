import { z } from "zod";

import { inquiryTopics } from "@/lib/site";

export const inquiryTopicValues = inquiryTopics.map((topic) => topic.value) as [
  (typeof inquiryTopics)[number]["value"],
  ...(typeof inquiryTopics)[number]["value"][],
];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Podaj imię i nazwisko albo nazwę firmy.")
    .max(120, "To pole jest za długie."),
  email: z.email("Podaj poprawny adres e-mail."),
  topic: z.enum(inquiryTopicValues, "Wybierz temat zapytania."),
  message: z
    .string()
    .trim()
    .min(20, "Opisz krótko, czego potrzebujesz.")
    .max(4000, "Wiadomość jest za długa."),
});

export type ContactValues = z.infer<typeof contactSchema>;
