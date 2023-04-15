import { Footer } from "@/components/layout/footer";
import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import ThumbnailHeader from "@/components/ThumbnailHeader";
import { css } from "@emotion/react";
import MemberCard from "@/components/MemberCard";
import members from "@/assets/members.json";
import projects from "@/assets/projects.json";
import ProjectCard, { ProjectStatus } from "@/components/ProjectCard";
import { theme } from "@/styles/theme";
import {
  GithubRepo,
  OrganizationUser,
  EnhancedOrganizationUser,
  GitHubUser,
} from "@/types/github";
import { useMemo } from "react";
import { resolve } from "path";

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

const defaultWidthStyle = css({
  maxWidth: 1200,
  margin: "0 auto",
  marginTop: 50,
  "@media (max-width: 900px)": {
    marginTop: 0,
  },
});

const Home: NextPage<{
  staticMembers: typeof members;
  staticProjects: typeof projects;
  org: { users: OrganizationUser[]; repos: GithubRepo[] };
}> = (props: {
  staticMembers: typeof members;
  staticProjects: typeof projects;
  org: { users: OrganizationUser[]; repos: GithubRepo[] };
}) => {
  const { staticMembers, staticProjects, org } = props;

  const enhancedMembers = useMemo(() => {
    const staticMembersObject = staticMembers.reduce((obj, member) => {
      obj[member.name] = member;
      return obj;
    }, {} as { [key: string]: typeof staticMembers[0] });

    const availableMemberNames = staticMembers.map((member) => member.name);

    const enhancedOrgUsers: EnhancedOrganizationUser[] = org.users.map(
      (user) => {
        if (availableMemberNames.includes(user.login)) {
          const staticMember = Object.assign(
            {},
            staticMembersObject[user.login]
          );
          delete staticMembersObject[user.login];
          return {
            ...user,
            tech: staticMember.tech,
            bio: staticMember.des || user.bio,
          };
        }
        return user;
      }
    );

    const remainderUser = Object.values(staticMembersObject);

    return {
      primaryUser: remainderUser,
      orgUser: enhancedOrgUsers,
    };
  }, [staticMembers, org.users]);
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
      <main css={css({})}>
        <ThumbnailHeader />

        <section css={css([{ margin: "50px 20px" }, defaultWidthStyle])}>
          <h2 css={sectionContainerStyle}>
            <span css={sectionTitleStyle}>我们的项目</span>
          </h2>
          <div
            css={css({
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              columnGap: 20,
              rowGap: 20,
              "@media (max-width:750px)": {
                gridTemplateColumns: "repeat(1,1fr)",
              },
              "@media (min-width:750px) and (max-width:1000px)": {
                gridTemplateColumns: "repeat(2,1fr)",
              },
            })}
          >
            {/* {staticProjects?.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                des={project.des}
                img={project.img}
                url={project.url}
                status={project.status as any}
              />
            ))} */}
            {org.repos
              .filter((repo) => !repo.archived)
              .map((repo) => (
                <ProjectCard
                  key={repo.id}
                  name={repo.name}
                  des={repo.description || ""}
                  url={repo.homepage || repo.html_url}
                  status={
                    repo.archived ? ProjectStatus.Suspend : ProjectStatus.Active
                  }
                />
              ))}
          </div>
        </section>

        <section css={css([{ margin: "50px 20px" }, defaultWidthStyle])}>
          <h2 css={sectionContainerStyle}>
            <span css={sectionTitleStyle}>我们的成员</span>
          </h2>
          <div
            css={css({
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              columnGap: 20,
              rowGap: 20,
              "@media (max-width:750px)": {
                gridTemplateColumns: "repeat(1,1fr)",
              },
              "@media (min-width:750px) and (max-width:1000px)": {
                gridTemplateColumns: "repeat(2,1fr)",
              },
            })}
          >
            {enhancedMembers.primaryUser?.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                des={member.des}
                tech={member.tech}
                avatar={member.avatar!}
              />
            ))}
            {enhancedMembers.orgUser.map((user) => (
              <MemberCard
                key={user.id}
                url={user.html_url}
                name={user.login}
                tech={user.tech || []}
                des={user.bio || ""}
                avatar={user.avatar_url}
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

export async function getStaticProps(context: GetStaticPropsContext) {
  const orgMembers: OrganizationUser[] = await (
    await fetch("https://api.github.com/orgs/FurCoder/members")
  ).json();
  const orgRepos = await (
    await fetch(
      "https://api.github.com/orgs/FurCoder/repos?sort=pushed&direction=desc"
    )
  ).json();

  const memberDetails = await Promise.all<GitHubUser>(
    orgMembers.map((member) => {
      return new Promise((resolve, reject) => {
        fetch(member.url)
          .then((res) => res.json())
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    })
  );

  const enhancedOrgUsers = orgMembers.map((member) => {
    const memberDetail = memberDetails.find((item) => item.id === member.id);
    return {
      ...member,
      bio: memberDetail?.bio,
    };
  });

  return {
    props: {
      org: { users: enhancedOrgUsers, repos: orgRepos },
      staticMembers: members,
      staticProjects: projects,
    },
  };
}

export default Home;
