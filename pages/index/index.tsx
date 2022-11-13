import { Footer } from "@/components/footer";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ThumbnailHeader from "@/pages/index/ThumbnailHeader";
import { css } from "@emotion/react";
import MemberCard from "./MemberCard";
import members from "@/assets/members.json";
import projects from "@/assets/projects.json";
import ProjectCard from "./ProjectCard";
import Script from "next/script";

const sectionTitleStyle = css({
  backgroundColor: "#D9D9D9",
  padding: "10px 20px",
  borderRadius: 999,
  fontSize: 16,
  fontWeight: "bold",
  color: "white",
});

const sectionContainerStyle = css({
  display: "flex",
  justifyContent: "center",
});

const Home: NextPage = (props) => {
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
          marginTop: 100,
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
              // gridTemplateRows: "25% 25% 25% 25%",
              columnGap: 20,
              rowGap: 20,
            })}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                des={project.des}
                img={project.img}
                url={project.url}
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
              // gridTemplateRows: "25% 25% 25% 25%",
              columnGap: 20,
              rowGap: 20,
            })}
          >
            {members.map((member) => (
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

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      members,
      projects
    },
  };
}

export default Home;
