import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Hello from {name}!</h1>
    <div>
      <p>You have a new message from {name}:</p>
      <p>{message}</p>
    </div>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);
