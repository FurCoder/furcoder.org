import { css } from "@emotion/react";
import Image from "next/image";

const ProjectCard = ({
  img,
  name,
  des,
  url,
}: {
  img: string;
  name: string;
  des: string;
  url: string;
}) => {
  return (
    <a
      href={url}
      css={css({
        borderRadius: 20,
        backgroundColor: "white",
        display: "flex",
        overflow: "hidden",
        height: img ? 100 : "auto",
      })}
    >
      <div>
        {img ? (
          <Image
            src={img}
            width="100"
            height="100"
            alt={`${name}'s project image`}
          />
        ) : null}
      </div>
      <div
        css={css({
          padding: 20,
        })}
      >
        <h3
          css={css({
            margin: 0,
            fontSize: 16,
            color: "#6F7A6E",
          })}
        >
          {name}
        </h3>
        <p
          css={css({
            margin: 0,
            fontSize: 12,
            color: "#6F6F6F",
          })}
        >
          {des}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
