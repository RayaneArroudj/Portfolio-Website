import {
  Body,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderMail: string;
};

export default function ContactFormEmail({
  message,
  senderMail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-400 text-black">
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              You received the following message from the contact form
            </Heading>
            <Text>{message}</Text>
            <Hr></Hr>
            <Text>The sender email is: {senderMail}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
