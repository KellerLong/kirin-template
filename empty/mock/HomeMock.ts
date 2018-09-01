import {Get, Post, Mock} from 'kirin-strap/mock';

@Mock
export default class HomeMock {
  @Post(/account\/login/)
  public login(res, req) {
    // Mock 数据
    return {
      'sss': 'xx2312312'
    };
  }

  @Get(/v1\/login\.do/)
  public login2(res, req) {
    // Mock 数据
    return {
      'title': 'Syntax Demo',
    };
  }
};
