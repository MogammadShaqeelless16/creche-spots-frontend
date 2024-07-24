import React, { useContext } from "react";
import { Button, Box, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../../utils/api";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const Social = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
    initialValues: {
      facebookLink: propertyDetails.social.facebookLink || "",
      whatsappNumber: propertyDetails.social.whatsappNumber || "",
      emailAddress: propertyDetails.social.emailAddress || "",
      websiteLink: propertyDetails.social.websiteLink || "",
    },
  });

  const handleSubmit = () => {
    const { facebookLink, whatsappNumber, emailAddress, websiteLink } = form.values;

    setPropertyDetails((prev) => ({
      ...prev,
      social: {
        facebookLink,
        whatsappNumber,
        emailAddress,
        websiteLink,
      },
    }));

    mutate();
  };

  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          social: {
            facebookLink: form.values.facebookLink,
            whatsappNumber: form.values.whatsappNumber,
            emailAddress: form.values.emailAddress,
            websiteLink: form.values.websiteLink,
          },
        },
        token
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("Added Successfully", { position: "bottom-right" });
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        social: {
          facebookLink: "",
          whatsappNumber: "",
          emailAddress: "",
          websiteLink: "",
        },
        userEmail: user?.email,
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          label="Facebook Page Link"
          placeholder="https://facebook.com/example"
          {...form.getInputProps("facebookLink")}
        />
        <TextInput
          label="WhatsApp Number"
          placeholder="1234567890"
          {...form.getInputProps("whatsappNumber")}
        />
        <TextInput
          label="Email Address"
          placeholder="example@example.com"
          {...form.getInputProps("emailAddress")}
        />
        <TextInput
          label="Website Link"
          placeholder="https://example.com"
          {...form.getInputProps("websiteLink")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Social;
