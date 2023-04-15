import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import Image from "next/image";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useMemo, useState } from "react";

const fac = new FastAverageColor();

const MemberCard = ({
  url,
  name,
  tech = [],
  des,
  avatar,
}: {
  url?: string;
  name: string;
  tech: string[];
  des: string;
  avatar: string;
}) => {
  const [cardBgcolor, setCardBgcolor] = useState("#FFA26D");

  useEffect(() => {
    fac.getColorAsync(avatar).then((color) => {
      setCardBgcolor(color.hexa);
    });
  }, [avatar]);

  return (
    <a
      href={url}
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: cardBgcolor,
        background: `linear-gradient(to right,${cardBgcolor}))`,
        // background: `linear-gradient(to bottom right,${theme.colors["danube-light"]}, ${theme.colors.danube})`,
        borderRadius: 10,
        filter: "drop-shadow(2px 2px 2px rgba(103, 103, 103, 0.1))",
        padding: "30px 20px",
      })}
    >
      <div
        css={css({
          marginRight: 20,
        })}
      >
        <h3
          css={css({
            margin: 0,
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          })}
        >
          {name}
        </h3>
        <span
          css={css({
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
          })}
        >
          {tech.join(" / ")}
        </span>
        <p
          css={css({
            marginTop: 10,
            color: "white",
            fontSize: 12,
          })}
        >
          {des}
        </p>
      </div>
      <div
        css={css({
          overflow: "hidden",
          outline: "solid 3px white",
          borderRadius: 999,
          width: 100,
          height: 100,
          flexShrink: 0,
        })}
      >
        <Image
          src={avatar}
          alt={`${name} 's avatar`}
          width={100}
          height={100}
          css={css({
            borderRadius: 999,
          })}
        />
      </div>
    </a>
  );
};
export default MemberCard;
