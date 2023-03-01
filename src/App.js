import "./App.css";
import { Button, Input, Layout, List, message } from "antd";
import { useState } from "react";
// import DarkModeToggle from "./DarkModeToggle";
import "./style/Footer.css";
import { searchNFTs } from "./utils";
import NftCard from "./components/NftCard";
// import HeaderAnim from "./HeaderAnim";

const { Header, Footer, Content } = Layout;

function App() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    if (searchText === "") {
      return;
    }

    setLoading(true);

    try {
      const data = await searchNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
            onPressEnter={handleSearch}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Input.Group>

        <List
          loading={loading}
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
          dataSource={nfts}
          renderItem={(nft) => <NftCard nft={nft} />}
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
