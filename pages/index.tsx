import Home from "@/pages/index/index";
import members from "@/assets/members.json";

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
        members,
      },
    };
  }

export default Home;
