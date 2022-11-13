import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import Image from "next/image";

const MemberCard = ({
  name,
  tech = [],
  des,
  avatar,
}: {
  name: string;
  tech: string[];
  des: string;
  avatar: string;
}) => {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFA26D",
        background: `linear-gradient(to bottom right,${theme.colors["danube-light"]}, ${theme.colors.danube})`,
        borderRadius: 10,
        filter: "drop-shadow(2px 2px 2px rgba(103, 103, 103, 0.1))",
        padding: "30px 20px",
      })}
    >
      <div>
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
            margin: 0,
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
          border: "solid 3px white",
          borderRadius: 999,
          width: 100,
          height: 100,
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
    </div>
  );
};
export default MemberCard;
