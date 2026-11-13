import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { contactInfo } from "../data/siteData";
import "../styles/ContactForm.css";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Please enter a subject.";
  }

  return errors;
}

interface ContactFormProps {
  title?: string;
}

export default function ContactForm({
  title = "Your Contact details",
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  // Check all validations
  const isFormValid =
    values.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) &&
    values.subject.trim().length >= 3;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    const updatedValues = {
      ...values,
      [name]: value,
    };

    setValues(updatedValues);
    setErrors(validate(updatedValues));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) return;

    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;

    const link = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = link;

    setSent(true);
    setValues(emptyValues);
    setErrors({});
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>{title}</h3>

      <label htmlFor="cf-name">Your name</label>
      <input
        id="cf-name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && (
        <span className="form-error">{errors.name}</span>
      )}

      <label htmlFor="cf-email">Your email</label>
      <input
        id="cf-email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && (
        <span className="form-error">{errors.email}</span>
      )}

      <label htmlFor="cf-subject">Subject</label>
      <input
        id="cf-subject"
        name="subject"
        type="text"
        value={values.subject}
        onChange={handleChange}
      />
      {errors.subject && (
        <span className="form-error">{errors.subject}</span>
      )}

      <label htmlFor="cf-message">Your message (optional)</label>
      <textarea
        id="cf-message"
        name="message"
        rows={4}
        value={values.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="btn"
        disabled={!isFormValid}
      >
        Send
      </button>

      {sent && (
        <p className="form-note">
          Your email app should now open with the message ready to send.
          This website has no server to receive messages directly.
        </p>
      )}
    </form>
  );
}