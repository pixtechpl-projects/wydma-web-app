"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { submitContact } from "@/app/kontakt/actions";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { inquiryTopics } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      topic: "" as ContactValues["topic"],
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setFormError(null);
    const result = await submitContact(values);
    if (result.ok) {
      setSent(true);
      return;
    }
    setFormError(result.message);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-[2rem] border border-ink/10 bg-white p-8"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-ink/50 uppercase">
          Wiadomość przyjęta
        </p>
        <h2 className="mt-3 font-heading text-4xl text-ink">Dziękujemy.</h2>
        <p className="mt-4 text-lg leading-8 text-ink/80">
          Odpiszemy na podany adres e-mail, żeby omówić szczegóły projektu.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8"
    >
      <FieldGroup>
        <Field
          className="h-[108px] shrink-0 overflow-hidden px-[4px]"
          data-invalid={errors.name ? true : undefined}
        >
          <FieldLabel htmlFor="name">
            Imię i nazwisko lub nazwa firmy
          </FieldLabel>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Np. Anna Kowalska"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="name-error" errors={[errors.name]} />
        </Field>

        <Field
          className="h-[108px] shrink-0 overflow-hidden px-[4px]"
          data-invalid={errors.email ? true : undefined}
        >
          <FieldLabel htmlFor="email">Adres e-mail</FieldLabel>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="np. anna@firma.pl"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" errors={[errors.email]} />
        </Field>

        <Field
          className="h-[108px] shrink-0 overflow-hidden px-[4px]"
          data-invalid={errors.topic ? true : undefined}
        >
          <FieldLabel htmlFor="topic">Czego dotyczy zapytanie?</FieldLabel>
          <NativeSelect
            id="topic"
            defaultValue=""
            aria-invalid={errors.topic ? true : undefined}
            aria-describedby={errors.topic ? "topic-error" : undefined}
            {...register("topic")}
          >
            <option value="" disabled>
              Wybierz temat
            </option>
            {inquiryTopics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </NativeSelect>
          <FieldError id="topic-error" errors={[errors.topic]} />
        </Field>

        <Field
          className="h-[200px] shrink-0"
          data-invalid={errors.message ? true : undefined}
        >
          <FieldLabel htmlFor="message">Wiadomość</FieldLabel>
          <Textarea
            id="message"
            className="h-36 min-h-36 shrink-0"
            placeholder="Opowiedz krótko, czego potrzebujesz."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          <div className="h-5 overflow-hidden">
            <FieldError id="message-error" errors={[errors.message]} />
          </div>
        </Field>
      </FieldGroup>

      {formError ? (
        <p role="alert" className="mt-4 text-sm font-medium text-destructive">
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        className="mt-6 w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}
