// pages/categories/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: ['刺绣', '缝纫', '定制书籍', 'diy包', '拼图', 'diy小屋', 'diy画', '手链系列', '积木', '家饰', '实用系列', '废物利用', '其他', '团购服务'],
    list: [{
        leftlist: '刺绣',
        rightlist: [{
            image: "//g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/834970155/O1CN01C3tdv41D124nLVrbQ_!!0-saturn_solar.jpg_180x180.jpg_.webp",
            title: "挂饰刺绣教学"
          },
          {
            image: "//img.alicdn.com/imgextra/i4/2207224753476/O1CN01BNrTMx1bY3P84OfJ9_!!2207224753476.jpg_430x430q90.jpg",
            title: "系列产品购买"
          }
        ]
      },
      {
        leftlist: '缝纫',
        rightlist: [{
            image: "https://img.alicdn.com/imgextra/i1/2041592426/O1CN01v7B0nx1Tn9QgSgUoK_!!0-item_pic.jpg_430x430q90.jpg",
            title: "缝纫书籍"
          },
          {
            image: "https://gd3.alicdn.com/imgextra/i3/56260312/O1CN01JgeWZA1EAw8ymasc3_!!56260312.jpg_400x400.jpg",
            title: "儿童手工"
          },
          {
            image: "//g-search3.alicdn.com/img/bao/uploaded/i4/i2/0/O1CN01ZgBr6Z1Bs2ePyjefP_!!0.jpg_180x180.jpg_.webp",
            title: "洋娃娃教学"
          },
          {
            image: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/1718821461/O1CN01jsQkau1MfBIV8vqGw_!!1718821461.jpg_180x180.jpg_.webp",
            title: "兔子教学"
          },
          {
            image: "https://gd4.alicdn.com/imgextra/i4/126794035/O1CN01YzjEBu1fg4kAdshpx_!!126794035.jpg_400x400.jpg",
            title: "帆布包制作"
          },
          {
            image: "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1718821461/O1CN01N32CQy1MfBKR4dZHI_!!1718821461.jpg_180x180.jpg_.webp",
            title: "小黄鸭"
          },
          {
            image: "//g-search2.alicdn.com/img/bao/uploaded/i4/i3/524317908/O1CN01u9kUch28HulOJtuIb_!!524317908.jpg_180x180.jpg_.webp",
            title: "缝纫选购"
          }
        ]
      },
      {
        leftlist: '定制书籍',
        rightlist: [{
            image: "//g-search1.alicdn.com/img/bao/uploaded/i4/i1/114094312/TB2aFv7dQ9WBuNjSspeXXaz5VXa_!!114094312.jpg_180x180.jpg_.webp",
            title: "相册教学"
          },
          {
            image: "https://gd1.alicdn.com/imgextra/i3/2663861616/O1CN01EJESKs1NoAgTuTyH0_!!2663861616.jpg_400x400.jpg",
            title: "纪念相册教程"
          },
          {
            image: "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/854149508/O1CN01KMaXoB2K6iTmeaEFU_!!0-item_pic.jpg_180x180.jpg_.webp",
            title: "毕业相册教程"
          },
          {
            image: "//g-search1.alicdn.com/img/bao/uploaded/i4/i3/859515618/O1CN01Y2Cwn81rN5iJXfEFY_!!0-item_pic.jpg_180x180.jpg_.webp",
            title: "儿童相册"
          },
          {
            image: "//g-search3.alicdn.com/img/bao/uploaded/i4/i1/2041592426/O1CN01sFTjSL1Tn9WURW6re_!!0-item_pic.jpg_180x180.jpg_.webp",
            title: "旅行小册子"
          },
          {
            image: "//g-search3.alicdn.com/img/bao/uploaded/i4/i2/2201484602447/O1CN01e40WjV1Twlr1ArMn5_!!0-item_pic.jpg_180x180.jpg_.webp",
            title: "回忆录"
          },
          {
            image: "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2200778412989/O1CN016rflfw1Xx0S7OiEkK_!!2200778412989.jpg_180x180.jpg_.webp",
            title: "书籍定制"
          }
        ]
      },
      {
        leftlist: 'diy包',
        rightlist: [{
            image: "../../images/my/category/nanzhuang1.jpg",
            title: "T恤/Polo衫/背心"
          },
          {
            image: "../../images/my/category/nanzhuang2.jpg",
            title: "卫衣"
          },
          {
            image: "../../images/my/category/nanzhuang3.jpg",
            title: "裤装"
          },
          {
            image: "../../images/my/category/nanzhuang4.jpg",
            title: "外套/马甲"
          },
          {
            image: "../../images/my/category/nanzhuang5.jpg",
            title: "运动内裤"
          },
          {
            image: "../../images/my/category/nanzhuang6.jpg",
            title: "紧身服"
          },
          {
            image: "../../images/my/category/nanzhuang7.jpg",
            title: "比赛服"
          },
          {
            image: "../../images/my/category/nanzhuang8.jpg",
            title: "套装"
          },
          {
            image: "../../images/my/category/nanzhuang9.jpg",
            title: "羽绒服"
          },
          {
            image: "../../images/my/category/nanzhuang10.jpg",
            title: "棉服"
          },
          {
            image: "../../images/my/category/nanzhuang11.jpg",
            title: "其他服装"
          }
        ]
      },
      {
        leftlist: '拼图',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/3122D74F896516794736E139BEA24CBD.jpg",
            title: "T恤"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/C9F373DECC25E67ED5A74FB3D0FCB574.jpg",
            title: "卫衣"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/3A7E4D934AAEC574976F3B65081FE197.jpg",
            title: "裤装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/8F6B70F48CFA2B90E37D5B02DC2F2E39.jpg",
            title: "裙装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/AB078DFC2A1CE6A3D3A3BA3B79F80B31.jpg",
            title: "运动文胸"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/D9657B8340FB10132D32443B6DB3F01E.jpg",
            title: "外套/马甲"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/A9ABF902F457B595EAFED56E9DC85C2A.jpg",
            title: "比赛服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/2C8378CE49E81BA4481D89EB83DB2D6D.jpg",
            title: "紧身服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/2569279921581627D77CFFA88A857974.jpg",
            title: "套装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/C239070747DD262F30E1BFE550ECF3FA.jpg",
            title: "羽绒服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/702CACBD3553E1B97A441917FEF888FC.jpg",
            title: "棉服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/C4BFC3652C817BAB3D7AD1857F498C8C.jpg",
            title: "其他服装"
          }
        ]
      },
      {
        leftlist: 'diy小屋',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/EE7F92005FD05AA3684AAC9B5BB23A4C.jpg",
            title: "跑步鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/599D1D16DAE1126F263FD5401D2BDF42.jpg",
            title: "篮球鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/F37FC99CA7DBC3F4D8A98FECCF9CD0A2.jpg",
            title: "休闲鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/7CF1D2409AE32FA1FC321BDF004335C9.jpg",
            title: "凉鞋/拖鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/E0B14A3D9F3A0E6544C4B53CCD54DD79.jpg",
            title: "运动时尚鞋"
          }
        ]
      },
      {
        leftlist: 'diy画',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/FA3FD9AF92EE1D693FB38D5028F23F7E.jpg",
            title: "跑步鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/366CB04CC2C598E9D2427FB33B5E0B23.jpg",
            title: "凉鞋/拖鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/1C1C5F474887B99FAA4E2E67C1343D95.jpg",
            title: "运动时尚鞋"
          }
        ]
      },
      {
        leftlist: '手链系列',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/32492ADA1388096CF39C501DE8F48398.jpg",
            title: "卫衣"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/35470D2217CF80604024C5501E004C9E.jpg",
            title: "外套/马甲"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/815BCE3D338B405E8CE7F4D8371F11BF.jpg",
            title: "T恤/Polo衫/背心"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/7028FADF16D22ED1F535B45268DF216D.jpg",
            title: "裤装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/31831122462A44705F5AE4B66583BAB1.jpg",
            title: "比赛服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/693282049DCA8E2F4E889E23D5CF578B.jpg",
            title: "棉服/羽绒服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/DDA912FBC407EAD494FA4ED4F94D3804.jpg",
            title: "套装"
          }
        ]
      },
      {
        leftlist: '积木',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/0580D838AA8C419E549775033424A3AC.jpg",
            title: "卫衣"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/642A9CEADAFAD2F3EF28FF3BFD2DC1D2.jpg",
            title: "外套/马甲"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/31831122462A44705F5AE4B66583BAB1.jpg",
            title: "比赛服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/A8FF673B51B8061D572E48F872241E2B.jpg",
            title: "T恤/Polo衫/背心"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/73E39AB3AAA59FFB682B5EBC1997E5DD.jpg",
            title: "裤装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/FCAF70E0A4AF3DDD7FBBEC53EE9DDD33.jpg",
            title: "裙装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/47182DEE1352EE63348B762AE003311F.jpg",
            title: "棉服/羽绒服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/DDA912FBC407EAD494FA4ED4F94D3804.jpg",
            title: "套装"
          }
        ]
      },
      {
        leftlist: '家饰',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/3D6DE266BBF26ABF451E945848383ED4.jpg",
            title: "袜子"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/1DDC149FCD811D37F42259F8865AE07A.jpg",
            title: "包"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/4BAB63B2A23A48A8B8781635DCE635A8.jpg",
            title: "护具"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/5515FE0B3D8DEF7653E3C8A6345F9589.jpg",
            title: "帽子"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/AE514CA089C12C985ECF70A6876AA64F.jpg",
            title: "手套/围巾"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/85443F787EDEA9FBF746A1A647157FE0.jpg",
            title: "配饰"
          }
        ]
      },
      {
        leftlist: '实用系列',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/CC88DE23DD6F604B186509C6FB74DA96.jpg",
            title: "乒乓球装备"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/754D52C79E7E1F415DC38DE7244613A4.jpg",
            title: "羽毛球装备"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/A792E67EB3B0B37F07011F86D3F6CAB4.jpg",
            title: "专业竞技"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/891C9AC1650AB817D581C62E775ADB52.jpg",
            title: "球类"
          }
        ]
      },
      {
        leftlist: '废物利用',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/FC66873CE1758B090BEF2B3120B4AF33.jpg",
            title: "羽毛球拍"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/8AD66E38BC61DEEDF2DDEE4B151150A0.jpg",
            title: "羽毛球"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/8FC6640F2C4D915BB355799B4648A762.jpg",
            title: "羽毛球配件"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/6372CC7FC8131CAD5FF1D71C0C9A74AE.jpg",
            title: "羽毛球鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/DF96BDF9630D2E8E5909535C65845116.jpg",
            title: "羽毛球服"
          }
        ]
      },
      {
        leftlist: '其他',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/E17C6B0CBF488925055693E0B3F9A297.jpg",
            title: "乒乓球台"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/750B1F6974256A02BB67CCF7D384E808.jpg",
            title: "乒乓球板"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201701/02FC4B869A184D3CA570177BF7D5341E.jpg",
            title: "乒乓球"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/4D23A14CBA070D51DA68A0F855EE82FB.jpg",
            title: "乒乓球鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/466D77FE16A2D6F90D396EF6ECAC5C55.jpg",
            title: "乒乓球服"
          }
        ]
      },
      {
        leftlist: '团购服务',
        rightlist: [{
            image: "../../images/select1.jpg",
            title: "小米10"
          },
          {
            image: "../../images/select1.jpg",
            title: "小米10"
          },
          {
            image: "../../images/select1.jpg",
            title: "小米10"
          },
          {
            image: "../../images/select1.jpg",
            title: "小米10"
          },
          {
            image: "../../images/select1.jpg",
            title: "小米10"
          },
          {
            image: "../../images/select1.jpg",
            title: "小米10"
          }
        ]
      }
    ],

    height: 0,
    //导航栏下标值
    navIndex: 0,
    // //左侧导航距离顶部的距离
    // scrollTopList: 0,
    //右侧内容对应的下标值
    contentIndex: 0,
    //左边导航距离顶部位置
    leftScrollTop: 0


  },

  // 点击跳转到订单页面
  toTeach: function (event) {
    var index = event.target.dataset.index
    wx.navigateTo({
      url: '/pages/teach/teach',
    })
  },
  //左边导航的点击事件
  leftNavIndex: function (event) {
    var index = event.target.dataset.index
    this.setData({
      navIndex: index,
      contentIndex: index,
      leftScrollTop: 50 * (index - 4)
    })
  },

  //右边滚动事件
  rightScroll: function (event) {
    //右边整体内容距离顶部的高度，初始化高度
    var hei = 0
    //获取右边商品数据
    var list = this.data.list
    for (let i = 0; i < list.length; i++) {
      //获取id为#scroll-的节点元素,节点信息
      wx.createSelectorQuery().select('#scroll-' + i).fields({
          //获取节点的尺寸（宽、高）
          size: true
        },
        function (res) {
          // console.log(res.height)
          //将右边每个模块距离顶部的位移作为属性定义到右边数组中
          list[i].top = hei
          //将当前元素的高度和距离顶的位置相加
          //强制转换去掉浮点数
          hei += parseInt(res.height + 50)
          //元素底部距离顶部的高度
          list[i].bottom = hei
          // console.log(hei)
        }).exec()
    }
    // console.log(list)
    //修改data的数据
    this.setData({
      list
    })
    var scrollTop = event.detail.scrollTop
    // console.log(event.detail)
    //循环遍历右边商品的数组
    for (let i = 0; i < list.length; i++) {
      //判断滚动的范围
      if (scrollTop >= list[i].top && scrollTop < list[i].bottom) {
        this.setData({
          navIndex: i,
          leftScrollTop: 50 * (i - 4)
        })
      }
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var list = this.data.list
    // 先定义初始高度和距离顶部的高度数据
    var height = 0
    var scrollTopList = []
    //循环遍历右边数组
    for (let i = 0; i < list.length; i++) {
      //获取rightContent节点
      wx.createSelectorQuery().select('#scroll-' + i).boundingClientRect(function (rect) {
        //将每个rightContent距离顶部位置插入到数组中
        scrollTopList.push(parseInt(height))
        //每个rightContent距离顶部位置的前面节点的高度相加
        height += rect.height //节点高度

      }).exec()
    }
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      scrollTopList
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})