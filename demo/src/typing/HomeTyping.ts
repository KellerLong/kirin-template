import Product from '../entities/Product';


namespace HomeTyping {

  export interface IGetListSendData {
    id: number;
  }

  export interface IHomeModel {
    getList(manage?: any, action?: any): Generator;
    setList(manage?: any, action?: any): any;
    getList2(manage?: any, action?: any): any;
    productList: Product;
  }
}

export default HomeTyping;
