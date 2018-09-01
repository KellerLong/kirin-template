import KirinStrap, { KirinStrapApplication } from 'kirin-strap';
import log from 'kirin-strap/log';

/***
 * 启动类 在这里可以做
 * @全局初始化
 * @全局事件监听
 * @XRender 事件代理
 *
 */
@KirinStrapApplication
export default class Application extends KirinStrap {
  // 初始化
  public constructor() {
    super();
    console.log('start...');
  }

  // 路由跳转前 返回 true 继续跳转
  public onRouteBefore(): boolean {
    return true;
  }

  // 路由跳转后
  public onRouteAfter(): void {
  }

  // 网络请求前
  public onNetworkRequestBefore(url, sendData, network): boolean {
    log.info('network request before global:');
    return true;
  }

  // 网络响应后
  public onNetworkResponseAfter(url, sendData, network): boolean {
    log.info('network request before after:');
    return true;
  }

  // 网络请求中发生错误
  public onNetworkError(url, sendData, network): boolean {
    log.error('network request before after:');
    return true;
  }

  // 全局 layout 路由之外 返回一个有 children 的 组件
  public returnLayout() {
  }
}
