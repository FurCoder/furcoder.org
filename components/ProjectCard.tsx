import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export const enum ProjectStatus {
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
  img?: string;
  name: string;
  des?: string;
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
        minHeight: 100,
        transition: "all 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          "#project-card-github-icon": {
            color: "gray",
          },
        },
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
          width: "100%",
          padding: 20,
          position: "relative",
        })}
      >
        <div
          css={css({
            marginBottom: 10,
          })}
        >
          <h3
            css={css({
              margin: 0,
              fontSize: 24,
              color: "#6F7A6E",
            })}
          >
            {name}
          </h3>
          <div
            css={css({
              display: "flex",
              alignItems: "center",
            })}
          >
            <span
              css={css({
                backgroundColor: theme.colors.danube,
                borderRadius: 999,
                color: "white",
                padding: "1px 10px",
                display: "inline-block",
                fontSize: "12px",
                marginTop: 4,
              })}
            >
              {status}
            </span>
          </div>
        </div>

        <p
          css={css({
            margin: 0,
            fontSize: 16,
            color: "#6F6F6F",
          })}
        >
          {des}
        </p>
        <BsGithub
          id="project-card-github-icon"
          css={css({
            position: "absolute",
            right: -20,
            top: -20,
            fontSize: 72,
            color: "rgba(0,0,0,0.2)",
            transition: "all 0.2s",
            transform: "rotate(-30deg)",
          })}
        />
      </div>
    </a>
  );
};

export default ProjectCard;
