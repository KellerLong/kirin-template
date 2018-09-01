import { Model, State, Effect, Reducer } from 'kirin-strap/model';
import Product from '../entities/Product';
import HomeService from '../services/HomeService';
import HomeTyping from '../typing/HomeTyping';

const homeService: HomeService = new HomeService();

@Model
export default class HomeModel implements HomeTyping.IHomeModel{

  // 每个复合类型 都应该在entities层有明确的类型定义
  // 每个复合类型的每个字段 在 entities 层都应该有默认值
  @State(Product)
  public productList: Product;

  // @Set('productList')
  // public setProductList() {};

  @Effect
  public * getList({ payload }, { put }) {
    const data: Product[] = yield homeService.login({ id: 1 });
    yield put({ type: 'setList', payload: 'a232' });
  }

  @Effect
  public * getList2({ payload }, { put }) {
    const data: Product[] = yield homeService.getList2({ id: 1 });
    yield put({ type: 'setList', payload: 'a232' });
  }

  @Reducer
  public setList(state, { payload }) {
    console.log(payload);
    state.productList.name = payload;
    return { ...state };
  }

}
