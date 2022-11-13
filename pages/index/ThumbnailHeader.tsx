import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import Image from "next/image";
import Script from "next/script";
import dracula from "prism-react-renderer/themes/github";
import Highlight, { defaultProps } from "prism-react-renderer";
import { FaGithubAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ThumbnailHeaderStyle = css({
  height: 300,
  borderRadius: 20,
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
});

const h1Style = css({
  margin: 0,
  fontSize: 50,
  fontWeight: "bold",
  color: theme.colors.danube,
});

const sloganStyle = css({
  fontSize: 14,
  whiteSpace: "pre-wrap",
  color: theme.colors.danube,
});
const exampleCode = `
  <title>FurCoder | Everything is code here</title>
  <meta name="description" content="是兽人控，也是普通人。爱生活，也爱写代码。我不接受被定义，我为自己带盐。"
  />
`;
const ThumbnailHeader = () => {
  return (
    <div css={ThumbnailHeaderStyle}>
      <div
        css={css`
          clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
          &:hover {
            clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
          }
          width: 60%;
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
        {/* <Image
          alt="header-swiper"
          src="https://qcloud-cdn-static.lonepixel.cn/furcoder/swiper.jpg"
          width={750}
          height={300}
          css={css`
            transition: all 0.2s;
            &:hover {
              transform: scale(1.2);
            }
          `}
        /> */}
      </div>

      <div css={css({ width: "40%", paddingRight: 20, textAlign: "right" })}>
        <div
          css={css({
            backgroundColor: theme.colors.danube,
            borderRadius: 999,
            display: "inline-block",
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
                css={css({ margin: "5px 10px" })}
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
                css={css({ margin: "5px 10px" })}
                size="26"
              />
            </a>
          </div>
        </div>
        <h1 css={h1Style}>FURRY CODER</h1>
        <Highlight
          {...defaultProps}
          code={exampleCode}
          language="jsx"
          theme={dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={style}
              css={css({
                whiteSpace: "pre-wrap",
                textAlign: "left",
                marginRight: "-10%",
                width: "110%",
              })}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
export default ThumbnailHeader;
