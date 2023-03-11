import { createTheme } from "@nextui-org/react";
export const status = {
  pending_bg: "var(--pending-dark-mode)",
  pending_text: "var(--status-pending)",
  paid_bg: "var(--paid-dark-mode)",
  paid_text: "var(--status-paid)",
  draft_span: "var(--status-draft-btn)",
};

export const sharedTheme = {
  fonts: {
    sans: "var(--main-font) sans-serif",
  },
  fontSizes: {
    base: "0.8rem",
  },
  space: {
    5: "0",
    lg: "0",
    sm: "0",
    md: "0",
  },
};

export const lightTheme = createTheme({
  type: "light",
  theme: {
    ...sharedTheme,
    colors: {
      background: "var(--light-bg)",
      backgroundContrast: "var(--light-bg)",
      cardItemBg: "var(--main-white)",
      invoiceId: "var(--main-black)",
      child_2_3: "var(--main-grey)",
      child_4: " var(--main-black)",
      draft_bg: "var(--light-bg)",
      draft_color: "var(--draft-dark-mode)",
      ...status,
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    ...sharedTheme,
    colors: {
      background: "var(--light-black)",
      backgroundContrast: "var(--light-black)",
      cardItemBg: "var(--light-dark-blue)",
      invoiceId: "var(--main-white)",
      child_2_3: "var(--main-white)",
      child_4: "var(--main-white)",
      draft_bg: "var(--draft-dark-mode)",
      draft_color: "var(--status-draft-btn)",
      ...status,
    },
  },
});
