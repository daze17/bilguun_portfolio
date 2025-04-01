import { ContactForm } from "./contact_form";

const ContactPage: React.Page = () => {
  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased max-w-4xl mx-4 lg:mx-auto lg:py-12">
      <h1 className="font-semibold text-2xl my-4 tracking-tighter">Contact</h1>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
