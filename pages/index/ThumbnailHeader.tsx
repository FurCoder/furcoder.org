import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import { FaGithubAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ThumbnailHeaderStyle = css({
  height: 400,
  borderRadius: 20,
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  "@media (max-width:900px)": {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

const h1Style = css({
  margin: 0,
  fontSize: 50,
  fontWeight: "bold",
  color: theme.colors.danube,
  span: {
    display: "block",
  },
  ">span:first-child": { fontSize: 42 },
  ">span:last-child": {
    fontSize: 100,
  },
});

const ThumbnailHeader = () => {
  return (
    <div css={ThumbnailHeaderStyle}>
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            background-image: url(https://qcloud-cdn-static.lonepixel.cn/furcoder/swiper.jpg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            transition: all 0.2s;
            height: 100%;
            &:hover {
              transform: scale(1.2);
            }
          `}
        />
      </div>

      <div
        css={css({
          position: "absolute",
          textAlign: "right",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
          right: 0,
          padding: 20,
        })}
      >
        <div
          css={css({
            backgroundColor: theme.colors.danube,
            borderRadius: 999,
            display: "inline-block",
            marginBottom: 20,
            width: "fit-content",
          })}
        >
          <div css={css({ display: "flex", alignItems: "center" })}>
            <a
              href="https://github.com/FurCoder"
              target="_blank"
              rel="noreferrer"
              css={css({ display: "contents" })}
            >
              <FaGithubAlt
                fill="white"
                css={css({
                  margin: "5px 10px",
                  transition: "all 0.2s",
                  ":hover": {
                    transform: "scale(0.8)",
                  },
                })}
                size="26"
              />
            </a>
            <a
              href="mailto:mk124a#gmail.com"
              target="_blank"
              rel="noreferrer"
              css={css({ display: "contents" })}
            >
              <FiMail
                color="white"
                css={css({
                  margin: "5px 10px",
                  transition: "all 0.2s",
                  ":hover": {
                    transform: "scale(0.8)",
                  },
                })}
                size="26"
              />
            </a>
          </div>
        </div>
        <h1 css={h1Style}>
          <span>FURRY</span>
          <span>CODER</span>
        </h1>
      </div>
    </div>
  );
};
export default ThumbnailHeader;
