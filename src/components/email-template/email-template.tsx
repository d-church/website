import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export function EmailTemplate({ name, message, email }: EmailTemplateProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
