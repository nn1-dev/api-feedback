import { Html } from "npm:@react-email/html";
import { Head } from "npm:@react-email/head";
import { Body } from "npm:@react-email/body";
import { Container } from "npm:@react-email/container";
import { Img } from "npm:@react-email/img";
import { Text } from "npm:@react-email/text";
import { Hr } from "npm:@react-email/hr";
import { render } from "npm:@react-email/render";
import style from "./style.tsx";

interface EmailFeedbackProps {
  name: string;
  stack: string;
  who: string;
  interval: string;
  feedback: string;
}

export const EmailFeedback = ({
  name,
  stack,
  who,
  interval,
  feedback,
}: EmailFeedbackProps) => (
  <Html>
    <Head />
    <Body style={style.body}>
      <Container>
        <Img
          src="https://nn1.dev/logo-email.png"
          width="119"
          height="28"
          alt="NN1 Dev Club Logo"
          style={style.img}
        />
        <Text style={style.text}>We just received a new feedback.</Text>
        <Hr style={style.hr} />
        {name !== "" && (
          <Text style={style.text}>
            <strong>Name:</strong> {name}
          </Text>
        )}
        {stack !== "" && (
          <Text style={style.text}>
            <strong>Stack:</strong> {stack}
          </Text>
        )}
        <Text style={style.text}>
          <strong>Who:</strong> {who}
        </Text>
        <Text style={style.text}>
          <strong>Interval:</strong> {interval}
        </Text>
        {feedback !== "" && (
          <Text style={style.text}>
            <strong>Feedback:</strong> {feedback}
          </Text>
        )}
        <Hr style={style.hr} />
        <Text style={style.text}>Have a good day 👋</Text>
      </Container>
    </Body>
  </Html>
);

EmailFeedback.PreviewProps = {
  name: "Pablo Picasso",
  stack: "AWS, Rust, JavaScript",
  who: "Pro",
  interval: "Every 3 months is fine",
  feedback:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
} as EmailFeedbackProps;

const renderEmailFeedback = (props: EmailFeedbackProps) => ({
  html: render(<EmailFeedback {...props} />),
  text: render(<EmailFeedback {...props} />, { plainText: true }),
});

export default EmailFeedback;
export { renderEmailFeedback };
