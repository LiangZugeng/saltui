/**
 * PhotoField Component Demo for tingle
 * @author
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */

const React = require('react');
const DdPhotoField = require('salt-photo-field/');
const PhotoField = require('../../src/PhotoField');

// build之后, 测试一下下面一行, 把上面一行注释掉
// const PhotoField = require('../../dist');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoList: [
        {
          name: '111',
          response: {
            url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
          },
        },
        {
          url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
          name: '222',
        },
        {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '222',
        },
        {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '222',
        },
        {
          url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
          name: '222',
        },
        {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '222',
        },
        // {
        //   url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
        //   name: '222',
        // },
        // {
        //   url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
        //   name: '222',
        // },
        // {
        //   url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
        //   name: '222',
        // },
        // {
        //   url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
        //   name: '222',
        // },
      ],
    };
  }

  onDelete(index) {
    const photoList = this.state.photoList.filter((item, i) =>
      index !== i
    ) || [];

    this.setState({
      photoList,
    });
  }

  onChange(fieldData, photoList) {
    this.setState({
      photoList,
    });
  }

  render() {
    return (
      <div>
        <PhotoField
          label="H5 图片"
          placeholder="请选择图片"
          required
          max={4}
          maxUpload={9}
          name="file"
          url="http://eternalsky.me:8122/file/upload"
          photoList={this.state.photoList}
          corpId={'dingd8e1123006514592'}
          tip="这里是提示信息"
          onChange={this.onChange.bind(this)}
          onDelete={this.onDelete.bind(this)}
        />
        <DdPhotoField
          label="钉钉图片"
          placeholder="请选择图片"
          required
          max={4}
          maxUpload={12}
          photoList={this.state.photoList}
          corpId={'dingd8e1123006514592'}
          tip="这里是提示信息"
          onChange={this.onChange.bind(this)}
          onDelete={this.onDelete.bind(this)}
        />
      </div>
    );
  }
}

module.exports = Demo;