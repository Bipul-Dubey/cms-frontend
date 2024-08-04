import CmsPage from "@/components/CMS/CmsPage";
import DescriptionCard from "@/components/common/DescriptionCard";
import Textfield from "@/components/common/TextField";
import { SUPPORT_INFO } from "@/constants/dummyData";
import { Box, Button, Card, InputAdornment, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Envelope, Phone, User } from "@phosphor-icons/react";
import styled from "styled-components";
import ContactUsContent from "@/components/commonFeature/ContactUsContent";

export default function Contact() {
  return (
    <CmsPage>
      <ContactUsContent />
    </CmsPage>
  );
}
