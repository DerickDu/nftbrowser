import "./App.css";
import { Button, Card, Input, Layout, List } from "antd";
import { useState } from "react";
// import DarkModeToggle from "./DarkModeToggle";
import "./style/Footer.css";
// import HeaderAnim from "./HeaderAnim";

const { Header, Footer, Content } = Layout;
function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Layout style={{ height: "100vh" }}>
      {/* <HeaderAnim /> */}
      <Header class="banner" style={{ height: "64px", padding: 20 }}>
        <div class="wrapper">
          <div
            class="typing-demo"
            // style={{ fontSize: 16, fontWeight: 600, color: "white" }}
          >
            NFT Browser 🔗 🔗 🔗 🔗 Explore WEB 3.0🚀
          </div>
        </div>
        {/* <div style={{ fontSize: 18, color: "white" }}>NFT Browser</div> */}
      </Header>
      {/* // curly brace. 1. jsx excape (do not need babel to transplie) 2.
      object(css inline) */}

      <Content
        style={{
          height: "calc(100vh - 64px)",
          padding: 20,
          overflowY: "auto",
        }}
      >
        <Input.Group compact>
          <Input
            style={{ width: 300 }}
            placeholder="Enter a NFT name to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary">Search</Button>
        </Input.Group>

        <List
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            // , 11, 12, 13, 14, 15, 16, 17, 18, 19,
            // 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          ]}
          renderItem={(nft) => (
            <List.Item key={nft}>
              <Card title={nft} />
            </List.Item>
          )}
        />
      </Content>

      <Footer
        className="footer"
        style={{
          //backgroundColor: "lightgrey",
          height: 2,
        }}
      >
        ©2023 NFT Dashboard. All Rights Reserved. Website Made by DerickDu.
      </Footer>
    </Layout>
  );
}

export default App;
