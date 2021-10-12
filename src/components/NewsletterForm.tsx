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
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      setError(true);
      setMessage(
        "Your e-mail adress is invalid or you are already subscribed!"
      );
      return;
    }

    setEmail("");
    setError(false);
    setSubscribed(true);
    setMessage("Successfully! 🎉 You are now subscribed.");
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
                disabled={subscribed}
                required
                placeholder={
                  subscribed ? "You're subscribed! 🎉" : "Enter your email"
                }
              />
            </Box>
            <Box ml="small">
              <ButtonPrimary
                size="medium"
                fullWidth
                type="submit"
                disabled={subscribed}
              >
                {subscribed ? "Thank you!" : "Subscribe"}
              </ButtonPrimary>
            </Box>
          </Box>
          {error && <FormErrorText>{message}</FormErrorText>}
        </form>
      </Box>
    </Box>
  );
};
