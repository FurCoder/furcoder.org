import { Footer } from "@/components/footer";
import type { NextPage } from "next";
import Head from "next/head";
import ThumbnailHeader from "@/pages/index/ThumbnailHeader";
import { css } from "@emotion/react";
import MemberCard from "./MemberCard";
import members from "@/assets/members.json";
import projects from "@/assets/projects.json";
import ProjectCard from "./ProjectCard";
import Script from "next/script";
import { theme } from "@/styles/theme";

const sectionTitleStyle = css({
  backgroundColor: "white",
  padding: "10px 40px",
  borderRadius: 999,
  fontSize: 22,
  fontWeight: "bold",
  color: theme.colors["dove-gray"],
});

const sectionContainerStyle = css({
  display: "flex",
  justifyContent: "center",
});

const Home: NextPage<{
  staticMembers: typeof members;
  staticProjects: typeof projects;
}> = (props: {
  staticMembers: typeof members;
  staticProjects: typeof projects;
}) => {
  const { staticMembers, staticProjects } = props;
  return (
    <div>
      <Head>
        <title>FurCoder | Everything is code here</title>
        <meta
          name="description"
          content="是兽人控，也是普通人。爱生活，也爱写代码。我不接受被定义，我为自己带盐。"
        />
        <meta
          property="og:title"
          content="FurCoder | Everything is code here"
        />
        <meta property="og:locale" content="zh-CN" />
        <meta property="og:site_name" content="FurCoder.org" />
        <meta
          property="og:description"
          content="是兽人控，也是普通人。爱生活，也爱写代码。我不接受被定义，我为自己带盐。"
        />
        <meta property="og:url" content="https://www.furcoder.org/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" />
      <main
        css={css({
          maxWidth: 1200,
          margin: "0 auto",
          marginTop: 50,
          "@media (max-width: 425px)": {
            marginTop: 0,
          },
        })}
      >
        <ThumbnailHeader />

        <section css={css({ margin: "50px 0" })}>
          <h2 css={sectionContainerStyle}>
            <span css={sectionTitleStyle}>鸽子项目</span>
          </h2>
          <div
            css={css({
              display: "grid",
              gridTemplateColumns: "repeat(1,1fr)",
              columnGap: 20,
              rowGap: 20,
              "@media (max-width:425px)": {
                gridTemplateColumns: "repeat(1,1fr)",
                marginLeft: 20,
                marginRight: 20,
              },
            })}
          >
            {staticProjects?.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                des={project.des}
                img={project.img}
                url={project.url}
                status={project.status as any}
              />
            ))}
          </div>
        </section>

        <section css={css({ margin: "50px 0" })}>
          <h2 css={sectionContainerStyle}>
            <span css={sectionTitleStyle}>摸鱼成员</span>
          </h2>
          <div
            css={css({
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              columnGap: 20,
              rowGap: 20,
              "@media (max-width:425px)": {
                gridTemplateColumns: "repeat(1,1fr)",
                marginLeft: 20,
                marginRight: 20,
              },
            })}
          >
            {staticMembers?.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                des={member.des}
                tech={member.tech}
                avatar={member.avatar}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer
        className={css({ maxWidth: 1200, margin: "0 auto", marginTop: 150 })}
      />
    </div>
  );
};

export default Home;
