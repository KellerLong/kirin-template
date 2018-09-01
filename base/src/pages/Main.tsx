import React, { SSR, Component, Route, Model } from 'kirin-strap/component';
import HomeTyping from '../typing/HomeTyping';
import {Props} from 'react';

@Route('/')
@Route('/index.html')
@Route('/index')
@Component
export default class Index extends React.Component {

  @Model('HomeModel')
  public homeModel: HomeTyping.IHomeModel;

  public handleUpdateData = () => {
    this.homeModel.setList('1testr3');
  }

  public handleTestAjax = () => {
    this.homeModel.getList();
  }

  public handleTestAjax2 = () => {
    this.homeModel.getList2();
  }

  @Props
  public XButton: Xbutton = new Xbutton();


  public render() {
    {
      console.log('this.props:', this.props);
      console.log('this:', this);
    }
    return (
      <div>
        hi{this.homeModel.productList}
        <button onClick={this.handleUpdateData}>update</button>
        <button onClick={this.handleTestAjax}>test ajax</button>
        <button onClick={this.handleTestAjax2}>xxoo ajax</button>
          <Xbutton title={'xxx'} name={'xxx'}/>
          <Xbutton xbutton={ new xButtonProp() } />
      </div>
    );
  }
}
