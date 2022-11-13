import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import Image from "next/image";

const enum ProjectStatus {
  Active = "ACTIVE",
  Suspend = "SUSPEND",
}

const ProjectCard = ({
  img,
  name,
  des,
  url,
  status,
}: {
  img: string;
  name: string;
  des: string;
  url: string;
  status: ProjectStatus;
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
            fontSize: 18,
            color: "#6F7A6E",
            display: "flex",
            alignItems: "center",
          })}
        >
          {name}
          <span
            css={css({
              backgroundColor: theme.colors.danube,
              borderRadius: 999,
              color: "white",
              padding: "1px 10px",
              display: "inline-block",
              fontSize: 14,
              marginLeft: 10,
            })}
          >
            {status}
          </span>
        </h3>
        <p
          css={css({
            margin: 0,
            fontSize: 16,
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
