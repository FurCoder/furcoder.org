import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { fromEvent } from "rxjs";

const ThumbnailHeaderStyle = css({
  height: 500,
  borderRadius: "0px 0px 20px 20px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  margin: "0 auto",
  "@media (max-width: 900px)": {
    marginTop: 0,
  },
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
  const [dynamicWidth, setDynamicWidth] = useState(0);
  useEffect(() => {
    const sub = fromEvent(window.document, "scroll").subscribe((e) => {
      const all = window.innerWidth - 1200;
      if (all > 0) {
        setDynamicWidth(
          window.scrollY > 100 ? all : (all / 100) * window.scrollY
        );
      }
    });
    return () => sub.unsubscribe();
  }, []);
  return (
    <>
      <div
        css={[
          { maxWidth: `calc(100% - ${dynamicWidth}px)` },
          ThumbnailHeaderStyle,
        ]}
      >
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

        {/* <div
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
      </div> */}
      </div>
      <div
        css={css({
          display: "flex",
          maxWidth: 1200,
          margin: "0 auto",
          marginTop: 40,
          justifyContent: "center",
        })}
      >
        <div
          css={{
            backgroundColor: "white",
            padding: "20px 40px",
            borderRadius: 20,
          }}
        >
          <h1 css={[h1Style]}>FurCoder</h1>
          <div css={{ height: 1, backgroundColor: "#ffd3c5",margin:"10px 0px" }} />
          <div
            css={css({
              display: "flex",
              alignItems: "center",
              color: theme.colors.danube,
              justifyContent: "center",
            })}
          >
            <a
              href="https://github.com/FurCoder"
              target="_blank"
              rel="noreferrer"
              css={css({ display: "contents" })}
            >
              <FaGithubAlt
                // fill="white"
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
                // color="white"
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
      </div>
    </>
  );
};
export default ThumbnailHeader;
