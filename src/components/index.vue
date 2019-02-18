<template>
  <div style="height:100%">
    <section class="index-cover swiper">
      <div class="slidebar">
        <header>
          <span class="color-tigeryellow header-margin-fix">FUR</span>
          <span class="color-codeblue">CODER</span>
        </header>
        <main>
          <p>
            FurCoder 是一个由毛茸茸组成的IT开发从业者组织，
            发起人 老兽 于2017年2月1日 成立了相关讨论组。
          </p>
          <p>
            今天，Furcoder已经拥有70名成员，其成员技能覆盖了
            web开发/大数据/游戏制作/服务架构/影视特效/客户端开发
            等大部分场景。
          </p>
        </main>
        <nav>
          <button class="color-white bg-color-codeblue">我们是谁</button>
          <button>联系我们</button>
        </nav>
      </div>
    </section>
    <section class="project-list">
      <h1>我们的项目</h1>
      <span>PROJECTS</span>
      <div class="project-row clear">
        <div class="project-col-6">
          <div class="project-item">
            <h3>ZeroCaterpillar</h3>
            <span>全能，高效的图片爬虫。</span>
          </div>
        </div>
        <div class="project-col-6">
          <div class="project-item">
            <h3>COME SOON</h3>
            <span></span>
          </div>
        </div>
      </div>
    </section>
    <section class="members-list">
      <h1>我们的成员</h1>
      <span>MEMBERS</span>
      <div class="members-row clear">
        <div class="members-col-4">
          <div class="members-item">
            <div></div>
            <h5>SnowKylin</h5>
            <span>Wildream负责人，大数据方向。</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.clear::after {
  clear: both;
  content: ".";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
.color-tigeryellow {
  color: #ff8e4e;
}
.color-white {
  color: white;
}
.header-margin-fix {
  margin-left: -5px;
}
.color-codeblue {
  color: #88acc6;
}
.bg-color-codeblue {
  background-color: #569acb;
}
.index-cover {
  height: 100%;
  background-image: url("./../assets/swiper.jpg");
  background-size: cover;
  //filter: brightness(0.9);

  .slidebar {
    width: 40%;
    height: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //text-align: center;
    z-index: 2;
  }
  .slidebar::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 40%;
    max-width: 550px;
    //background-color: red;
    background: rgba(28, 35, 45, 0.85);
    z-index: 1;
    //filter: blur(5px);
  }
  header {
    color: white;
    font-size: 3.5em;
    font-weight: 900;
    letter-spacing: 0.1em;
    z-index: 12450;
    font-family: "Syncopate";
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  header::after {
    content: "";
    display: block;
    width: 1.5em;
    height: 2px;
    background-color: white;
    //margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  main {
    color: white;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.13em;
    //line-height: 2em;
    z-index: 12450;
    p {
      margin: 15px 0px;
    }
  }
  nav {
    margin-bottom: 35%;
    z-index: 12450;
    text-align: center;
    button {
      margin: 20px 10px;
      outline: none;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      //background-color: white;
      border-radius: 24px;
      box-sizing: border-box;
      //color: #3c4043;
      font-size: 14px;
      font-weight: 400;
      height: 48px;
      line-height: 48px;
      padding: 0 35px;
      position: relative;
      white-space: nowrap;
      border: none;
      transition: all 0.3s;
    }
    button:hover {
      //background-color: #409eff;
      //color: white;
      cursor: pointer;
    }
  }
  .filter {
    background-color: rgba(149, 149, 149, 0.29);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
}
.project-list {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 90%;
  text-align: center;
  h1 {
    margin: 5px 0px;
    font-size: 2.5em;
  }
  span {
    font-size: 1.5em;
  }
  .project-row {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
  .project-col-6 {
    width: 45%;
    //float: left;
    margin: 0px 20px;
  }
  .project-item {
    height: 450px;
    background-color: #f1f1f1;
    color: #333;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h3 {
      font-size: 2em;
    }
    span {
      font-size: 1.2em;
    }
    h3::after {
      content: "";
      display: block;
      width: 10%;
      height: 1px;
      background-color: #333;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
.members-list {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 90%;
  text-align: center;
  h5 {
    margin: 5px 0px;
    font-size: 2.5em;
  }
  span {
    font-size: 1.5em;
  }
}
</style>
<script>
export default {
    data(){
        return{
            data:{
                project:[],
                members:[{
                    name:'SnowKylin',
                    des:'WildDream社区创始人，人工智能方向。',
                    avastar:'https://qcloud-cdn-static.lonepixel.cn/furcoder/avatar/snowkylin.jpg'
                }]
            }
        }
    }
};
</script>

