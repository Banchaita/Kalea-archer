import React from "react";
import { Layout} from 'antd';
const { Footer } = Layout;

const MyFooter = () => {
  return (
   
    <Layout>
       <Footer className="p-0 pt-3 pb-1" style={{ background: '#ddd' }}>
        <p className="text-center">Powered by Kalea Archer You Copyright © 2021</p>
      </Footer>
    </Layout>
  );
}
export default MyFooter;