import {
  Box,
  ButtonPrimary,
  FormErrorText,
  Input,
  Text,
} from "@openpatch/patches";
import React, { useState } from "react";

export const NewsletterForm = ({ title = "Subscribe to our newsletter" }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<
    "default" | "subscribed" | "subscribing" | "error"
  >("default");

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState("subscribing");
    const res = await fetch(`/api/newsletter`, {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setMessage(
        "Your e-mail adress is invalid or you are already subscribed!"
      );
      setState("error");
      return;
    }

    setEmail("");
    setMessage("Successfully! 🎉 You are now subscribed.");
    setState("subscribed");
  };

  return (
    <Box display="flex" justifyContent="center" mt="standard">
      <Box maxWidth="400px">
        <form onSubmit={subscribe}>
          {title && (
            <Text fontWeight="bold" mb="xsmall">
              {title}
            </Text>
          )}
          <Box display="flex" alignItems="center">
            <Box flex={1}>
              <Input
                id="email"
                value={email}
                onChange={setEmail}
                disabled={state === "subscribing" || state === "subscribed"}
                required
                placeholder={
                  state === "subscribed"
                    ? "You're subscribed! 🎉"
                    : "Enter your email"
                }
              />
            </Box>
            <Box ml="small">
              <ButtonPrimary
                size="medium"
                fullWidth
                type="submit"
                disabled={state === "subscribing" || state === "subscribed"}
                loading={state === "subscribing"}
              >
                {state === "subscribed" ? "Thank you!" : "Subscribe"}
              </ButtonPrimary>
            </Box>
          </Box>
          {state === "error" && <FormErrorText>{message}</FormErrorText>}
        </form>
      </Box>
    </Box>
  );
};
