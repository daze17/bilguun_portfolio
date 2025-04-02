import { getTranslations } from "next-intl/server";

import { ContactForm } from "./contact_form";

const ContactPage: React.Page = async () => {
  const t = await getTranslations();

  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased max-w-4xl mx-4 lg:mx-auto lg:py-12">
      <h1 className="font-semibold text-2xl my-4 tracking-tighter">
        {t("contact.title")}
      </h1>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
