import { css, SerializedStyles } from "@emotion/react";
import { theme } from "@/styles/theme";

const footerStyle = css({
  padding: "30px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "20px 20px 0px 0px",
  "@media (max-width:425px)": {
    flexDirection: "column",
    ">span:first-child": {
      marginBottom: 10,
    },
  },
});

const footerSpanStyle = css({
  color: theme.colors["dove-gray"],
  fontSize: 12,
  cursor:"n-resize"
});

const halfBgSpanStyle = css({
  position: "relative",
  transformStyle: "preserve-3d",
  "&:hover": {
    "&::after": {
      height: "50%",
    },
  },
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    transition: "height 0.2s",
    height: "30%",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.colors["danube"],
    opacity: 0.4,
  },
});

export const Footer = (props: { className?: SerializedStyles }) => {
  return (
    <footer css={css(footerStyle, props.className)}>
      <span css={footerSpanStyle}>
        Build with <span css={halfBgSpanStyle}>love and ramen.</span>
      </span>
      <span css={footerSpanStyle}>
        CopyRight 2017 - {new Date().getFullYear()} FurCoder.org
      </span>
    </footer>
  );
};
