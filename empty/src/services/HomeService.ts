import Network, {Get, Post, Service} from 'kirin-strap/network';
import HomeTyping from 'src/typing/HomeTyping';
import log from 'kirin-strap/log';
/**
 *  继承网络层后 每个网络层都有以下基础方法
 *  @[post,get,put,delete](url?, sendData?, netWorkConfig?)
 *  @getNetworkConfig(configName?);
 *  继承网络层后 每个网络层都有以下事件可用 讲在 demo 内展示 全局事件 在启动层注入
 */
// 标注为网络层 可使用自定义网络 如 Get('xxx/ooo', '自定义网络名')
// 每个接口的 senData 都应该在 typing 内定义
@Service
export default class HomeService extends Network {

  @Get('/xxx/ooo', 'custom')
  public async getList (sendData: HomeTyping.IGetListSendData) {}

  @Get('/xxx/ooo')
  public async getList2 (sendData: HomeTyping.IGetListSendData) {}

  @Post('/account/login', 'custom')
  public async login (sendData: HomeTyping.IGetListSendData, requestOption?: Network.IOption) {
      requestOption.url = `${requestOption.url}?time=${new Date().getTime()}`;
      console.log(requestOption, '1');
  }

  // 网络请求前 该方法 在全局钩子前 返回 false 可以阻断往下执行
  // 若不执行 next() 即不会阻断 ajax 但不会执行全局钩子
  public onNetworkRequestBefore (Option, next): boolean {
    // 网络加载前可以做的事
    // 如 post 提交时 动态变更 url 便于后端日志记录
    log.error('网络加载前可以做的事');
    return next();
  }

  // 网络请求后
  public onNetworkResponseAfter (Option, req, next): boolean {
    log.error('网络请求后');
    return next();
  }

  // 网络请求中发生错误
  public onNetworkRequestError(Option, err, next): boolean {
    log.info('网络请求中发生错误');
    return next();
  }
}
